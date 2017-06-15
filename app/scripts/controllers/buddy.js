angular.module('buddiesApp')
	.controller('buddy',function($scope,$rootScope,buddyFactory,$stateParams){


		$scope.createBuddy = function(buddy){
			if(buddy.validate){
				var buddy = angular.copy(buddy);
				var result = buddyFactory.createBuddy(buddy);
				if(result.status === 'success'){
					$scope.message = result.message;
					$scope.class = 'alert-success';
				}else{
					$scope.message = result.message;
					$scope.class = 'alert-danger';
				}
			}
		};
		$scope.getBuddy  = function(username){
			var result = buddyFactory.getBuddy(username);
			if(result.status === 'success'){
				$scope.buddy = result.data;
			}else{
				$scope.message = result.message;
				$scope.class="alert-error";
			}
		};

		$scope.update = function(buddy){
				var result = buddyFactory.updateBuddy($scope.buddy);

				if(result.status === 'success'){
					$scope.message = result.message;
					$scope.class = 'alert-success';
				}else{
					$scope.message = 'Error in update';
					$scope.class = 'alert-danger';
				}
		};

		$scope.detele = function(username){
			if(confirm('Are you sure you want to delete this buddy?')){
				var result = buddyFactory.deleteBuddy(username);
				if(result.status === 'success'){
					$scope.message = 'Buddy deleted successfully';
					$scope.class = "alert-success";
				}else{
					$scope.message = 'Something went wrong';
					$scope.class = "alert-error";
				}
			}
		};

		$scope.setInits = function() {
            if($stateParams.username){
                 $scope.getBuddy($stateParams.username)
            }

        };

        $scope.save = function(valid) {
            if (valid) {
                var result = buddyFactory.createBuddy($scope.buddy);
                if (result.status === 'success') {
                    $scope.message = result.message;
                    $scope.class = 'alert-success';
                } else {
                    $scope.message = result.message;
                    $scope.class = 'alert-danger';
                }

            } else {
                $scope.submitted = true;
            }
        }
	});