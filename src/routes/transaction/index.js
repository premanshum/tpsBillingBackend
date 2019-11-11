const express = require('express');
const transactionRouter = express.Router();
const recentTxnRouter = require('./recentTxn');
const pricedTxnRouter = require('./pricedTxn');
var fs = require('fs'),
path = require('path');

function router() {

    transactionRouter.route('/')
       .get((req, res) => {
                res.send('Hello, Transaction!');
        });
    
    transactionRouter.use('/RecentTransactions', recentTxnRouter());
    transactionRouter.use('/pricedTransactionsSummary', pricedTxnRouter());
    transactionRouter.use('/pricedTransactions', pricedTxnRouter());


    // transactionRouter.route('/pricedTransactions')
    // .post((req, res) => {

    //     let fileName = '../../content/transaction/pricedTransaction.json';
    //     let filePath = path.join(__dirname, fileName);
    //     console.log(req.url);

    //     if(req.params.id == 'mpma'){
    //         fileName = '../../../content/transaction/pricedTransaction.json';
    //         filePath = path.join(__dirname, fileName);
    //     }

    //     fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    //         if (!err) {
    //             res.writeHead(200, {'Content-Type': 'text/json'});
    //             res.write(data);
    //             res.end();
    //         } else {
    //             console.log(err);
    //         }
    //     });
    // });

    return transactionRouter;
}

module.exports = router;
