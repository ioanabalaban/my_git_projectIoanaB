var qshop = angular.module("qshop", ['ui.router']);

qshop.config(["$locationProvider", function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);

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
        });
});

qshop.controller("MainController", function($scope, $stateParams, ProductsRepository) {
    console.log("Am intrat pe pagina");
    ProductsRepository.getProductList().then(function(result) {

        $scope.products = result.data;
        console.log('Products', result.data);
        $scope.products.push({
            "picture": "../assets/images/products/product-4.jpg",
            "name": "Limited Price",
            "price": 299,
            "onSale": true,
            "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis, massa fringilla consequat blandit, mauris ligula porta nisi, non tristique enim sapien vel nisl. Suspendisse vestibulum lobortis dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent nec tempus nibh. Donec mollis commodo metus et fringilla. Etiam venenatis, diam id adipiscing convallis, nisi eros lobortis tellus, feugiat adipiscing ante ante sit amet dolor. Vestibulum vehicula scelerisque facilisis. Sed faucibus placerat bibendum. Maecenas sollicitudin commodo justo, quis hendrerit leo consequat ac. Proin sit amet risus sapien, eget interdum dui. Proin justo sapien, varius sit amet hendrerit id, egestas quis mauris.",
        });
    }, function(err) {
        console.error(err);
    });

    $scope.loadProduct = function() {
        console.log("Load Product called", $stateParams);
        ProductsRepository.getProductList().then(function(result) {
            var productId = $stateParams.id;

            for (var i = 0; i < result.data.length; i++) {
                if (productId == result.data[i].id)
                {
                    $scope.product = result.data[i];
                    break;
                }
            }

        }, function(err) {
            console.error(err);
        });
    };

});

qshop.factory("ProductsRepository", function($http) {

    var repo = {};

    repo.getProductList = function() {

        return $http.get('/data/products.json');
    };

    return repo;

});
