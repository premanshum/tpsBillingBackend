const express = require('express');
var fs = require('fs'),
path = require('path');

const cardRouter = express.Router();

function router() {

    cardRouter.route('/')
       .get((req, res) => {
                res.send('Hello, Customer card Group!');
        });

    cardRouter.route('/:id')
        .post((req, res) => {

        let fileName = '../../../content/card/cardGroup.json';
        let filePath = path.join(__dirname, fileName);

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

    return cardRouter;
}

module.exports = router;
