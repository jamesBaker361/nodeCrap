function HomeController($scope,$rootScope){
	$scope.init=function() {
		console.log('inititi');
		console.log($rootScope.user)
		$rootScope.$watch('user',function(newValue,oldValue){
			console.log("oldValue");
			console.log(oldValue);
			console.log("newValue");
			console.log(newValue)
		})
	},
	$scope.logout=function() {
		firebase.auth().signOut().then(function() {
  			console.log($rootScope.user);
		}).catch(function(error) {
  			console.log(error)
		});
	}
}
