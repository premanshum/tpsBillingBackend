// 1.
const sql = require('mssql');

// 2.
const config = {
    server: 'dgdrdscb01srwgp5t4wh5ec.database.windows.net',
    database: 'DevDB',
    user: 'tpsAdmin',
    password: 'Un1Qu3P@$$w0Rd',
    encrypt: true,
    port: 1433
};

// function loadProduct02() {
//     return "hiiiii";
// }

// 3.
function loadProduct(callBack) {
    // return config;
    // 4.
    const dbConn = new sql.ConnectionPool(config);
    // 5.
    return dbConn.connect().then(() => {
        // 6.
        const request = new sql.Request(dbConn);
        // 7.
        request.query("select top 10 * from dbo.product")
            .then((recordSet) => {
                // console.log(recordSet);
                // dbConn.close();
                callBack(null, recordSet);
            })
            .catch((err) => {
                // 8.
                dbConn.close();
                callBack(err, null);
            });
    })
    .catch((err) => {
        // 8.
        dbConn.close();
        callBack(err, null);
    });
}

module.exports = loadProduct;
