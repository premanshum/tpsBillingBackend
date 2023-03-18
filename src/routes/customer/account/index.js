const express = require('express');
var fs = require('fs'),
path = require('path');

const accountRouter = express.Router();

function router() {

    accountRouter.route('/')
       .get((req, res) => {
                res.send('Hello, account!');
        });

    accountRouter.route('/:id')
        .post((req, res) => {

        let fileName = '../../../content/account/singleAccount.json';
        let filePath = path.join(__dirname, fileName);

        if(req.params.id == 'mpma'){
            fileName = '../../../content/account/multiAccounts.json';
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

    return accountRouter;
}

module.exports = router;
