const express = require('express');
var fs = require('fs'),
path = require('path');

const txnRouter = express.Router();

function router() {

    txnRouter.route('/')
       .get((req, res) => {
                res.send('Hello, recent transaction!');
        });

    txnRouter.route('/:id')
        .post((req, res) => {

        let fileName = '../../../content/transaction/multipleTransactions.json';
        let filePath = path.join(__dirname, fileName);

        if(req.params.id == 'mpma'){
            fileName = '../../../content/transaction/multipleTransactions.json';
            filePath = path.join(__dirname, fileName);
        }

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

    return txnRouter;
}

module.exports = router;
