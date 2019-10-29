const express = require('express');
const transactionRouter = express.Router();
const recentTxnRouter = require('./recentTxn');

function router() {

    transactionRouter.route('/')
       .get((req, res) => {
                res.send('Hello, Transaction!');
        });
    
    transactionRouter.use('/RecentTransactions', recentTxnRouter());

    return transactionRouter;
}

module.exports = router;
