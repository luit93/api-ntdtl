import axios from "axios";
const rootUrl =
  process.env.NODE_ENV === "production"
    ? "/api/v1/task"
    : "http://localhost:5000/api/v1/task";

//adding datat to database
export const postTask = async (newTask) => {
  try {
    const { data } = await axios.post(rootUrl, newTask, {
      headers: {
        Authorization: window.localStorage.getItem("_id"),
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

//fetch all the tasks from database
export const fetchAllTasks = async () => {
  try {
    const { data } = await axios.get(rootUrl, {
      headers: {
        Authorization: window.localStorage.getItem("_id"),
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
//delete
export const deleteTasks = async (ids) => {
  try {
    const { data } = await axios.delete(rootUrl, {
      headers: {
        Authorization: window.localStorage.getItem("_id"),
      },
      data: ids,
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//update tasks
export const updateTasks = async (obj) => {
  try {
    const { data } = await axios.patch(rootUrl, obj, {
      headers: {
        Authorization: window.localStorage.getItem("_id"),
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
