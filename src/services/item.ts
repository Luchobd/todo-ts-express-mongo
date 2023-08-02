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
  if (item.image === "") {
    item.image = "https://cdn-icons-png.flaticon.com/512/906/906334.png";
  }
  const responseInset = await ItemModel.create(item);
  return responseInset;
};

export const updateTaskItem = async (id: string, data: Tasks) => {
  if (data.image === "") {
    data.image = "https://cdn-icons-png.flaticon.com/512/906/906334.png";
  }
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

export const deleteTaskItem = async (id: string) => {
  const responseItem = await ItemModel.findOneAndDelete(
    { _id: id },
    {
      new: true,
    }
  );
  return responseItem;
};
