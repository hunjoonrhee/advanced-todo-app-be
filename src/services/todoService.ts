import todoModel from "../models/todoModel";

export const createANewTodo = async (text: String) => {
  const newTodo = await todoModel.create({ text });
  return newTodo;
};

export const retrieveTodos = async () => {
  const todos = await todoModel.find();
  return todos;
};

export const updateTodo = async (id: string, completed: boolean) => {
  const updatedTodo = await todoModel.findByIdAndUpdate(id, { completed }, { new: true });
  return updatedTodo;
};

export const deleteTodo = async (id: string) => {
  await todoModel.findByIdAndDelete(id);
};
