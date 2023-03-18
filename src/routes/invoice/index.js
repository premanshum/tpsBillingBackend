const express = require('express');
const customerRouter = express.Router();
const statementofaccountRouter = require('./statementofaccount');

function router() {

    customerRouter.route('/')
       .get((req, res) => {
                res.send('Hello, Invoice!');
        });
    
    customerRouter.use('/statementofaccount', statementofaccountRouter());

    return customerRouter;
}

module.exports = router;
