const express = require('express');
const customerRouter = express.Router();
const payerRouter = require('./payer');
const accountRouter = require('./account');

function router() {

    customerRouter.route('/')
       .get((req, res) => {
                res.send('Hello, customer!');
        });
    
    customerRouter.use('/payers', payerRouter());
    customerRouter.use('/accounts', accountRouter());

    return customerRouter;
}

module.exports = router;
