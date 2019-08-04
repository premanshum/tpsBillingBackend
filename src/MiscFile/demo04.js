var arrayData = [[1, 2, 3, 4, 5], ['Prem', 'Sam', 'Ramu', 'Joe', 'Raj'], ['In', 'US', 'UK', 'AS', 'JP']];
let resultset = {
    "numOfColumn":4,
    "numOfRows":10,
    "columns":[
        {"name":"ID", "dataType":{"type":"varchar", "size":10}},
        {"name":"NAME", "dataType":{"type":"varchar", "size":10}},
        {"name":"LOCATION", "dataType":{"type":"varchar", "size":10}},
    ]
};
let columns = resultset.columns.reduce((prev, next, index)=>
(prev).concat(next.name.toLowerCase()), 
[]);

// == The Correct One ==========
transpose = (array) =>{
    return array.reduce((prev, next, index) =>
        next.map((item, i) => createObject(item, index, prev[i])
    )
, []);
}

createObject = (item, index, anObject)=>{
    if(anObject == undefined){
        anObject = {};
    }
    anObject[columns[index]] = item;
    return anObject;
}
// === Correct One =============

transpose2 = (array1) =>{
    return array1.reduce((prev, next) =>
        next.map((item, i) =>
            (prev[i] || []).concat(item)
    )
, []);
}

transpose3 = (array) =>{
    return array.reduce((prev, next, index) =>
        next.map((item, i) => (prev[i] || '') + createObject(item, index)
    )
, []);
}

// === 
transpose4 = (array) =>{
    return array.reduce((prev, next, index) =>
        next.map((item, i) => createObject(item, index, prev[i])
    )
, []);
}

createObject1 = (item, index)=>{
    let returnValue = '';
    if(index == 0){
        returnValue += "Id:" + item +',';
    }
    else if(index==1){
        returnValue += "Name:" + item +',';
    }
    else if(index==2){
        returnValue += "Location:" + item +',';
    }
    return returnValue;
}



createObject2 = (item, index, anObject)=>{

    let returnValue = {};
    //if(anObject == null || anArray == undefined)

    if(index == 0){
        returnValue.Id = item;
        if(anObject!=null && anObject!=undefined){
            anObject.Id = item;
        }
    }
    else if(index==1){
        returnValue.Name = item;
        if(anObject!=null && anObject!=undefined){
            anObject.Name = item;
        }
    }
    else if(index==2){
        returnValue.Location = item;
        if(anObject!=null && anObject!=undefined){
            anObject.Location = item;
        }
    }
    if(anObject!=null && anObject!=undefined){
        return anObject;
    }
    return returnValue;
}

let theTransFormedData = transpose4(arrayData);

console.log(theTransFormedData);

// let anArray = [1,2,3,4,5]
// let y = [];
// var s = anArray.map((item, index)=>{
//     y.concat(item);
//     //console.log(y)
// });
// console.log(s);
//console.log(anArray.map(function(item, index){y.concat(item);}));

//console.log(s);



//console.log(resultset.columns);
//console.log(columns);