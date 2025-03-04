import express from "express";
import mongoose from "mongoose";
import todoRouter from "./routers/todoRouter";

const app = express();
app.use(express.json());

const MONGODB_URI = "mongodb://127.0.0.1:27017/todo-app-db";
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected...");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err);
    process.exit(1);
  });

app.use("/todos", todoRouter);

app.listen(4000, () => {
  console.log("server started and listening port 4000");
});
