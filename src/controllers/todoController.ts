import { Request, RequestHandler, Response } from "express";
import { createANewTodo, retrieveTodos, updateTodo, deleteTodo } from "../services/todoService";

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;
    // 이 텍스트값은 서비스의 적절한 함수로 들어간다.
    const newTodo = await createANewTodo(text);
    res.status(201).json({ newTodo });
  } catch (err) {
    res.status(500).json({ message: "Server Error", err });
  }
};

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await retrieveTodos();
    res.status(200).json({ todos });
  } catch (err) {
    res.status(500).json({ message: "Server Error", err });
  }
};

export const editTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;

    const updatedTodo = await updateTodo(id, completed);
    res.status(200).json({ updatedTodo });
  } catch (err) {
    res.status(500).json({ message: "Server Error", err });
  }
};

export const removeTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteTodo(id);
    res.status(200).json({ message: `Todo ${id} is deleted successfully` });
  } catch (err) {
    res.status(500).json({ message: "Server Error", err });
  }
};
