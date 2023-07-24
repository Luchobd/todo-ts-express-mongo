import { Request, Response } from "express";
import { login, register } from "../services/auth";

export const registerController = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const user = await register(body);
    res.status(200).send(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await login({ email, password });
    res.status(200).send(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};