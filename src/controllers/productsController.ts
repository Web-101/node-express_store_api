import express from "express";
import productsModel from "../models/productsModel";
import * as validator from "express-validator";

// no params required
export function getAllProducts(req: express.Request, res: express.Response) {
  validator.validationResult(req).throw();

  productsModel
    .find(req.query)
    .then((products) => res.json(products.length))
    .catch((err) => res.status(500).json(err));
}
