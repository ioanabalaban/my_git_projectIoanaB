angular.module("qshop").controller("ProductController", function($scope, $stateParams, ProductsRepository, Cart) {
    $scope.quantity = 1;
    $scope.tabPanel = "description";
    $scope.creste = function() {
        $scope.quantity++;
    }

    $scope.scade = function() {
        if ($scope.quantity > 1) {
            $scope.quantity--;
        }
    }



    $scope.showTab = function(tabName) {
        $scope.tabPanel = tabName;
    }
    $scope.loadProduct = function() {
        console.log("Load Product called", $stateParams);
        ProductsRepository.getProductList().then(function(result) {
            var productId = $stateParams.id;

            for (var i = 0; i < result.data.length; i++) {
                if (productId == result.data[i].id) {
                    $scope.product = result.data[i];
                    break;
                }
            }

        }, function(err) {
            console.error(err);
        });
    };
    $scope.addToCart = function() {
        Cart.add($scope.product, $scope.quantity);
    };

});
