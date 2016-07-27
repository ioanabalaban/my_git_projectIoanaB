angular.module("qshop").factory("Cart", function() {

    var cart = {};
    cart.products = [];

    cart.add = function(product) {
        console.log("Am adaugat produsul", product);
        cart.products.push(product);
    };
    cart.getSubTotal = function() {

    };
    cart.getShipping = function() {

    };
    cart.getTotal = function() {

    };
    return cart;

});
