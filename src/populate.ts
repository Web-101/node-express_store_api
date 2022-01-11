import "dotenv/config";
import * as db from "./db/connect";
import productsModel from "./models/productsModel";
import data from "./data/products.json";

db.init(process.env.DB_URI as string);

productsModel
  .insertMany(data)
  .then(() => console.log("data inserted"))
  .catch((err) => console.log(err));
