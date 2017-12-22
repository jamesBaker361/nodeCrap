var app=angular.module('chatApp',['ngRoute','menu']);

app.controller('chatApp',['$scope','$location','$rootScope',function($scope,$location,$rootScope){
	$scope.dummy="dummyvariable works!!!",
	$scope.user={},
	$scope.$on('nut',function(events,args){
		console.log(events);
		console.log(args);
		console.log($scope.dummy);
		console.log($location.url());
	}),
	$scope.$on('loginSuccess',function(event,args){
		console.log("loginSuccess");
		$scope.user=args;
		console.log($scope.user);
		$location.url('/main');
		$scope.$broadcast('userSend',args);
		$scope.$emit('userSend',args);
		$rootScope.$broadcast('userSend',args);
		console.log('gucci main');
	}),
	$scope.$on('userRequest',function(event,args){
		console.log('userRequest received');
		$scope.$broadcast('userResponse',$scope.user);
		console.log('userResponse sent');
	})
}]);

app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'js/login/login.template.html',
		controller:LoginController
	})
	.when('/main',{
		templateUrl:'js/main/main.template.html',
		controller:MainController
	})
});