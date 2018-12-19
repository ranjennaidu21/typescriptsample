//if need to put implementation use class
class PointObj{
    //you can use private access modifier to avoid setting value directly as below
    

    // private x:number;
    // private y:number;
    // constructor(x?:number,y?:number){
    //     this.x=x;
    //     this.y=y;
    // }

    //above commented as you can achieve same function in less code as below
     constructor(private x?:number,private y?:number){
     }
    
    draw(){
        console.log('X: '+this.x+ ',Y: '+this.y);
    }

    getDistance(another:PointObj){
        //..
    }
}


let pointing2 = new PointObj(5,7);
pointing2.draw();





