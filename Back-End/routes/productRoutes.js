import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productControllers.js";
import express from "express";

const router = express.Router();

router.get("/allproducts", getProducts);
router.get("/:id", getProduct);
router.post("/create", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
