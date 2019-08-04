const express = require("express");
var sql = require("mssql");


// config for your database
var config = {
    user: 'tpsAdmin',
    password: 'Un1Qu3P@$$w0Rd',
    server: 'dgdrdscb01srwgp5t4wh5ec.database.windows.net', 
    database: 'DevDB',
    options: {
        encrypt: true,
        port: 1433
    }
};

// connect to your database
function sqlConnect(){

    sql.close();
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
        
        // query to the database and get the records
        request.query('select * from product', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            console.log(recordset);
            return recordset;
            
            });
    });
}

console.log("Hello");
try {
    var xx = sqlConnect();
    console.log(xx);
} catch (ex) {
    console.log(ex);
}