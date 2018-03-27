const express=require('express');
var app =express();

app.get('/','index.html');

app.listen('3000',function(){
});