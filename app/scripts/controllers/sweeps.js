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
      {
        title:'Awesome Beach Sweep',
        date:'10/23/2016',
        organizer:'Will Huse',
        participants: 8,
        location: 'Cove Beach'
      },
      {
        title:'Dat Sweep',
        date:'10/25/2016',
        organizer:'Michael Markman',
        participants: 30,
        location: 'Calf Pasture Beach'
      },
      {
        title:'Classy Fancy Sweep',
        date:'11/4/2016',
        organizer:'Chris Jennison',
        participants: 2,
        location: 'Bell Island'
      },
      {
        title:'Christmas Sweep',
        date:'10/23/2016',
        organizer:'Michael Markman',
        participants: 1,
        location: 'Kendallwood Lake'
      }
    ];
  });
