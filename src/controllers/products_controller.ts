import productsModel from "../models/products_model";
import * as validator from "express-validator";
import { Request, Response } from "express";

function dbWrapper(res: Response, query = {} as any) {
  productsModel
    .find(query)
    .sort(query.sort)
    .then((products) => res.json({ products }))
    .catch((err) => res.status(500).json({ err }));
}

export function getAllProductsStatic(_: Request, res: Response) {
  dbWrapper(res);
}

export function getAllProducts(req: Request, res: Response) {
  const errors = validator.validationResult(req);
  const query = validator.matchedData(req);

  console.log(query);
  console.log(req.query)

  errors.isEmpty()
    ? dbWrapper(res, query)
    : res.status(400).json({ errors: errors.array() });
}
