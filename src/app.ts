import "dotenv/config";
import express from "express";

// constants
const app = express();
const port = process.env.PORT ?? 3000;

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// start the server
app.listen(port, () => console.log(`Server started at port ${port}`));
