var snapchat=require('snapchat');

SNAPCHAT_USERNAME="bakerthebread";
SNAPCHAT_PASSWORD="w0rkshop";
SNAPCHAT_GMAIL_EMAIL="jlbaker361@gmail.com";
SNAPCHAT_GMAIL_PASSWORD="w0rkshop";

var client=new snapchat();

client.signIn(function (err, session) {
  if (!err) {
    console.log('signed in', client.username)
  }else{
  	console.log(err);
  }
})