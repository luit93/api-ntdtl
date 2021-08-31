import TicketSchema from "./TaskList.schema.js";

//insert task

export const insertTask = (newTask) => {
  console.log(newTask, "from model");
  return new Promise((resolve, reject) => {
    TicketSchema(newTask)
      .save()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

//read all tasks

//get single task

//update task

//delete task
