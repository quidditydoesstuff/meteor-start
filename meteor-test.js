if (Meteor.isClient) {
 
  // This code only runs on the client
  angular.module('simple-todos',['angular-meteor']);
 
  angular.module('simple-todos').controller('TodosListCtrl', ['$scope',
    function ($scope) {
 
      $scope.tasks = [
        { text: 'M&Ms' },
        { text: 'Swedish Fish' },
        { text: 'Chocolate Fountain' }
      ];
 
  }]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
