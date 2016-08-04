var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var product = require('./models/product.model');
var review = require('./models/review.model');
var specification = require('./models/specification.model');

var app = express();

mongoose.connect('mongodb://localhost:27017/myappdatabase');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.listen(3000, function() {
    console.log('Express listening on port 3000');
});

app.get('/', function(req, res) {
    product.find({}, function(err, products) {
        if (err) throw err;
        res.send(products);
    });
});


app.post('/', function(req, res) {
    var productPost = new product(req.body);
    productPost.save(function(err, productPost) {
        if (err) throw err;
        res.json(201, productPost)
    });
});

app.post('/', function(req, res) {
    var reviewPost = new review(req.body);
    reviewPost.save(function(err, reviewPost) {
        if (err) throw err;
        res.json(201, reviewPost)
    });
});

app.post('/', function(req, res) {
    var specificationPost = new specification(req.body);
    specificationPost.save(function(err, specificationPost) {
        if (err) throw err;
        res.json(201, specificationPost)
    });
});


app.delete('/:id', function(req, res) {

    var id = req.params.id;
    review.findByIdAndRemove(id, function(err) {
        if (!err) {
            res.json(200, {
                message: "Review removed."
            });
        } else {
            res.json(403, {
                message: "Could not delete review. " + err
            });
        }
    });
});

app.put('/:id', function(req, res) {
    var id = req.params.id;
    product.findByIdAndUpdate(id, {
        price: 5000
    }, function(err) {
        if (!err) {
            res.json(200, {
                message: "Product updated"
            });
        } else {
            res.json(500, {
                message: "Could not update product. " + err
            });
        }
    });
});
