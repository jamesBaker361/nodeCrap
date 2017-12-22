var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(requ,resp){
    console.log("requ is");
    console.log(requ);
    console.log("resp is");
    console.log(resp);
    
    var pname=url.parse(requ.url,true).pathname;
    console.log(pname);
    
    fs.readFile(pname.substr(1),function(err, data){
        if(err){
            
        }else{
            resp.writeHead(200, {'Content-Type': 'text/html'});
            resp.write(data.toString());
        }
        resp.end();
    });
}).listen(8081);