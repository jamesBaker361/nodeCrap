var express = require('express'),http = require('http').Server(app),
io= require("socket.io")(http),mongo=require('mongodb').MongoClient,
parser=require('body-parser'),app=express(),mongoose=require('mongoose')
,chatgoose=require('chatgoose'), url="mongodb://jlbaker361:Password1@ds161483.mlab.com:61483/chat";

/*var connect=mongoose.createConnection("mongodb://jlbaker361:Password1@ds161483.mlab.com:61483/chat");
connect.once('open',function(a,b,c){

var User=mongoose.model("User",chatgoose.UserSch);
var  james=new User({name: "james",color:"#cc99ff"});
james.save(function (err) {
  if (err) return handleError(err);
  // saved!
});

var query =User.findOne({name:"james"},function(err,user
	){
	console.log(err);
	console.log(user);
});
})*/
mongo.connect(url,function(err,db){
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
	db.collection("keys").findOne({taken:false},function(a,b,c){
		console.log("afindone");
		console.log(a);
		console.log("bfindone");
		console.log(b);
		console.log("cfindone");
		console.log(c);
	}).forEach(function(a,b,c){
		console.log("aforeach");
		console.log(a);
		console.log("bforeach");
		console.log(b);
		console.log("cforeach");
		console.log(c);
	}).toArray(function(a,b,c){
		console.log("aarray");
		console.log(a);
		console.log("barray");
		console.log(b);
		console.log("c");
		console.log(carray);
	});
    //res.render('index');
    });

io.on('connection',function(socket){
   console.log("im in");
    socket.on("disconnect",function(){
        console.log("COUNTER HACKERED");
    });
    socket.on("message", function(msg){
        console.log("message! ");
        x[x.length]=msg;
        io.emit('message',[msg,x]);
    })
   // console.log(socket);
});

http.listen(3000, function(){
	console.log('listening on *:3000');
    });
});