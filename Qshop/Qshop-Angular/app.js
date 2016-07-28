var qshop = angular.module("qshop", ['ui.router']);

qshop.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('default', {
            url: "/",
            templateUrl: "templates/firstpage.html"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "templates/contact.html"
        })
        .state('login', {
            url: "/login",
            templateUrl: "templates/login.html"
        })
        .state('shop', {
            url: "/shop",
            templateUrl: "templates/shop.html"
        })
        .state('register', {
            url: "/register",
            templateUrl: "templates/register.html"
        })
        .state('product', {
            url: "/products/:id",
            templateUrl: "templates/product.html"
        })
        .state('cart', {
            url: "/cart",
            templateUrl: "templates/cart.html"
        });
});
