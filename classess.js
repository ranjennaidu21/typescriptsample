//if need to put implementation use class
var Point = (function () {
    //constructors
    //since want to make use of empty parameter , need to make all the parameter optional using ?
    //once you make one of the parameter optional , all the other parameter in the right should be optional as well
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ',Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //..
    };
    return Point;
}());
//objects
//let point:Point;
//point object was undefined
//this will give error 
//so need to intialize it with new operator
//let point:Point = new Point();
//or make it cleaner like below:
//object is Instance of class
var point = new Point();
point.x = 2;
point.y = 3;
point.draw();
//use constructor with param
var point2 = new Point(5, 7);
point2.draw();
