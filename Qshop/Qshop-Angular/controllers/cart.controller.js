angular.module("qshop").controller("CartController", function($scope,$rootScope, Cart) {

    $scope.listProducts = Cart.getProducts();

    function updateView() {
        $scope.subTotal = Cart.getSubTotal();
        $scope.shipping = Cart.getShipping();
        $scope.total = Cart.getTotal();

    }

    updateView();

    $scope.minus = function(id) {
        for (var i = 0; i < $scope.listProducts.length; i++) {
            if ($scope.listProducts[i].id == id) {
                if ($scope.listProducts[i].quantity > 1) {
                    $scope.listProducts[i].quantity--;
                    updateView();
                    $rootScope.$broadcast('cart-updated');
                }
                break;
            }
        }
    }

    $scope.plus = function(id) {
        for (var i = 0; i < $scope.listProducts.length; i++) {
            if ($scope.listProducts[i].id == id) {
                $scope.listProducts[i].quantity++;
                updateView();
                $rootScope.$broadcast('cart-updated');
                break;
            }
        }
    }
});
