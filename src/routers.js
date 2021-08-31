import express from "express";
const router = express.Router();
import { insertTask } from "./models/TaskList.model.js";

router.all("/", (req, res, next) => {
  console.log("got hit");
  // res.send("ok");
  next();
});
//return all tasks
router.get("/", (req, res) => {
  res.json({ message: "return from get" });
});

//receives new  task and stores in database
router.post("/", async (req, res) => {
  try {
    const result = await insertTask(req.body);
    res.json({ status: "success", message: "return from post", result });
  } catch (error) {
    console.log(error);
    res.json({ status: "failure", message: "return from post" });
  }
});

//update data in database
router.patch("/", (req, res) => {
  res.json({ message: "return from patch" });
});

//delete data based on id
router.delete("/", (req, res) => {
  res.json({ message: "return from delete" });
});
export default router;
