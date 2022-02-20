const express = require("express");
const joi = require("joi");
const app = express();

app.use(express.json());

let products = [
  {
    id: 1,
    name: "pen",
    price: 3000,
    color: "blue",
    count: 10,
  },
  {
    id: 2,
    name: "shoe",
    price: 80000,
    color: "brown",
    count: 10,
  },
  {
    id: 3,
    name: "pencil",
    price: 1000,
    color: "red",
    count: 10,
  },
];

// schema
const schema = joi.object({
  name: joi.string().min(3).max(50).required(),
  price: joi.number().required(),
  color: joi.string().min(3).max(50).required(),
  count: joi.number().required(),
});
s;

// get list
app.get("/api/products", (req, res) => {
  res.send(products);
});

// get per id
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id == id);

  if (!product) res.status(404).send({});

  res.send(product);
});

// new product
app.post("/api/products", (req, res) => {
  const lastProduct = products[products.length - 1];
  const newProduct = req.body;
  const { error } = schema.validate(newProduct);

  if (error)
    return res.status(400).send({ success: false, message: error.message });

  const product = {
    id: lastProduct.id + 1,
    name: newProduct.name,
    price: newProduct.price,
    color: newProduct.color,
    count: newProduct.count,
  };

  products.push(product);

  res.send(product);
});

// edit product
app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((product) => product.id == id);
  const { error } = schema.validate(req.body);

  if (error)
    return res.status(400).send({ success: false, message: error.message });

  if (index === -1)
    return res.status(404).send({ success: false, message: "not found!" });

  products[index].name = req.body.name;
  products[index].price = req.body.price;
  products[index].color = req.body.color;
  products[index].count = req.body.count;

  res.send(products[index]);
});

// delete product
app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((product) => product.id == id);

  if (index === -1)
    return res.status(404).send({ success: false, message: "not found!" });

  products = [...products.slice(0, index), ...products.slice(index + 1)];

  res.status(200).send();
});

// port
const port = process.env.port || 3000;

// listen
app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`app listen to port ${port}`);
});
