import mongoose from "mongoose";

const mongoClient = async () => {
  try {
    console.log("connecting mongodb....");
    // const mongoUrl = "mongodb://localhost:27017/a_task_list";
    const mongoUrl = process.env.MONGO_CLIENT;
    console.log(mongoUrl);
    !process.env.MONGO_CLIENT &&
      console.log("please add mongodb connection in env variale MONGO_CLIENT");
    const con = await mongoose.connect(mongoUrl);
    if (con) {
      console.log("mongodb connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default mongoClient;
