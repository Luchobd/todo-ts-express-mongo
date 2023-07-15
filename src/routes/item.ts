import { Router } from "express";
import {
  getItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
} from "../controllers/item";

const router = Router();

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };
