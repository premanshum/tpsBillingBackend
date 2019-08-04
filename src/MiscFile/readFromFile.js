var fs = require('fs'),
    readline = require('readline');

readFromFile = (path) => {
    var readPromise = new Promise((resolve, reject)=>{
        var rd = readline.createInterface({
            input: fs.createReadStream(path),
            console: false
        });
        
        var lines = [];
        var counter = 0;
    
        rd.on('line', function(line) {
            lines.push(counter++ + '-' + line);
            //console.log(line);
        });
    
        rd.on('close', () => {
            var json = JSON.stringify(lines);
            resolve(lines);
        });
    });

    return readPromise;
}

let rp = readFromFile('D:/Technical/powershellscripts/learn/sample01.txt');
rp.then(
    lines => {
        let kkk = JSON.stringify(lines)
        console.log(kkk);
    }
);

console.log("The rp value:")
console.log(rp);
