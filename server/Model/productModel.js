const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true }, 
    price: { type: Number, required: true },
    image: { type: String, required: true }
});

const product = mongoose.model('products', ProductSchema);

module.exports = product;