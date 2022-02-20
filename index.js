const express = require("express");
const joi = require("joi");
const app = express();

app.use(express.json());

// port
const port = process.env.port || 3000;

// listen
app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`app listen to port ${port}`);
});
