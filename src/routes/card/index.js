const express = require('express');
const cardRouter = express.Router();
const cardSummaryRouter = require('./summary');

function router() {

    cardRouter.route('/')
       .get((req, res) => {
                res.send('Hello, Cards!');
        });
    
    cardRouter.use('/Summary', cardSummaryRouter());

    return cardRouter;
}

module.exports = router;
