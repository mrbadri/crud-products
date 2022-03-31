const joi = require("joi");
joi.objectId = require("joi-objectid")(joi);

const validateCreateProduct = (data) => {
  const schema = joi.object({
    name: joi.string().min(3).max(50).required(),
    color: joi.string().min(3).max(50).required(),
    price: joi.number().required(),
    count: joi.number().required(),
  });

  return schema.validate(data);
};

const validateReadProduct = (data) => {
  const schema = joi.object({
    id: joi.objectId().required(),
  });

  return schema.validate(data);
};

const validateUpdateProduct = (data) => {
  const schema = joi.object({
    name: joi.string().min(3).max(50).required(),
    color: joi.string().min(3).max(50).required(),
    price: joi.number().required(),
    count: joi.number().required(),
    id: joi.objectId().required(),
  });

  return schema.validate(data);
};

const validateDeleteProduct = (data) => {
  const schema = joi.object({
    id: joi.objectId().required(),
  });

  return schema.validate(data);
};

module.exports = {
  validateCreateProduct,
  validateReadProduct,
  validateUpdateProduct,
  validateDeleteProduct,
};
