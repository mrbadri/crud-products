const joi = require("joi");
joi.objectId = require("joi-objectid")(joi);

const validateCreateCustomer = (data) => {
  const schema = joi.object({});

  return schema.validate(data);
};

const validateReadCustomer = (data) => {
  const schema = joi.object({});

  return schema.validate(data);
};

const validateUpdateCustomer = (data) => {
  const schema = joi.object({});

  return schema.validate(data);
};

const validateDeleteCustomer = (data) => {
  const schema = joi.object({});

  return schema.validate(data);
};

module.exports = {
  validateCreateCustomer,
  validateReadCustomer,
  validateUpdateCustomer,
  validateDeleteCustomer,
};
