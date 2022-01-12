import express from "express";
import * as productsController from "../controllers/productsController";
import apiSchema from "../validations/apiSchema";

const router = express.Router();

router.get("/products", apiSchema, productsController.getAllProducts);

export default router;
