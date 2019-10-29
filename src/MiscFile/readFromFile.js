var fs = require('fs'),
    readline = require('readline');

readFromFile = (path) => {
    var readPromise = new Promise((resolve, reject)=>{
        try{

            var rd = readline.createInterface({
                input: fs.createReadStream(path),
                console: false
            });
            
            var lines = [];
        
            rd.on('line', function(line) {
                lines.push(line.trim());
                //console.log(line);
            });
        
            rd.on('close', () => {
                //var json = JSON.stringify(lines);
                resolve(lines);
            });
        }
        catch{
            reject(new Error("error reading the file"));
        }
    });

    return readPromise;
}

module.exports = readFromFile;

/*
let rp = readFromFile('../asdas');
rp.then(
    lines => {
        let kkk = JSON.stringify(lines)
        console.log(kkk);
    }
);

console.log("The rp value:")
console.log(rp);
*/
