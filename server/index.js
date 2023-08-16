import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
// import item from "./src/routes/item";
const app = express();
const PORT = process.env.PORT || 3300;

dotenv.config();

app.use(cors());
app.use(express.json());
// app.use("/items", item);

app.get("/", (req, res) => {
  res.send("root directory");
});

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Databse connected and server is running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err));
