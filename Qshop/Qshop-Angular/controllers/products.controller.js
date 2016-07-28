angular.module("qshop").controller("ProductsController", function($scope, ProductsRepository, Cart) {
    $scope.products = ProductsRepository.getProductList().then(function(result) {
        $scope.products = result.data
    }, function(err) {
        console.error(err);
    });

    $scope.addToCart = function(product) {
        // product.quantity = 1;
        Cart.add(product,1);
    }
});
