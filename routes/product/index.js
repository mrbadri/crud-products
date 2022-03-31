const express = require("express");
const router = express.Router();

const Product = require("./../../models/product/index");
const {
  validateDeleteProduct,
  validateUpdateProduct,
  validateReadProduct,
  validateCreateProduct,
} = require("./../../validators/product/index");

// read list
router.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

// read per id
router.get("/api/products/:id", async (req, res) => {
  const { error } = validateReadProduct({
    id: req.params.id,
  });

  if (error) return res.status(400).send("Bad Request");

  const product = await Product.findById(req.params.id);

  res.send(product);
});

// create product
router.post("/api/products", async (req, res) => {
  const { error } = validateCreateProduct(req.body);

  if (error)
    return res.status(400).send({ success: false, message: error.message });

  let product = new Product({
    name: req.body.name,
    color: req.body.color,
    price: req.body.price,
    count: req.body.count,
  });
  product = await product.save();

  res.send(product);
});

// update product
router.put("/api/products/:id", async (req, res) => {
  const { error } = validateUpdateProduct({
    ...req.body,
    id: req.params.id,
  });

  if (error)
    return res.status(400).send({ success: false, message: error.message });

  await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.send(docs);
      }
    }
  );
});

// delete product
router.delete("/api/products/:id", async (req, res) => {
  const { error } = validateDeleteProduct({
    id: req.params.id,
  });

  if (error)
    return res.status(400).send({ success: false, message: error.message });

  await Product.findByIdAndRemove(req.params.id);

  res.status(200).send("Deleted");
});

module.exports = router;
