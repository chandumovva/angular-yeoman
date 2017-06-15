'use strict';

/**
 * @ngdoc function
 * @name buddiesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the buddiesApp
 */
angular.module('buddiesApp')
  .controller('MainCtrl', function ($scope,$rootScope,buddyFactory,$state) {
  	$scope.auth = {

  	};
    $scope.doLogin = function(user){
		var result = buddyFactory.doLogin({
      email:$scope.auth.email,
      password:$scope.auth.password
    });
    alert(result.status);
		if(result.status == 'success'){
			$state.go('dashboard');
		}else{
			$scope.error = 'Username and password mismatched';
		}
    }
  });
