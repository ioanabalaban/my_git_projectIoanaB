var express = require('express');
var mongoose = require('mongoose');
var product = require('./models/product.model');
var review = require('./models/review.model');
mongoose.connect('mongodb://localhost:27017/myappdatabase');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello Express!');
})

app.listen(3000, function() {
    console.log('Express listening on port 3000');
})

var newProduct = product({
    name: 'Produs1',
    price: 456,
    currency: '$',
    description: 'bla bla bla bla',
    picture: '../assets/images/p1.jpg',

});

newProduct.save(function(err) {
    if (err) throw err;

    console.log('Product add');
});

var newReview = review({
    author: 'Ioana',
    text: 'blaaa blaaaa blaaa',
    rating: 4

});

newReview.save(function(err) {
    if (err) throw err;
    console.log('Review add');
});

product.find({}, function(err, products) {
    if (err) throw err;

    console.log(products);
});

// product.findById('57a05d7300b0f5180f485b9e', function(err, productDoc) {
//     if (err) throw err;
//     review.findById('57a05f1ac6839c660f5c271e', function(err, reviewDoc) {
//         if (err) throw err;
// 				productDoc.reviews.push(reviewDoc.id);
//         productDoc.save(function(err) {
//             if (err) throw err;
//             console.log('Product succesfully updated!');
//         });
//     });
// });


// product.find().populate('reviews').exec(function(err, productDoc){
// if(err) throw err;
// console.log(productDoc);
//
// });

product.findByIdAndRemove('57a05f1ac6839c660f5c271d', function(err){
	if(err) throw err;
	console.log('Product deleted!');
});
