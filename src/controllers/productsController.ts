import express from "express";
import productsModel from "../models/productsModel";
import * as controller from "./productsProtocols";

// no params required
export function getAllProducts(req: express.Request, res: express.Response) {
  const query: controller.queryProtocol = {};
  req.query.name && (query.name = String(req.query.name));
  req.query.company && (query.company = String(req.query.company));
  req.query.featured && (query.featured = Boolean(req.query.featured));
  req.query.rating && (query.rating = Number(req.query.rating));
  req.query.price && (query.price = Number(req.query.price));
  
  console.log(query);

  productsModel
    .find(query)
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
