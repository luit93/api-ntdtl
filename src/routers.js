import express from "express";
const router = express.Router();

router.all("/", (req, res, next) => {
  console.log("got hit");
  res.send("ok");
});

export default router;
