angular.module('home', []).directive('jamHome',function(){ 
	return{
		templateUrl: 'angular/home/home.template.html',
		controller: HomeController
	}
})
