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