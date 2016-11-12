angular.module('pbxxr1App.templates', ['auth/auth.html', 'sweeps/sweeps.html']);

angular.module("auth/auth.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/auth.html",
    "");
}]);

angular.module("sweeps/sweeps.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sweeps/sweeps.html",
    "");
}]);
