const fs = require('fs');

function readDir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            // console.log(files);
            if (err) { console.log("Oops"); reject(err); }
            if (files) { resolve(files); }
        });
        // setTimeout(() => resolve(2), 1000);
    });
}

const promise = readDir("d:/technical/programss");
promise.then(
    files => console.log(["Wow!"] + files),
    // err =>console.log("Oops..." + err)
).catch(err => console.log("Oops........", err));
