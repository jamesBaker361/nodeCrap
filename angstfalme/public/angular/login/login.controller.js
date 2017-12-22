function LoginController($scope,$rootScope,$http,$location){
	$scope.username="enter username",
	$scope.password="enter password",
	$scope.message="",
	$scope.register=function(){
		//$scope.message="";
		firebase.auth().createUserWithEmailAndPassword($scope.username, $scope.password).catch(function(error) {
  // Handle Errors here.
  			var errorCode = error.code;
  			var errorMessage = error.message;
  			$scope.message=errorMessage;
		});
	},
	$scope.login=function(){
		//$scope.message="";
		firebase.auth().signInWithEmailAndPassword($scope.username, $scope.password).catch(function(error) {
  // Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
	  	$scope.message=errorMessage;
		});

		firebase.auth().onAuthStateChanged(function(user) {
  			if (user) {/*
    			var displayName = user.displayName;
    			var email = user.email;
    			var emailVerified = user.emailVerified;
    			var photoURL = user.photoURL;
    			var isAnonymous = user.isAnonymous;
    			var uid = user.uid;
    			var providerData = user.providerData;
    			*/
    			$rootScope.user=user;
    			window.location.href=$location.url()+"#/home";
    			
    // ...
  		} else {

  		}
  		
	})
}
}