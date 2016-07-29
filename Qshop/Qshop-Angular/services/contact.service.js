angular.module("qshop").factory("ContactMessage", function($http) {

    var contact = {};

    contact.sendMessage = function(contact){


      console.log('Contact', contact);

      $http.post('http://10.59.0.30:3000/posts', contact);

    };

    return contact;
});
