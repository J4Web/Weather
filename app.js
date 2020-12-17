const express= require('express');
const app=express();
let ejs = require('ejs');
const router= require('./routes/routes')
const bodyParser= require('body-parser');
app.use((bodyParser.urlencoded({extended: true})));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use('/', router);

app.listen(8080, ( )=>
{
    console.log("Server Running on port 8080!");
});


//Api key
//f3ab2cef2a485a81284355d3fadea6e2