import express from "express";
import * as productsController from "../controllers/products_controller";
import productsValidation from "../validators/product_validator";

const router = express.Router();

router.get("/products", productsValidation, productsController.getAllProducts);

export default router;
