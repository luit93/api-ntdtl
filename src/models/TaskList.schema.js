import mongoose from "mongoose";

const TaskListSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      default: "",
    },
    hr: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const TaskList = mongoose.model("Task_list", TaskListSchema);
export default TaskList;