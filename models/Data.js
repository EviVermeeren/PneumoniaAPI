const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newPictureSchema = new Schema(
  {
    image: String,
    option: String,
  },
  {
    collection: "xrays",
  }
);

const Data = mongoose.model("Data", newPictureSchema);

module.exports = Data;
