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