const express = require("express");
const joi = require("joi");
const app = express();
const mongoose = require("mongoose");

const productRoutes = require("./routes/product/index");

app.use(express.json());
app.use(productRoutes);


// // schema
// const schema = joi.object({
//   name: joi.string().min(3).max(50).required(),
//   price: joi.number().required(),
//   color: joi.string().min(3).max(50).required(),
//   count: joi.number().required(),
// });


// connect DB
mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("-- DB Contected --");
  })
  .catch((error) => {
    console.log("DB Have Error:", error);
  });

// port
const port = process.env.port || 3000;

// listen
app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`app listen to port ${port}`);
});
