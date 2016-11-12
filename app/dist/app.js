angular.module('sweeprClientApp.templates', ['auth/auth.html', 'auth/login.html', 'auth/signup.html', 'landing/landing.html', 'sweeps/sweeps.html']);

angular.module("auth/auth.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/auth.html",
    "");
}]);

angular.module("auth/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/login.html",
    "<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\">\n" +
    "<script type=\"text/javascript\">\n" +
    "    $(document).bind('touchmove', function(e) {\n" +
    "      e.preventDefault();\n" +
    "    });\n" +
    "</script>\n" +
    "\n" +
    "<!--<img style=\"width: 100%; position: absolute;\" src=\"http://cdn.pcwallart.com/images/beach-iphone-wallpaper-wallpaper-4.jpg\"></img>-->\n" +
    "\n" +
    "<div class=\"center-neat\">\n" +
    "  <h1 style=\"font-size: 72px;\">Sweepr</h1>\n" +
    "</div>  \n" +
    "\n" +
    "<div class=\"center-neat\">\n" +
    "    <form>\n" +
    "        <label><b>Username</b></label>\n" +
    "        <input type=\"text\" placeholder=\"Enter Username\" name=\"username\" ng-model='data.username' required>\n" +
    "        \n" +
    "        <label><b>Password</b></label>\n" +
    "        <input type=\"password\" placeholder=\"Enter Password\" name=\"password\" ng-model='data.password'required>\n" +
    "    </form>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"center-landing\" style=\"top: 90%;\">\n" +
    "  <button class=\"login-btn\" ng-click='login.login(data.username, data.password)'>Login</button>\n" +
    "</div>");
}]);

angular.module("auth/signup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/signup.html",
    "<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\">\n" +
    "<script type=\"text/javascript\">\n" +
    "    $(document).bind('touchmove', function(e) {\n" +
    "      e.preventDefault();\n" +
    "    });\n" +
    "</script>\n" +
    "\n" +
    "<!--<img style=\"width: 100%; position: absolute;\" src=\"http://cdn.pcwallart.com/images/beach-iphone-wallpaper-wallpaper-4.jpg\"></img>-->\n" +
    "\n" +
    "<div class=\"center-neat\">\n" +
    "  <h1 style=\"font-size: 72px;\">Sweepr</h1>\n" +
    "</div>  \n" +
    "\n" +
    "<div class=\"center-neat\">\n" +
    "    <form>\n" +
    "        <label><b>Username</b></label>\n" +
    "        <input type=\"text\" placeholder=\"Enter Username\" name=\"username\" required>\n" +
    "        \n" +
    "        <label><b>Password</b></label>\n" +
    "        <input type=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\n" +
    "\n" +
    "        <label><b>Email</b></label>\n" +
    "        <input type=\"text\" placeholder=\"Enter Email\" name=\"username\" required>\n" +
    "        \n" +
    "        <label><b>Phone Number</b></label>\n" +
    "        <input type=\"text\" placeholder=\"555-555-5555\" name=\"username\" required>\n" +
    "    </form>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"center-landing\" style=\"top: 90%;\">\n" +
    "  <button class=\"login-btn\">Signup</button>\n" +
    "</div>");
}]);

angular.module("landing/landing.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("landing/landing.html",
    "<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\">\n" +
    "<script type=\"text/javascript\">\n" +
    "    $(document).bind('touchmove', function(e) {\n" +
    "      e.preventDefault();\n" +
    "    });\n" +
    "</script>\n" +
    "\n" +
    "<img style=\"width: 100%; position: absolute;\" src=\"http://cdn.pcwallart.com/images/beach-iphone-wallpaper-wallpaper-4.jpg\"></img>\n" +
    "\n" +
    "<div class=\"center-landing\">\n" +
    "  <h1 style=\"font-size: 72px;\">Sweepr</h1>\n" +
    "</div>  \n" +
    "\n" +
    "<div class=\"center-landing\" style=\"top: 90%;\">\n" +
    "  <a href=\"/#/signup\" class=\"login-btn\">Login</a>\n" +
    "</div>");
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
        controller: 'LoginCtrl',
        controllerAs: 'login',
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
  .run(['$rootScope', '$state', '$stateParams', 'AuthService', function ($rootScope, $state, $stateParams, AuthService) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      if (typeof toState === 'undefined') {
        return;
      }

      if (toState.name !== 'home' && 
          toState.name !== 'login' &&
          toState.name !== 'signup') {
        console.log("Attempting to go to non-public state.")

        if (!AuthService.hasToken()) {
          event.preventDefault();
          $state.go('login');
        }

        return;
      }


    })

  }])
angular.module('sweeprClientApp')
  .factory('auth', ['$resource', function ($resource) {
    return $resource('http://127.0.0.1:8080/auth', 
      {},
      {
        login: {
          method: 'POST',
          url: 'http://127.0.0.1:9912/auth'
        }
      })
  }])
angular.module('sweeprClientApp')
  .controller('AuthCtrl', [function () {
    
  }])
angular.module('sweeprClientApp')
  .controller('LoginCtrl', [ '$state', 'AuthService', function ($state, AuthService) {

    this.data = {}
    
    this.login = function (username, password) {
      console.log(username, password); 
      AuthService.loginUser(username, password).then(function () {
        $state.go('sweeps')
      })
    }

  }])
angular.module('sweeprClientApp')
  .factory('AuthService', [ 'auth', 'localStorageService', function (auth, localStorageService) {

    var AuthService = {
      loginUser: loginUser,
      hasToken: hasToken,
      getToken: getToken,
    };

    var token = null,
        user  = null;

    function loginUser (email, password) {
      return auth.login({
        email: email,
        password: password
      }, function (res) {
        console.log(res)
        token = res.token;
        user = res.user;
        storeUserInfo(res);
      }, function () {
        console.error("Login Failed")
      }).$promise;
    }

    function hasToken () {
      console.log(token !== null)
      return token !== null;
    }

    function storeUserInfo (res) {
      localStorageService.set('auth_token', res.token)
      localStorageService.set('user_info', res.user)
    }

    function getToken () {
      var storedToken = localStorageService.get('auth_token')
      token = storedToken;

      var storedUser = localStorageService.get('user_info')
      user = storedUser;
    }

    getToken();

    return AuthService;
  }])
angular.module('sweeprClientApp')
  .controller('SweepsCtrl', [function () {
    
  }])