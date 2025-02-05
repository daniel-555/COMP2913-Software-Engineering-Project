import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.send("connected");
});

// Initialise database connection
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    console.log("App connected to database");

    app.listen(process.env.PORT, () => {
      console.log("Server listening on http://localhost:" + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
