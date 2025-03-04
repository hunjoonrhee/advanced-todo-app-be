import todoModel from "../models/todoModel";

export const createANewTodo = async (text: String) => {
  const newTodo = await todoModel.create({ text });
  return newTodo;
};
