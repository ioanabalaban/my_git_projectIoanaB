angular.module("qshop").controller("ContactController", function($scope, $state, ContactMessage) {
  
$scope.sendMessage = function(){
  var contact = {
    email: "",
    subject: "",
    message: ""

  };
  contact.email = $scope.email;
  contact.subject = $scope.subject;
  contact.message = $scope.message;

  ContactMessage.sendMessage(contact);
  //redirect pe prima pagina dupa ce trimitem order-ul
  $state.go('default');

};
});
