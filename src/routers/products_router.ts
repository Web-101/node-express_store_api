import express from "express";
import * as productsController from "../controllers/products_controller";
import productsValidation from "../validators/product_validator";

const router = express.Router();

router
  .route("/static")
  .get(productsController.getAllProductsStatic);

router
  .route("/search")
  .get(productsValidation, productsController.getAllProducts);

export default router;
