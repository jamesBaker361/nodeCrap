var express=require("express"),port=3000,firebase = require('firebase'),parser=require('body-parser');

/*,fb= firebase.initializeApp({
	apiKey: "AIzaSyBIZl-PsYuVlhouOK_0Ul_3QANDfk37WwE",
    authDomain: "esketit-d2d1d.firebaseapp.com",
    databaseURL: "https://esketit-d2d1d.firebaseio.com",
    projectId: "esketit-d2d1d",
    storageBucket: "",
    messagingSenderId: "1010825108662"
})

firebase.auth().signInWithEmailAndPassword("jlbaker361@gmail.com", "password1").catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});*/

console.log(firebase);


app=express();

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