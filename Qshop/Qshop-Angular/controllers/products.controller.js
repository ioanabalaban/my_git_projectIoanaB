angular.module("qshop").controller("ProductsController", function($scope, ProductsRepository) {
    $scope.products = ProductsRepository.getProductList().then(function(result) {
            $scope.products = result.data
        }, function(err) {
            console.error(err);
        });
    });
