(function () {
    //-----APPLICATION
    //Recipelist.html main application controller
    var app = angular.module('tools', [
  "ngRoute",
  "mobile-angular-ui"])
    .config(function ($sceProvider) {
        // Completely disable SCE to support IE7.
        $sceProvider.enabled(false);
    });
    //-----CONFIGURATIONS
    //Routing Provider for list of recipes in the tree
    app.config(['$routeProvider',
    function ($routeProvider) {

        $routeProvider.
	  when('/', {
      templateUrl: 'partials/tools.html',
      controller: 'toolsCtrl'
      }).
      when('/guide', {
          templateUrl: 'partials/guide.html',
          controller: 'guideCtrl'
      }).
	     when('/typhoon', {
          templateUrl: 'partials/typhoon.html',
          controller: 'typhoonCtrl'
      }).
	     when('/earthquake', {
          templateUrl: 'partials/earthquake.html',
          controller: 'eqCtrl'
      }).
	     when('/fire', {
          templateUrl: 'partials/fire.html',
          controller: 'fireCtrl'
      }).
	      when('/flood', {
          templateUrl: 'partials/flood.html',
          controller: 'floodCtrl'
      }).
      otherwise({
          redirectTo: '/'
      });
    }
  ]);

 app.controller('toolsCtrl', function () {
      	
    });  
    app.controller('guideCtrl', function () {
      	
    });
	
	    app.controller('typhoonCtrl', function () {
      
    });
	app.controller('eqCtrl', function () {
      
    });
	app.controller('fireCtrl', function () {
      
    });
	app.controller('floodCtrl', function () {
      
    });
  
  })();
