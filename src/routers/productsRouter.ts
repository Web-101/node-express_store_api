import express from "express";

const router = express.Router();

router
  .route("/")
  .get((req, res) => res.send("Get all products"))
  .post((req, res) => res.send("Create a new product"));

router
  .route("/:id")
  .get((req, res) => res.send("Get a product"))
  .put((req, res) => res.send("Update a product"))
  .delete((req, res) => res.send("Delete a product"));

export default router;
