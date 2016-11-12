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