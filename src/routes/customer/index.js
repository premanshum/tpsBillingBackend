const express = require('express');
const customerRouter = express.Router();
const payerRouter = require('./payer');
const accountRouter = require('./account');
const card = require('./card');

function router() {

    customerRouter.route('/')
       .get((req, res) => {
                res.send('Hello, customer!');
        });
    
    customerRouter.use('/payers', payerRouter());
    customerRouter.use('/accounts', accountRouter());
    customerRouter.use('/cardGroups', card());
    

    return customerRouter;
}

module.exports = router;
