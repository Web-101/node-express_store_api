import express from "express";

// no params required
export function getAllProducts(req: express.Request, res: express.Response) {
  res.status(200).json({ message: "get all products" });
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
