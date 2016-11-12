'use strict';

/**
 * @ngdoc overview
 * @name sweeprClientApp
 * @description
 * # sweeprClientApp
 *
 * Main module of the application.
 */
angular
  .module('sweeprClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/auth/auth.html',
        controller: 'AuthCtrl',
        controllerAs: 'auth'
      })
      .when('/sweeps', {
        templateUrl: 'src/sweeps/sweeps.html',
        controller: 'SweepsCtrl',
        controllerAs: 'sweeps'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
