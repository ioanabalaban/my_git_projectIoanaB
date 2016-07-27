angular.module("qshop").controller("ProductController", function($scope,$stateParams,ProductsRepository, Cart) {
    $scope.productQty = 1;
    $scope.tabPanel = "description";
    $scope.creste = function() {
        $scope.productQty++;
    }

    $scope.scade = function() {
        if ($scope.productQty > 1) {
            $scope.productQty--;
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
    $scope.addToCart = function(){
      $scope.product.qty = $scope.productQty;
      Cart.add($scope.product);
    };

});
