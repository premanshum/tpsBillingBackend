const express = require('express');

const productRepository = require('../../MiscFile/repository');

const productRouter = express.Router();

function router() {

    productRouter.route('/')
        .get((req, res) => {
            productRepository((err, data) => {
                console.log(data.recordsets[0]);
                res.send(data.recordsets[0]);
            });
        });

    productRouter.route('/:id')
        .get((req, res) => {
            res.send(`The product detail: ${req.params.id}`);
        });

    return productRouter;
}

module.exports = router;
