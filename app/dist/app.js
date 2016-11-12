angular.module('pbxxr1App.templates', ['auth/auth.html', 'sweeps/sweeps.html']);

angular.module("auth/auth.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/auth.html",
    "");
}]);

angular.module("sweeps/sweeps.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sweeps/sweeps.html",
    "");
}]);

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

angular.module('sweeprClientApp')
  .controller('AuthCtrl', [function () {
    
  }])
angular.module('sweeprClientApp')
  .controller('SweepsCtrl', [function () {
    
  }])