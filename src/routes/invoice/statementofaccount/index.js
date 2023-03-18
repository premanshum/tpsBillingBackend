const express = require('express');
var fs = require('fs'),
path = require('path');

const stmtOfAccountRouter = express.Router();

function router() {

    stmtOfAccountRouter.route('/')
       .get((req, res) => {
                res.send('Hello, stmtOfAccount!');
        });

    stmtOfAccountRouter.route('/:id')
        .post((req, res) => {

        let fileName = '../../../content/invoice/statementOfAccount.json';
        let filePath = path.join(__dirname, fileName);

        fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
            if (!err) {
                //console.log('received data: ' + data);
                res.writeHead(200, {'Content-Type': 'text/json'});
                res.write(data);
                res.end();
            } else {
                console.log(err);
            }
        });
    });

    return stmtOfAccountRouter;
}

module.exports = router;
