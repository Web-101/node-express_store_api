import express from "express";
import * as productsController from "../controllers/productsController";
import apiSchema from "../validations/apiSchema";

const router = express.Router();

router
  .route("/")
  .get(apiSchema, productsController.getAllProducts)
  .post(productsController.createProduct);

router
  .route("/:id")
  .get(productsController.getProduct)
  .put(productsController.updateProduct)
  .delete(productsController.deleteProduct);

export default router;
