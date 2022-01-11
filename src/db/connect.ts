import mongoose from "mongoose";

export function init() {
  mongoose
    .connect(process.env.DB_URI as string)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error(err));
}
