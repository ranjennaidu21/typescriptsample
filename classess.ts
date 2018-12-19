//if need to put implementation use class
class Point{
    x:number;
    y:number;
    //you can use private access modifier to avoid setting value directly as below
    //private x:number;
    //private y:number;

    //constructors
    //since want to make use of empty parameter , need to make all the parameter optional using ?
    //once you make one of the parameter optional , all the other parameter in the right should be optional as well
    constructor(x?:number,y?:number){
        this.x=x;
        this.y=y;
    }
    
    draw(){
        console.log('X: '+this.x+ ',Y: '+this.y);
    }

    getDistance(another:Point){
        //..
    }
}


//objects

//let point:Point;
//point object was undefined
//this will give error 

//so need to intialize it with new operator
//let point:Point = new Point();
//or make it cleaner like below:

//object is Instance of class
let point = new Point();
point.x=2;
point.y=3;
point.draw();

//use constructor with param
let point2 = new Point(5,7);
point2.draw();





