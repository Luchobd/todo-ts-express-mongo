import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  deleteTaskItem,
  getTaskItem,
  getTasksItems,
  insertItem,
  updateTaskItem,
} from "../services/item";

export const getItems = async (req: Request, res: Response) => {
  try {
    const responseInsert = await getTasksItems();
    res.status(200).send(responseInsert);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseInsert = await getTaskItem(id);
    const data = responseInsert ? responseInsert : "This task does not exist";
    res.status(200).send(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createItem = async (req: Request, res: Response) => {
  try {
    const responseItem = await insertItem(req.body);
    res.status(200).send(responseItem);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const responseItem = await updateTaskItem(id, body);
    res.status(200).send(responseItem);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseItem = await deleteTaskItem(id);
    res.status(200).send(responseItem);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
