import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import dbConnect from "./config/mongo";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
dbConnect().then(() => console.log("Conexion Ready"));
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
