import express from "express";
const router = express.Router();
import {
  insertTask,
  getTasks,
  getATask,
  deleteTasks,
} from "./models/TaskList.model.js";

router.all("/", (req, res, next) => {
  console.log("got hit");
  // res.send("ok");
  next();
});
//return all tasks
router.get("/:_id?", async (req, res) => {
  const { _id } = req.params;
  let result = null;
  if (_id) {
    result = await getATask(_id);
  } else {
    result = await getTasks(_id);
  }

  res.json({ message: "return from get", result });
});
//returns single tasks based on id
// router.get("/:_id", async (req, res) => {

//   const result = await getATask(_id);
//   // console.log(_id);
//   console.log(result);
//   res.json({
//     status: "success",
//     message: result?._id ? "task found" : "Task not found",
//     result,
//   });
// });

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
router.delete("/", async (req, res) => {
  console.log(req.body);
  const result = await deleteTasks(req.body);
  console.log(result);
  if (result.deletedCount > 0) {
    return res.json({ status: "success", message: "task deleted" });
  }
  res.json({ status: "error", message: "item not found,runable to delete" });
});
export default router;
