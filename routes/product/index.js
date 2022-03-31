const express = require("express");
const router = express.Router();

const Product = require("./../../models/product/index");
const {
  validateDeleteCustomer,
  validateUpdateCustomer,
  validateReadCustomer,
  validateCreateCustomer,
} = require("./../../validators/product/index");

module.exports = router;
