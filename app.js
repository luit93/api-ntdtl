import express from "express";
import routers from "./src/routers.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded());
const PORT = 8000;

app.use("/api/v1", routers);

app.use("/", (req, res) => {
  res.send("You have reache the API of NTDTL");
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`server is running at http//:localhost:${PORT}`);
});
