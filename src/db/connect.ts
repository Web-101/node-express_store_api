import mongoose from "mongoose";

export function init(uri: string) {
  mongoose
    .connect(uri)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error(err));
}
