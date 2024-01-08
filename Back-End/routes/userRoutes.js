import express from "express";
import {
  createUser,
  login,
  userlogout,
  deleteUser,
} from "../controllers/userControllers.js";

import { authorize } from "../middlewares/auth.js";

const router = express.Router();

router.post("/logout", authorize, userlogout);
router.post("/signup", createUser);
router.post("/login", login);
router.delete("/:id", authorize, deleteUser);

export default router;
