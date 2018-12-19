//Instead of doing like this
let drawPoint = (point:{x:number,y:number}) => {
    //..
}

//We can use interface // purely for declarations , not implementations
//if need to put implementation use class
//always use Uppercase for Interface name
interface Pointu{
    x:number,
    y:number,
}

let drawPoint2 = (point:Pointu) => {
    //..
}


//call the function
drawPoint({
    x:1,
    y:2
});

drawPoint2({
    x:1,
    y:2
});