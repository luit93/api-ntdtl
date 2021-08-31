import TaskSchema from "./TaskList.schema.js";

//insert task
//promise method
// export const insertTask = (newTask) => {
//   console.log(newTask, "from model");
// return new Promise((resolve, reject) => {
//   TaskSchema(newTask)
//     .save()
//     .then((data) => {
//       resolve(data);
//     })
//     .catch((error) => {
//       console.log(error);
//       reject(error);
//     });
// });
//};
//async/await method
export const insertTask = async (newTask) => {
  try {
    const data = await TaskSchema(newTask).save();
    return data;
  } catch (error) {
    return error;
  }
};

//read all tasks
//promise method
// export const getTasks = () => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const result = await TaskSchema.find();
//       resolve(result);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };
//async method
export const getTasks = async () => {
  try {
    const result = await TaskSchema.find();
    return result;
  } catch (error) {
    return error;
  }
};
//get single task
export const getATask = async (_id) => {
  try {
    const result = await TaskSchema.findById(_id);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};
//update task

//delete task
