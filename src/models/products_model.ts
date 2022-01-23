import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name must be provided"],
    maxlength: 100,
  },

  price: {
    type: Number,
    required: [true, "product price must be provided"],
    maxlength: 20,
  },

  company: {
    type: String,
    required: [true, "product company must be provided"],
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "invalid company",
    },
  },

  featured: {
    type: Boolean,
    default: false,
  },

  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
    maxlength: 1,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Products", productsSchema);
