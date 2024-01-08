import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import ProductRoutes from "./routes/productRoutes.js";
import UserRoutes from "./routes/userRoutes.js";

import { connect, syncronise } from "./config/dbconfig.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const staticDirectory = "./images";
app.use("/images", express.static(staticDirectory));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/products", ProductRoutes);
app.use("/users", UserRoutes);
app.get("/", (req, res) => {
  res.status(200).json({ path1: "/products", path2: "/users" });
});

app.listen(process.env.PORT, () => {
  setTimeout(connect, 1000);
  setTimeout(syncronise, 1000);
  console.log(`server is running on port ${process.env.PORT}`);
});
