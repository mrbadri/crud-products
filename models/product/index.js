const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  price: Number,
  color: String,
  count: Number,
});

const ProductModel = new mongoose.model("product", schema);

module.exports = ProductModel;
