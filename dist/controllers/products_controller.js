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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.getAllProductsStatic = void 0;
var products_model_1 = __importDefault(require("../models/products_model"));
var validator = __importStar(require("express-validator"));
function dbWrapper(res, query) {
    var _a, _b, _c;
    if (query === void 0) { query = {}; }
    var sort = (_a = query.sort) !== null && _a !== void 0 ? _a : "createdAt";
    var limit = (_b = query.limit) !== null && _b !== void 0 ? _b : 10;
    var page = (_c = query.page) !== null && _c !== void 0 ? _c : 1;
    var skip = (page - 1) * limit;
    products_model_1.default
        .find(query)
        .sort(sort)
        .limit(limit)
        .skip(skip)
        .then(function (products) { return res.json({ products: products }); })
        .catch(function (err) { return res.status(500).json({ err: err }); });
}
function getAllProductsStatic(_, res) {
    dbWrapper(res);
}
exports.getAllProductsStatic = getAllProductsStatic;
function getAllProducts(req, res) {
    var errors = validator.validationResult(req);
    var query = validator.matchedData(req);
    console.log(query);
    console.log(req.query);
    errors.isEmpty()
        ? dbWrapper(res, query)
        : res.status(400).json({ errors: errors.array() });
}
exports.getAllProducts = getAllProducts;
