import { Tasks } from "../interfaces/tasks.interface";
import ItemModel from "../models/item";

export const getTasksItems = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

export const getTaskItem = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id });
  return responseItem;
};

export const insertItem = async (item: Tasks) => {
  const responseInset = await ItemModel.create(item);
  return responseInset;
};

export const updateTaskItem = async (id: string, data: Tasks) => {
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

export const deleteTaskItem = async (id: string) => {
  const responseItem = await ItemModel.findOneAndDelete({ _id: id });
  return responseItem;
};
