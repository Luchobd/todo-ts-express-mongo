import { Schema, model } from "mongoose";
import { Tasks } from "../interfaces/tasks.interface";

const ItemSchema = new Schema<Tasks>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemModel = model<Tasks>("Items", ItemSchema);
export default ItemModel;
