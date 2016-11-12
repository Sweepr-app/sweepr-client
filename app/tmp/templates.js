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
    "        <input type=\"text\" placeholder=\"Enter Username\" name=\"username\" required>\n" +
    "        \n" +
    "        <label><b>Password</b></label>\n" +
    "        <input type=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\n" +
    "    </form>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"center-landing\" style=\"top: 90%;\">\n" +
    "  <button class=\"login-btn\">Login</button>\n" +
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
