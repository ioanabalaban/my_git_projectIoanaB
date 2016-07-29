angular.module("qshop").controller("CartController", function($scope, $rootScope, $state, Cart) {

    $scope.listProducts = Cart.getProducts();

    function updateView() {
        $scope.subTotal = Cart.getSubTotal();
        $scope.shipping = Cart.getShipping();
        $scope.total = Cart.getTotal();
        $rootScope.$broadcast('cart-updated');

    }

    updateView();

    $scope.minus = function(id) {
        for (var i = 0; i < $scope.listProducts.length; i++) {
            if ($scope.listProducts[i].id == id) {
                if ($scope.listProducts[i].quantity > 1) {
                    $scope.listProducts[i].quantity--;
                    updateView();

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

                break;
            }
        }
    }

    $scope.removeProduct = function(product){
      Cart.remove(product);
      $scope.listProducts = Cart.getProducts();
      updateView();
    }
    $scope.sendOrder = function(){
      var order = {
        products: [],
        country: "",
        city: "",
        zipCode: ""

      };
      order.products = $scope.listProducts;
      order.country = $scope.country;
      order.city = $scope.city;
      order.zipCode = $scope.zipCode;

      Cart.sendOrder(order);
      //redirect pe prima pagina dupa ce trimitem order-ul
      $state.go('default');

    };

});
