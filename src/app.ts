import "dotenv/config";
import express from "express";
import productRoutes from "./routers/productsRouter";
import * as db from "./db/connect";

// constants
const app = express();
const port = process.env.PORT ?? 3000;

// middleware
app.use(express.json());

// routes
app.use("/api/v1/products", productRoutes);
app.get("/", (_, res) => res.redirect("/api/v1/products"));

// start the server
app.listen(port, () => console.log(`Server started at port ${port}`));

// start the database
db.init(process.env.DB_URI as string);
