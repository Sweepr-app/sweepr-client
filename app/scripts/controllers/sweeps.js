'use strict';

/**
 * @ngdoc function
 * @name sweeprClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sweeprClientApp
 */
angular.module('sweeprClientApp')
  .controller('SweepsCtrl', function ($scope) {
    $scope.sweeps = [
      {title:'one',description:'onedesc'},
      {title:'two',description:'twodesc'}
    ];
  });
