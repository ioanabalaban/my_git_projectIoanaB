var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    price: {
        type: String,
        min: 0
    },
    currency: String,
    description: String,
    picture: String,
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    created_at: Date,
    update_at: Date
});

productSchema.methods.getPrice = function() {
    this.price = this.price + this.currency;

    return this.price;
};

productSchema.pre('save', function(next) {
    var currentDate = new Date();

    this.update_at = currentDate;

    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});



var Product = mongoose.model('Product', productSchema);

module.exports = Product;
