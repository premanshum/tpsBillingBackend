const myData = [[8, 6], [5, 4, 3],  [2, 1]];

const output = myData.reduce((acc, val, i, arr)=>{
    console.log('acc:', acc, 'val:', val, 'index:', i, 'arr:', arr);
    return acc.concat(val);
}, []);

console.log(output);

module.exports = {
    d:10
};

console.log(module.exports.d);

