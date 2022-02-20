const mongoose = require('mongoose');

const Product = mongoose.model('products', {
productName : String,
productQuantity : Number,
});

module.exports = Product;