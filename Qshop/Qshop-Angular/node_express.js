var express = require('express');
var mongoose = require('mongoose');
var product = require('./models/product.model');
var review = require('./models/review.model');
var specification = require('./models/specification.model');
var bodyParser = require("body-parser");
mongoose.connect('mongodb://localhost:27017/myappdatabase');
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.get('/', function(req, res) {
    product.find({}, function(err, products) {
        if (err) throw err;
        res.send(products);
    });
});
app.post('/', function(req, res) {
    var productPost = new product({
        picture: req.body.picture,
        name: req.body.name,
        price: req.body.price,
        onSale: req.body.onSale,
        description: req.body.description,
        specifications: req.body.specifications,
        reviews: req.body.reviews,
        pictures: req.body.pictures,
    });
productPost.save(function(err, productPost) {
        if (err) throw err;
        res.json(201, productPost)
    });
});

app.post('/', function(req, res) {
    var reviewPost = new review({
        name: req.body.name,
        text: req.body.text
    });
reviewPost.save(function(err, reviewPost) {
        if (err) throw err;
        res.json(201, reviewPost)
    });
});

app.post('/', function(req, res) {
    var specificationPost = new specification({
        label: req.body.label,
        value: req.body.value
    });
specificationPost.save(function(err, specificationPost) {
        if (err) throw err;
        res.json(201, specificationPost)
    });
});


app.listen(3000, function() {
    console.log('Express listening on port 3000');
})

// var newProduct = product({
//   picture: '../assets/images/products/product-1.jpg',
//   name: 'Limited Price',
//   price: 299,
//   onSale: true,
//   description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis, massa fringilla consequat blandit, mauris ligula porta nisi, non tristique enim sapien vel nisl. Suspendisse vestibulum lobortis dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent nec tempus nibh. Donec mollis commodo metus et fringilla. Etiam venenatis, diam id adipiscing convallis, nisi eros lobortis tellus, feugiat adipiscing ante ante sit amet dolor. Vestibulum vehicula scelerisque facilisis. Sed faucibus placerat bibendum. Maecenas sollicitudin commodo justo, quis hendrerit leo consequat ac. Proin sit amet risus sapien, eget interdum dui. Proin justo sapien, varius sit amet hendrerit id, egestas quis mauris.',
//   pictures: [
//       '../assets/images/products/product-1.jpg',
//       '../assets/images/products/product-2.jpg',
//       '../assets/images/products/product-3.jpg'
//   ]
//
// });
//
// newProduct.save(function(err) {
//     if (err) throw err;
//
//     console.log('Product add');
// });
//
// var newReview = review({
//   name: 'OLI 1',
//   text: 'Great product 6/7 with rice'
// });
//
// newReview.save(function(err) {
//     if (err) throw err;
//     console.log('Review add');
// });
//
// var newSpecification = specification({
//
//       label: 'prop 1',
//       value: 'value 1'
//
// });
//
// newSpecification.save(function(err) {
//     if (err) throw err;
//     console.log('specification add');
// });
//
// product.find({}, function(err, products) {
//     if (err) throw err;
//
//     console.log(products);
// });
// review.find({}, function(err, reviews) {
//     if (err) throw err;
//
//     console.log(reviews);
// });
// specification.find({}, function(err, specifications) {
//     if (err) throw err;
//
//     console.log(specifications);
// });


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

// product.findByIdAndRemove('57a05f1ac6839c660f5c271d', function(err){
// 	if(err) throw err;
// 	console.log('Product deleted!');
// });
