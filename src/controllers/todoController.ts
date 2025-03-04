import { Request, Response } from "express";
import { createANewTodo } from "../services/todoService";

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
