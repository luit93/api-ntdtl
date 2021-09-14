import dotenv from "dotenv";
dotenv.config();

import express from "express";
import taskRouters from "./src/routers/taskRouters.js";
import userRouters from "./src/routers/userRouter.js";
import { userAuth } from "./src/middleware/auth.middleware.js";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import path from "path";
const PORT = process.env.PORT || 5000;

const app = express();
// connect to mongodb
import mongoClient from "./src/config/db.js";
mongoClient();
//middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("tiny"));
app.use(cors());
// app.use(helmet());

app.use("/api/v1/task", userAuth, taskRouters);
app.use("/api/v1/user", userRouters);

//serve static files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/build", "index.html"));
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`server is running at http//:localhost:${PORT}`);
});
