//if need to put implementation use class
var PointObj = (function () {
    //you can use private access modifier to avoid setting value directly as below
    // private x:number;
    // private y:number;
    // constructor(x?:number,y?:number){
    //     this.x=x;
    //     this.y=y;
    // }
    //above commented as you can achieve same function in less code as below
    function PointObj(x, y) {
        this.x = x;
        this.y = y;
    }
    PointObj.prototype.draw = function () {
        console.log('X: ' + this.x + ',Y: ' + this.y);
    };
    PointObj.prototype.getDistance = function (another) {
        //..
    };
    return PointObj;
}());
var pointing2 = new PointObj(5, 7);
pointing2.draw();
