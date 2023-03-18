const express = require('express');
var fs = require('fs'),
path = require('path');
const readFromFile = require('../../MiscFile/readFromFile');

const userRouter = express.Router();

function router() {

    userRouter.route('/')
        .get((req, res) => {
                res.send('Hello, User!');
        });

    // userRouter.route('/:id')
    //     .get((req, res) => {            
    //         let rp = readFromFile('src/content/multiPayerMultiAccount.json');
    //         rp.then(
    //             lines => {
    //                 //lines = JSON.stringify(lines);
    //                 console.log('received data: ' + lines.join(','));
    //                 res.writeHead(200, {'Content-Type': 'text/json'});
    //                 res.write(lines.join(','));
    //                 res.end();
    //                 //res.send(lines);
    //             },                
    //             err=>console.log(err)
    //         )
    //     });

    userRouter.route('/:id')
    .post((req, res) => {

        let fileName = '../../content/user/singlePayerSingleAccount.json';
        let filePath = path.join(__dirname, fileName);

        if(req.params.id == 'mpma'){
            fileName = '../../content/user/multiPayerMultiAccount.json';
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

    return userRouter;
}

module.exports = router;
