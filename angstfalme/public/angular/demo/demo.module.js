angular.module('demo', []).directive('jamDemo',function(){ 
	return{
		templateUrl: 'angular/demo/demo.template.html',
		controller: DemoController
	}
})
