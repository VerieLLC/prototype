'use strict';

/* App Module */

var verieApp = angular.module('verieApp', [
  'ngRoute',
  'verieControllers'
]);

verieApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      }).
      when('/verie-me', {
        templateUrl: 'partials/verie-me.html',
        controller: 'VerieMeController'
      }).
      otherwise({
        redirectTo: '/'
      });
    window.addEventListener('load', function() {
        FastClick.attach(document.body);
    }, false);

  }]);
