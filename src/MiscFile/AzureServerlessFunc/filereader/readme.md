In this activity there were few new things done

1. Node was installed in the parent directory, unlike the AzFuncExp. That means, the same node modules can be shared across the multiple functions.

2. Both the functions, AzFuncExp and fileReader, have their own function.json file. The routing has to differ. The route parameter should have a different value in both the functions. They cannot match. So AzFuncExp has route value 'AzFuncExp/{*segments}' and FileReader has route value 'filereader/{segments*}'.



Things to do:

1. just like node modules are shared, application level libraries can be shared. Need to check.



Index.js:


=========C O D E - S T A R T ==============================

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

======== C O D E - E N D ==================================


Function.json
=========C O D E - S T A R T ==============================

{
  "bindings": [
    {
      "authLevel": "anonymous",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "route": "filereader/{*segments}",
      "methods": [
        "get",
        "post"
      ]
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    }
  ],
  "disabled": false
}

======== C O D E - E N D ==================================
