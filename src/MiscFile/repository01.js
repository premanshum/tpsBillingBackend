//1.
var sql = require('mssql');
//2.
var config = {
    server: 'dgdrdscb01srwgp5t4wh5ec.database.windows.net',
    database: 'DevDB',
    user: 'tpsAdmin',
    password: 'Un1Qu3P@$$w0Rd',
    encrypt:true,
    port: 1433
};
//3.
function loadInvoices() {
    //4.
    var dbConn = new sql.ConnectionPool(config);
    //5.
    dbConn.connect().then(function () {
        //6.
        var request = new sql.Request(dbConn);
        //7.
        request.query("select top 2 * from dbo.Invoices")
        .then(function (result) {
            console.log(result['recordset']);

            let returnObject = result['recordset'].map(item=>
                ({
                    site : item.prov_site
                })
            );
            console.log(returnObject);
            dbConn.close();
        })
        .catch(function (err) {
            //8.
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        //9.
        console.log(err);
    });
}
//10.

console.log("Start!");
loadInvoices();
console.log("Done!");