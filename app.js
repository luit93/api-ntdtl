import express from "express";
import taskRouters from "./src/routers/taskRouters.js";
import userRouters from "./src/routers/userRouter.js";
import { userAuth } from "./src/middleware/auth.middleware.js";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
const app = express();
// connect to mongodb
import mongoClient from "./src/config/db.js";
mongoClient();
//middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("tiny"));
app.use(cors());
app.use(helmet());
const PORT = 8000;

app.use("/api/v1/task", userAuth, taskRouters);
app.use("/api/v1/user", userRouters);
app.use("/", (req, res) => {
  res.send("You have reache the API of NTDTL");
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`server is running at http//:localhost:${PORT}`);
});
