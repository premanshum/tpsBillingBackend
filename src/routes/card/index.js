const express = require('express');
const customerRouter = express.Router();
const cardSummaryRouter = require('./summary');

function router() {

    customerRouter.route('/')
       .get((req, res) => {
                res.send('Hello, Cards!');
        });
    
    customerRouter.use('/Summary', cardSummaryRouter());

    return customerRouter;
}

module.exports = router;
