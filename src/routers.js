import express from "express";
const router = express.Router();
import {
  insertTask,
  getTasks,
  getATask,
  deleteTasks,
  updateTask,
} from "./models/TaskList.model.js";

router.all("/", (req, res, next) => {
  console.log("got hit");
  // res.send("ok");
  next();
});
//return all tasks
router.get("/:_id?", async (req, res) => {
  try {
    const { _id } = req.params;
    let result = null;
    if (_id) {
      result = await getATask(_id);
    } else {
      result = await getTasks(_id);
    }
    res.json({ status: "success", message: "Here are the tasks", result });
  } catch (error) {
    res.json({ status: "error", message: "No results", result });
  }
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
    res.json({ status: "success", message: "New task has been added", result });
  } catch (error) {
    console.log(error);
    res.json({ status: "failure", message: "Couldn't add new task" });
  }
});

//update data in database
router.patch("/", async (req, res) => {
  const result = await updateTask(req.body);
  if (result?.id) {
    console.log(req.body);
    console.log(result);
    return res.json({
      status: "success",
      message: " item was successfully updated",
      result,
    });
  }
  res.json({ status: "error", message: "unable to update" });
});

//delete data based on id
router.delete("/", async (req, res) => {
  const ids = req.body;
  console.log(ids);
  console.log(req.body);
  const result = await deleteTasks(ids);
  console.log(result);
  if (result?.deletedCount > 0) {
    return res.json({ status: "success", message: "tasks deleted" });
  }
  res.json({ status: "error", message: "item not found,runable to delete" });
});
export default router;
