//Imports
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

//calls
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// variables
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const MONGO_URL = process.env.MONGO_URL;

if (!PORT || !HOST || !MONGO_URL) {
  console.error("❌ env variables are missing");
}

// route
app.get("/", (req, res) => {
  res.send("👋 Hello from server");
});

// database
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log(`Database connected`);
    app.listen(PORT, () => {
      console.log(`server is listening on http://${HOST}:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
