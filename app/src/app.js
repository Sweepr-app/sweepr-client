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
    'sweeprClientApp.templates',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/auth', {
        templateUrl: 'auth/auth.html',
        controller: 'AuthCtrl',
        controllerAs: 'auth'
      })
      .when('/sweeps', {
        templateUrl: 'sweeps/sweeps.html',
        controller: 'SweepsCtrl',
        controllerAs: 'sweeps'
      })
      .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl',
        controllerAs: 'landing'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
