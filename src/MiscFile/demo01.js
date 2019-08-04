var Employees = [{
    name:'Prem',
    Id:'213',
    deptt:'IT'
}, {
    name:'Arun',
    Id:'214',
    deptt:'AC'
}, {
    name:'Kim',
    Id:'215',
    deptt:'MG'
}, {
    name:'Joe',
    Id:'216',
    deptt:'IN'
}];


var departments = [ 
    {id:'AC', value:'Account'}, 
    {id:'IT', value:'Information Technology'}, 
    {id:'IN', value:'Infrastructure'}, 
    {id:'MG', value:'Management'}];

var obj = {
    name:'Prem',
    Id:'213',
    deptt:'IT'
}

//var {deptt, Id, ...obj01} = obj;

//console.log(Employees);


var empSlim = Employees.map(({name, deptt})=>{
    
    //console.log(deptt);
    var dep = departments.find((d)=>{return d.id==deptt}).value;
    //console.log(department.value);
    return {name, department: dep};
});

console.log(empSlim);

//var Deps = [{AC:'Account', MG:'Management'}];

//console.log(Deps['AC']);


