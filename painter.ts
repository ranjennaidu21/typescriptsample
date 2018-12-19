//each file is module
//in order for this class visible in other module to import, we need to use export keyword
export class Painter{

    constructor(private x?:number,private y?:number){
    }
   
   draw(){
       console.log('X: '+this.x+ ',Y: '+this.y);
   }
}