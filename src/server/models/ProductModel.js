// models/ProductModel.js - for the individual product entity

const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
    prodName: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: [String], required: true }, // Array of sizes
    color: { type: String, required: true },
    material: { type: String }, // Optional field for clothing
    brand: { type: String }, // Optional field for footwear
    price: { type: Number, required: true }
});

// Export the model
module.exports = mongoose.model('Product', productSchema);
