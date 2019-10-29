const express = require('express');
var fs = require('fs'),
path = require('path');

const payerRouter = express.Router();

function router() {

    payerRouter.route('/')
       .get((req, res) => {
                res.send('Hello, Payer!');
        });

    payerRouter.route('/:id')
        .post((req, res) => {

        let fileName = '../../../content/payer/singlePayer.json';
        let filePath = path.join(__dirname, fileName);

        if(req.params.id == 'mpma'){
            fileName = '../../../content/payer/multiPayers.json';
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

    return payerRouter;
}

module.exports = router;
