import express from "express";
import Mongoose from "mongoose";

import cors from "cors";
import userRouter from "./Routes/userRouter.js";

const app = express();
const port = 9999;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const dbpath = "mongodb://localhost/student";
Mongoose.connect(dbpath, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(console.log("Database is connected."))
  .catch((e) => {
    console.log("Connection error" + e);
  });

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
