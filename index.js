require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "xrays",
});

const dataRouter = require("./router/api/v1/data.js"); // Update the path to the correct router file

app.use("/api/v1/data", dataRouter); // Update the path to match the routes in data.js

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
