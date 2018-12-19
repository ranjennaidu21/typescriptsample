//if need to put implementation use class
var Point2 = (function () {
    //you can use private access modifier to avoid setting value directly as below
    // private x:number;
    // private y:number;
    // constructor(x?:number,y?:number){
    //     this.x=x;
    //     this.y=y;
    // }
    //above commented as you can achieve same function in less code as below
    function Point2(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2.prototype.draw = function () {
        console.log('X: ' + this.x + ',Y: ' + this.y);
    };
    Point2.prototype.getDistance = function (another) {
        //..
    };
    return Point2;
}());
var point3 = new Point2(5, 7);
point3.draw();
