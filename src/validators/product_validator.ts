import * as validator from "express-validator";

const productsSchema = validator.checkSchema({
  name: {
    in: ["query"],
    optional: true,
    isString: true,
    isLength: {
      options: { min: 1, max: 100 },
    },
  },

  featured: {
    in: ["query"],
    optional: true,
    isBoolean: true,
    toBoolean: true,
  },

  price: {
    in: ["query"],
    optional: true,
    isNumeric: true,
    isLength: {
      options: { min: 1, max: 20 },
      errorMessage: "parameter length must be between 1 and 20",
    },
    toFloat: true,
  },

  company: {
    in: ["query"],
    optional: true,
    isLength: {
      options: { min: 1, max: 100 },
      errorMessage: "Company name must be between 1 and 100 characters",
    },
    isIn: {
      options: ["ikea", "liddy", "caressa", "marcos"],
      errorMessage: "invalid company",
    },
  },

  rating: {
    in: ["query"],
    optional: true,
    isLength: {
      options: { min: 1, max: 1 },
      errorMessage: "parameter length must be equal to 1",
    },
    isInt: {
      options: { min: 0, max: 5 },
      errorMessage: "parameter value must be a number between 0 and 5",
    },
  },
});

export default productsSchema;
