//properties - getter and setter method
//properties look like a field from outside , but internally it is like method in a class
class PointObj2{

     constructor(private x?:number,private y?:number){
     }
    
    draw(){
        console.log('X: '+this.x+ ',Y: '+this.y);
    }

    getDistance(another:PointObj){
        //..
    }

    //method to return X which can be read this private variable by method outside this class
    get X(){
        return this.x;
    }

    set X(value){
        if (value <0)
            throw new Error('value cannot be less than 0')
    
        this.x=value;
    }
}


let pointer8 = new PointObj2(5,7);
//getter
let xValue = pointer8.X;
//setter
pointer8.X= 12;
pointer8.draw();





