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
});s

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

// port
const port = process.env.port || 3000;

// listen
app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`app listen to port ${port}`);
});
