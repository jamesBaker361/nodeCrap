var express=require('express'),app=express(),parser=require('body-parser'),port=3000;

app.use(express.static('public'));
app.use( parser.json() );       // to support JSON-encoded bodies
app.use(parser.urlencoded({     // to support URL-encoded bodies
  		extended: true
}));

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
	//console.log(firebase);
});

app.post('/',function(req,res){
		console.log("post malone");
		res.sendFile(__dirname+'/index.html');
		console.log(req);
	});

app.listen(port,function(){
	console.log("🍑");
});