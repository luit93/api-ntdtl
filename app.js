import express from "express";
import routers from "./src/routers.js";
import morgan from "morgan";
const app = express();
// connect to mongodb
import mongoClient from "./src/config/db.js";
mongoClient();
//middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan());
const PORT = 8000;

app.use("/api/v1", routers);

app.use("/", (req, res) => {
  res.send("You have reache the API of NTDTL");
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`server is running at http//:localhost:${PORT}`);
});
