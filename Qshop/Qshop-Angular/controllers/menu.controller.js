angular.module("qshop").controller("MenuController", function($scope, Cart){

  $scope.totalProducts=0;
  $scope.$on('cart-updated', function(event, args) {

    // do what you want to do
    $scope.totalProducts = Cart.getTotalProducts();
});

});
