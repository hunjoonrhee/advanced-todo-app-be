import express from "express";
import { createTodo, getAllTodos, editTodo, removeTodo } from "../controllers/todoController";

const router = express.Router();

router.post("/", createTodo);
router.get("/", getAllTodos);
router.put("/:id", editTodo);
router.delete("/:id", removeTodo);

export default router;
