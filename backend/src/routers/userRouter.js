import express from "express";
const router = express.Router();
import { insertUser, getUser } from "../models/user/User.model.js";

router.all("/", (req, res, next) => {
  console.log("got hit");
  // res.send("ok");
  next();
});

//login user
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    //call db
    const result = await getUser(req.body);
    if (result?._id) {
      return res.json({
        status: "success",
        message: "User logged in successfully",
        result,
      });
    }
    res.json({
      status: "error",
      message: "user not found. Please register user",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: "unable to log you in at the moment",
    });
  }
});

//create new user
router.post("/register", async (req, res) => {
  try {
    const result = await insertUser(req.body);

    console.log(result, "user created");
    if (result?._id) {
      return res.json({
        status: "success",
        message: "New user created, log in now",
      });
    }
    res.json({
      status: "error",
      message: "unable to create the user",
    });
  } catch (error) {
    let msg = "unable to create user, try again";
    if (error.message.includes("E11000 duplicate key error collection")) {
      msg = "user already exists, try different username ";
    }
    res.json({
      status: "error",
      message: msg,
    });
  }
});

export default router;
