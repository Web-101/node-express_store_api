"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var productsSchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.model("Products", productsSchema);
