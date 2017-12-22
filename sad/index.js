var express=require('express');

app=express();

app.use(express.static('public'));

app.set('views', './public/ejs')
app.set('view engine','ejs');

app.get('/',function(req,res){
	//res.send('index.html');
	res.render("hello");
});

app.listen(3000);