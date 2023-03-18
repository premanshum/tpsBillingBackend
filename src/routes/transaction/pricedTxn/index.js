const express = require('express');
var fs = require('fs'),
path = require('path');

const txnRouter = express.Router();

function router() {

    txnRouter.route('/')
       .get((req, res) => {
                res.send('Hello, Priced transaction!');
        });

    txnRouter.route('/:id')
        .post((req, res) => {
            let fileName = '../../../content/transaction/pricedTransactionsSummary.json';
            let filePath = path.join(__dirname, fileName);
            let baseUrl = req.baseUrl.toLowerCase();
            console.log(baseUrl.toLowerCase().substring(baseUrl.indexOf('pricedtransactions')));

            if(req.params.id == 'mpma'){
                fileName = '../../../content/transaction/pricedTransactionsSummary.json';
                filePath = path.join(__dirname, fileName);
            }

            if(baseUrl.substring(baseUrl.indexOf('pricedtransactions')) == 'pricedtransactions'){
                fileName = '../../../content/transaction/pricedTransaction.json';
                filePath = path.join(__dirname, fileName);
                
                if(req.params.id == 'mpma'){
                    fileName = '../../../content/transaction/pricedTransaction.json';
                    filePath = path.join(__dirname, fileName);
                }
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
