angular.module('buddiesApp')
  .controller('dashboard',function($scope,$rootScope,$location,buddyFactory){
  	$scope.getBuddies  = function(){
  		$scope.buddies = buddyFactory.getBuddies();  	
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
			$scope.getBuddies();
	}


		$scope.deleteBuddy = function(username){
			if(confirm('Are you sure you want to delete this buddy?')){
				var result = buddyFactory.deleteBuddy(username);
				if(result.status === 'success'){
					$scope.message = 'Buddy deleted successfully';
					$scope.class = "alert-success";
					$scope.getBuddies();
				}else{
					$scope.message = 'Something went wrong';
					$scope.class = "alert-error";
				}

			}
		};

		 $scope.edit = function(username) {
            $location.path('/' + username + '/edit');
        }

  });