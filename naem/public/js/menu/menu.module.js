angular.module('menu',[])
.directive('jamMenu',function(){
	return{
		templateUrl:"js/menu/menu.template.html",
		controller:MenuController
	}
});