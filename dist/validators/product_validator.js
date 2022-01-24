"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var validator = __importStar(require("express-validator"));
var productsSchema = validator.checkSchema({
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
        isObject: true,
        custom: {
            options: function (value) {
                var keys = Object.keys(value);
                var values = Object.values(value);
                var validKeys = ["$gt", "$gte", "$lt", "$lte", "$eq"];
                var isKeyValid = keys.every(function (key) { return validKeys.includes(key); });
                var isValueValid = values.every(function (value) { return typeof value === "number"; });
                if (!isKeyValid || !isValueValid) {
                    throw new Error("invalid price query");
                }
                return isKeyValid && isValueValid;
            },
        },
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
    limit: {
        in: ["query"],
        optional: true,
        isInt: {
            options: { min: 1, max: 100 },
            errorMessage: "parameter value must be a number between 1 and 100",
        },
    },
    page: {
        in: ["query"],
        optional: true,
        isInt: true,
        toInt: true,
    },
    sort: {
        in: ["query"],
        optional: true,
        isObject: true,
        custom: {
            options: function (object) {
                var keys = Object.keys(object);
                var values = Object.values(object);
                var validKeys = ["name", "price", "rating"];
                var validValues = ["1", "-1"];
                var isKeyValid = keys.every(function (key) { return validKeys.includes(key); });
                var isValueValid = values.every(function (value) {
                    return validValues.includes(value);
                });
                if (!isKeyValid || !isValueValid) {
                    throw new Error("invalid sort parameter");
                }
                return isKeyValid && isValueValid;
            },
        },
    },
});
exports.default = productsSchema;
