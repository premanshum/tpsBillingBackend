const express = require("express");
var sql = require("mssql");
var axios = require("axios");
var cors = require("cors");
var qs = require("querystring");

const server = express();
server.use(cors())

async function getAccessToken(authCode){
    var token = '';
    var tokenURL = `https://login.microsoftonline.com/4b2c4934-c007-47dc-bff3-47eadcfa720a/oauth2/v2.0/token`;

    {
    // let options = {
    //             "method": "POST",
    //             "url": `${tokenURL}`,
    //             "headers": {
    //                 "Content-Type": "application/x-www-form-urlencoded",
    //             },
    //             "data": {
    //                 "client_id":"d24d28b4-09c9-4230-a9a0-ef113169c7b2",
    //                 "scope":"user.read",
    //                 "code": `${authCode}`,
    //                 "redirect_uri":"http://localhost:4200",
    //                 "grant_type":"authorization_code",
    //                 "client_secret":"4x=G4IKiegLj/Cpu9juMnsE*IFCPSb2*"
    //             }
    //         };
    }

    let options = {
        method: "POST",
        url: tokenURL,
        data: qs.stringify({
            client_id:"d24d28b4-09c9-4230-a9a0-ef113169c7b2", // Invoice UI app code
            //client_id:"62b35057-680d-45ce-9e3a-6a2b0c24338e",
            scope:"api://62b35057-680d-45ce-9e3a-6a2b0c24338e/ToDoListService.Read api://62b35057-680d-45ce-9e3a-6a2b0c24338e/ToDoListService.Read02",
            code: authCode,
            redirect_uri:"http://localhost:4200/",
            grant_type:"authorization_code",
            client_secret:"4x=G4IKiegLj/Cpu9juMnsE*IFCPSb2*"
        })
    };
    try{
        //console.log('\nJSON Stringify', JSON.stringify(options));
        let response = await axios(options);
        //console.log(response);
            
        let responseOK = response && response.status === 200 && response.statusText === 'OK';
        if (responseOK) {
            console.log("------------------ START responseOK --------------------");
            console.log(response);
            console.log("------------------ END responseOK --------------------");
            token = await response.data;
        }
    }
    catch(e){
        console.log("------------------ START error --------------------");
        console.log("Request Data:", e.config);
        console.log("Response Data:", e.response.data);
        console.log("------------------ END error --------------------");
        throw e;
    }
    
    console.log("------------------ START Token --------------------");
    console.log(token);
    console.log("------------------ END Token --------------------");
    return JSON.stringify(token);
};


/*
    const requestListener = (req, res)=>{
        res.end("Hello World!");
    };

    const serverHttp = http.createServer(requestListener);
*/

server.get("/token/:authCode", (req, res)=>{
    try{
        console.log("Auth code:" + req.params.authCode);

        (async ()=>{
            var response = await getAccessToken(req.params.authCode);
            res.send("Response: " + response);
        })();
    }
    catch(e)
    {
        res.send("Error");
    }
})

server.get("/", (req, res)=>{
    res.send("Hello Expressssssssssssssssssssss!");
});

server.get("/prem", (req, res)=>{
    res.send("Hello Premanshu Mukherji");
});

server.get("/invoice", (req, res)=>{
    // connect to your database
    sql.close();
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from product', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

server.get("/product", sqlConnect);

server.listen(4242, ()=>{
    console.log("Server is running...");
})


// config for your database
var config = {
    user: 'tpsAdmin',
    password: 'Un1Qu3P@$$w0Rd',
    server: 'dgdrdscb01srwgp5t4wh5ec.database.windows.net', 
    database: 'DevDB',
    options: {
        encrypt: true,
        port: 1433
    },
};

function sqlConnect(req, res){
    console.log(req);
    // connect to your database
    sql.close();
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select top 10 * from product', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
}