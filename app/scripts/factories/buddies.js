
function buddyFactory(){

	return {
		doLogin:function(user){
			if(user.email === "chandhu@gmail.com" && user.password=="temp01"){
				return {
					status:'success'
				};
			}else{
				return {
					status:'error'
				};
			}
		},
		getBuddies:function(){

			var buddies = localStorage.getItem('buddies');
			return JSON.parse(buddies);
		},
		createBuddy:function(buddy){
			var buddies = JSON.parse(localStorage.getItem('buddies'));
			var buddyNames = Object.keys(buddies);
				if(buddyNames.indexOf(buddy.username) == -1){
					buddies[buddy.username] = buddy;
					localStorage.setItem('buddies',JSON.stringify(buddies));
					return {
						status:'success',
						message:'Buddy created successfully'
					};
				}else{
					return {
						status:'error',
						message:' User name already exists'
					};
				}
				
		},
		getBuddy:function(username){
			var buddies = localStorage.getItem('buddies');
			buddies = JSON.parse(buddies);
			if(buddies[username]){
				return {
					status:'success',
					data:buddies[username]
				};
			}else{
				return {
					status:'error',
					message:'No buddy found with user name'
				};
			}
		},
		updateBuddy:function(buddy){
			var buddies = localStorage.getItem('buddies');
			buddies = JSON.parse(buddies);
			buddies[buddy.username] = buddy;
			localStorage.setItem('buddies',JSON.stringify(buddies));
			return {
				status:'success',
				message:'successfully created'
			};
		},
		deleteBuddy:function(username){
			var buddies = localStorage.getItem('buddies');
			buddies = JSON.parse(buddies);
			delete buddies[username];
			localStorage.setItem('buddies',JSON.stringify(buddies));
			return {
				status:'success',
				message:'Buddy deleted successfully'
			}

		}
	}
}
angular.module('buddiesApp')
	.factory('buddyFactory',[buddyFactory]);