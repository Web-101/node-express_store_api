import express from "express";
import productsModel from "../models/productsModel";
import * as validator from "express-validator";
import * as controller from "./productsProtocols";

// no params required
export function getAllProducts(req: express.Request, res: express.Response) {
  validator.validationResult(req).throw();

  productsModel
    .find(req.query)
    .then((products) => res.json(products.length))
    .catch((err) => res.status(500).json(err));
}

export function createProduct(req: express.Request, res: express.Response) {
  res.status(200).json({ message: "create product" });
}

// id param required
export function getProduct(req: express.Request, res: express.Response) {
  res.status(200).json({ message: "get product" });
}

export function updateProduct(req: express.Request, res: express.Response) {
  res.status(200).json({ message: "update product" });
}

export function deleteProduct(req: express.Request, res: express.Response) {
  res.status(200).json({ message: "delete product" });
}
