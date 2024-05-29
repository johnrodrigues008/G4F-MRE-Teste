import "dotenv/config";
import "./database/connection";
import express from "express";
import cors from "cors";
import { noticiaRouter } from "./routes/noticias";

const app = express();

app.use(cors());
app.use(express.json());
app.use(noticiaRouter);

export { app };