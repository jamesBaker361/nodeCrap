function LoginController($scope,$http,$rootScope){
		$scope.name="huh",
		$scope.username="usernamedsfadaf",
		$scope.password="passwordasdfdsa",
		$scope.authenticate = function (username,password) {
			$http.post('/login',{username:username,password:password},{}).then(function(response){
				//$scope.$emit('nut',{x:1,y:2,z:3});
				console.log(response);
				var u =response.data;
				$scope.$emit('loginSuccess',u);
			},function(errorResponse){
				console.log("Error!");
				console.log(errorResponse);
			});
		}
	}