function LoginController($scope,$http,$rootScope){
		$rootScope.loginTime=false,
		$scope.loggedIn=false,
		$scope.name="huh",
		$scope.loginReq=function(){
			$http.get('/api',{}).then(function(response){
				console.log(response.data.name);
				console.log($rootScope);
				console.log($rootScope.loginTime);
				$scope.name=response.data.name;
				$rootScope.loginTime=!$rootScope.loginTime;
			})
		}
	}