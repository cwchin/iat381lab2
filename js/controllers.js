var phonecatApp = angular.module('clothingCatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'American Eagle',
     'snippet': 'Cheap Casual Clothing'},
    {'name': 'Gap',
     'snippet': 'Moderately Expensive.'},
    {'name': 'Banana Republic',
     'snippet': 'Expensive Clothing.'}
  ];
});