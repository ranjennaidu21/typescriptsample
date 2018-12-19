var count = 5;
//In javascript can but in typescript cannot convert the variable 
//datatype in fly like javascript
//still can compile and execute the js file generated
//so better to write correct one in ts so that can see warning
//during runtime compilation time.
//count = 'a';
//default will be any
var a;
a = 1;
a = 'asd';
a = false;
//or
var b;
var c;
var d;
var e;
var f = [1, 2, 3];
//not good practice, try to avoid
var g = [1, true, 'test'];
//enum
var ColorRed = 0;
var ColorBlue = 1;
var ColorGreen = 2;
var Color;
(function (Color) {
    Color[Color["ColorRed"] = 0] = "ColorRed";
    Color[Color["ColorBlue"] = 1] = "ColorBlue";
    Color[Color["ColorGreen"] = 2] = "ColorGreen";
})(Color || (Color = {}));
var backgroundColor = Color.ColorBlue;
//can get the value without declare value for each here
console.log(backgroundColor);
//above not good approach , recommended to use below as new value need to be added in future.
var ColorNew;
(function (ColorNew) {
    ColorNew[ColorNew["ColorRed"] = 1] = "ColorRed";
    ColorNew[ColorNew["ColorBlue"] = 2] = "ColorBlue";
    ColorNew[ColorNew["ColorGreen"] = 3] = "ColorGreen";
})(ColorNew || (ColorNew = {}));
;
console.log(ColorNew.ColorGreen);
//types assertions
//if declared as string no problem 
var test2 = 'haha';
var endwithC = test2.endsWith('q', 3);
//now test3 is any type. if let say want to use string functions(eg:endsWith) need to explicitly mentioned that
var test3;
test3 = 'meow';
//this type is string by using below
var endwithC2 = test3.endsWith('a', 3);
//or alternatively can do like this, same as above
var endwithC3 = test3.endsWith('w', 3);
console.log(endwithC);
console.log(endwithC2);
console.log(endwithC3);
