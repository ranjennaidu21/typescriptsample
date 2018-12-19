//if need to put implementation use class
class Point2{
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

    getDistance(another:Point2){
        //..
    }
}


let point3 = new Point2(5,7);
point3.draw();





