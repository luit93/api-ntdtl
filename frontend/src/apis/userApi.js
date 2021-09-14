import axios from "axios";
const rootUrl =
  process.env.NODE_ENV === "production "
    ? "/api/v1/user"
    : "http://localhost:5000/api/v1/user";

//adding datat to database
export const postUser = async (newUser) => {
  try {
    const { data } = await axios.post(rootUrl + "/register", newUser);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

// login user
export const getUser = async (newUser) => {
  try {
    const { data } = await axios.post(rootUrl, newUser);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
