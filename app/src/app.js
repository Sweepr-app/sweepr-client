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
    'LocalStorageModule',
    'sweeprClientApp.templates',
    'ngTouch',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'landing/landing.html'
      })
      .state('login', {
        url: '/login',
        controller: 'AuthCtrl',
        templateUrl: 'auth/login.html'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'auth/signup.html'
      })
      .state('sweeps', {
        url: '/sweeps',
        templateUrl: 'sweeps/sweeps.html',
        controller: 'SweepsCtrl',
        controllerAs: 'sweeps'
      })
      
      $urlRouterProvider.otherwise(function () {
        return '/';
      })
  }])
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('sweeprApp');
  })
  .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      if (typeof toState === 'undefined') {
        return;
      }

      if (toState.name !== 'home' && 
          toState.name !== 'login' &&
          toState.name !== 'signup') {
        console.log("Attempting to go to open state.")
        return;
      }


    })

  }])