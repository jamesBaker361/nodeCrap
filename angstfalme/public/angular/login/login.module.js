angular.module('login', []).directive('jamLogin',function(){ 
	return{
		templateUrl: 'angular/login/login.template.html',
		controller: LoginController
	}
})
