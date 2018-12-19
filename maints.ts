//type script can use var as javascript or let keyword

var number = 1;
let test = 0;


function doSomethingVar(){
    for(var i=0;i<5;i++){
        console.log(i);
    }
    //for var the variable available for the nearest function (doSomething)
    //so it available anywhere within this function
    console.log('Finally: '+i);
}

//if use let it only available withing that - proper way
function doSomethingLet(){
    for(let i=0;i<5;i++){
        console.log(i);
    }

    //uncomment code below- 
    //let make variable i available within block only instead of
    //nearest function. - recommeded to use let
    //console.log('Finally: '+i);
}

//the typescript will still compile to javascript es5 even have compilation issues
doSomethingVar();
doSomethingLet();