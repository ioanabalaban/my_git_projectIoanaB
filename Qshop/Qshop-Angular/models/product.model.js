var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    picture: String,
    name: String,
    price: {
        type: Number,
        min: 0
    },
    onSale: Boolean,
    description: String,
    specifications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Specification'
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    pictures: [String]
});

productSchema.methods.getPrice = function() {
    this.price = this.price + this.currency;

    return this.price;
};

var Product = mongoose.model('Product', productSchema);

module.exports = Product;
