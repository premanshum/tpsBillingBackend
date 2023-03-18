const createHandler = require('azure-function-express').createHandler;
const app = require('express')();
var fs = require("fs");
var mime = require('mime-types');


app.get("/api/filereader/work", (req, res) => {
    var fileName="index.js";
    var fileContent = '';
    console.log('Request received');
    res.json({ "name": fileContent });
});


app.get("/api/filereader/fun", (req, res) => {
    var fileName="index.js";
    console.log('Request received');
    fs.readFile(__dirname + "\\" +  fileName, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            res.json({ "data:": data });
        } else {
            console.log(err);
        }
    });
});
// https://premserverlessexpress.azurewebsites.net/api/filereader/fun

app.get("/api/filereader/user", (req, res) => {
    var fileName="mockUser01.json";
    //res.json({'data': __dirname + "\\content\\" +  fileName });
    
    fs.readFile(__dirname + "\\content\\" +  fileName, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

 
module.exports = createHandler(app);

 /**
  const createHandler = require('azure-function-express').createHandler;
const app = require('express')();
//alert('hi');

app.get("/api/AzFuncExp/home", (req, res) => {
    res.json({ "name": "Home", "dob": "ddmmyyyy" });
});

app.get("/api/AzFuncExp/work", (req, res) => {
    res.json({ "name": req.query.name, "dob": "ddmmyyyy" });
});

module.exports = createHandler(app);



 module.exports = function (context, req) {

     var file="index.html"

     if (req.query.file) {
             file=req.query.file
     }

     file = file.replace(/\//g, "\\");

     fs.readFile(__dirname + "\\content\\" +  file, function(err, data) {

         context.log('GET ' + __dirname + "\\content\\" +  file);

         if (!err){

             var contentType = mime.lookup(file) 

             context.res = {
                 status: 200, 
                 body: data,
                 isRaw: true,
                 headers: {
                     'Content-Type': contentType
                 }
             };
         }else{

             context.log("Error: " + err)

             context.res = {
                 status: 404, 
                 body: "Not Found.",
                 headers: {
                 }
             };          
         }
         context.done()
     });
 };
  */
