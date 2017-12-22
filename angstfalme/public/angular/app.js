var app = angular.module('myApp', ['login','ngRoute']);

app.controller('mainCtrl',function($scope,$rootScope) {
	$rootScope.user={}
});

app.config(function($routeProvider) {
	$routeProvider
		.when("/",{
		templateUrl: 'angular/login/login.template.html',
		controller: LoginController
	}).when('/home',{
		templateUrl: 'angular/home/home.template.html',
		controller: HomeController
	}).otherwise({
		template:"<p>Nothing to see Here!<p>"
	})
})
//app.controller('demo',DemoController);
//app.controller('login',LoginController);