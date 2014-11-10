'use strict';

/* Controllers */

var controllers = angular.module('verieControllers', []);

controllers.controller('HomeController', ['$scope',
  function($scope) {

	$scope.showNativeAlert = function (msg) {
		navigator.notification.alert(msg);
	}

	$scope.takePicture = function() {
		navigator.camera.getPicture(function(imageData){
				$scope.image = imageData;
			}, function(message){
				 alert('Failed because: ' + message);
			}, { quality: 50,
    			destinationType: Camera.DestinationType.DATA_URL
		});
	}

  }]);

controllers.controller('VerieMeController', ['$scope',
  function($scope) {

  }]);
