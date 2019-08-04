function foo(res, rej){
    res('Hello');
    rej('World');
}

foo(
    (data)=>{
        console.log(data);
    },
    (data1)=>{
        console.log(data1);
    }
);