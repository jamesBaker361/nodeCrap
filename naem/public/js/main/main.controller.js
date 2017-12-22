function MainController($scope){
	$scope.user={username:"it didnt work"},
	$scope.username="still works weird",
	$scope.$on("userSend",function(event,args){
		console.log('userSend');
		$scope.user=args;
		console.log($scope.user);
	}),
	$scope.clickFunction=function(){
		var chars='adfjfdslaiwyewi';
		var randomName='';
		for(var t=0;t<6;t++){
			randomName=randomName+chars[Math.floor(Math.random()*chars.length)]
		}
		console.log("cliqued!");
		$scope.username=randomName;
	},
	$scope.init=function(){
		$scope.$emit('userRequest',{});
		console.log('userRequest sent')
	},
	$scope.$on('userResponse',function(event,args){
		console.log('userResponse recived');
		console.log(args);
		$scope.user=args;
	})
}