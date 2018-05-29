var express = require("express");
var app = express();

app.get('/app2',function(req,res) {
    res.send("Hello world From Server 2");
});

app.listen(3002, function(){
    console.log('Server2 listening on pport 3002..')
});