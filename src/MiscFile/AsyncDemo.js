var fs = require('fs');

async function readDir(path){
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files)=>{
            //console.log(files);
            if(err){ console.log("Oops"); reject(err);}
            if(files) { resolve(files);}
        })  
        //setTimeout(() => resolve(2), 1000);
    });
};

let promise = readDir("d:/technical/programs");
promise.then(files => console.log(files)).catch(err=>console.log("Oops........" + err));