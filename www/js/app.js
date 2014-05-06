angular.module('myApp', ["mobile-angular-ui"]);

angular.module('myApp', [
  "ngRoute",
  "mobile-angular-ui",
]).config(function($routeProvider) {
      $routeProvider.when('/', { 
        // ...
      });
      // ...
  });