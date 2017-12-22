var mongo=require('mongodb').MongoClient,express=require('express'),app=express(),
parser=require('body-parser'),port=3000,
url="mongodb://jlbaker361:Password1@ds161483.mlab.com:61483/chat";

mongo.connect(url,function(err,db){
	app.use(express.static('public'));
	app.use( parser.json() );       // to support JSON-encoded bodies
	app.use(parser.urlencoded({     // to support URL-encoded bodies
  		extended: true
	}));

	app.get('/',function(req,res){
		res.sendFile(__dirname+'/index.html');
	});

	app.get('/api',function(req,res){
		var chars='adfjfdslaiwyewi';
		var randomName='';
		for(var t=0;t<6;t++){
			randomName=randomName+chars[Math.floor(Math.random()*chars.length)]
		}
		console.log(randomName);
		res.send({name:randomName});
	});

	app.post('/login',function(req,res){
		//console.log(req.body);
		db.collection("users").findOne({name:req.body.username,password:req.body.password},{},function(err,out){
			if(out){
			out.username=out.name;
			res.send(out)
		}else{
			//something here to handle failed logins
		}
		})
	})

	app.listen(port,function(){
		console.log("lisenting on port "+port.toString());
	});

});