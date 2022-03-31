const express = require("express");
const router = express.Router();

const Product = require("./../../models/product/index");
const {
  validateDeleteCustomer,
  validateUpdateCustomer,
  validateReadCustomer,
  validateCreateCustomer,
} = require("./../../validators/product/index");

// get list
router.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

// get per id
router.get("/api/products/:id", async (req, res) => {
  const { error } = validateReadCustomer(req.params.id);

  if (error) return res.status(400).send("Bad Request");

  const product = await Product.findById(req.params.id);

  res.send(product);
});

// new product
router.post("/api/products", (req, res) => {
  const { error } = validateCreateCustomer(req.body);

  if (error)
    return res.status(400).send({ success: false, message: error.message });

  let product = new Product({
    name: req.body.name,
  });
  product = product.save();

  res.send(product);
});

// edit product
router.put("/api/products/:id", async (req, res) => {
  const { error } = validateUpdateCustomer({
    ...req.body,
    id: req.params.id,
  });

  if (error)
    return res.status(400).send({ success: false, message: error.message });

  let product = Product.findById(req.params.id);
  product.name = req.body.name;
  product = await product.save();

  res.send(product);
});

// delete product
router.delete("/api/products/:id", async (req, res) => {
  const { error } = validateDeleteCustomer(req.params.id);

  if (error)
    return res.status(400).send({ success: false, message: error.message });

  await Product.findByIdAndRemove(req.params.id);

  res.status(200).send("Deleted");
});

module.exports = router;
