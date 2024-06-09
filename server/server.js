import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import ConnectDB from "./config/ConnectDB";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
const PORT = process.env.PORT || 8080;
ConnectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`SERVER PORT: ${PORT}`);
  });
});
