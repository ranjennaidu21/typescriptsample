let count = 5;
//In javascript can but in typescript cannot convert the variable 
//datatype in fly like javascript
//still can compile and execute the js file generated
//so better to write correct one in ts so that can see warning
//during runtime compilation time.
//count = 'a';

//default will be any
let a;
a=1;
a='asd';
a=false;

//or
let b:number;
let c:boolean;
let d:string;
let e:any;
let f:number[]= [1,2,3];
//not good practice, try to avoid
let g:any[]= [1,true,'test'];

//enum
const ColorRed = 0;
const ColorBlue = 1;
const ColorGreen = 2;

enum Color{ColorRed,ColorBlue,ColorGreen}
let backgroundColor = Color.ColorBlue;
//can get the value without declare value for each here
console.log(backgroundColor);

//above not good approach , recommended to use below as new value need to be added in future.
enum ColorNew{ColorRed=1,ColorBlue=2,ColorGreen=3};
console.log(ColorNew.ColorGreen);

//types assertions
//if declared as string no problem 
let test2 = 'haha';
let endwithC = test2.endsWith('q',3);

//now test3 is any type. if let say want to use string functions(eg:endsWith) need to explicitly mentioned that
let test3;
test3 = 'meow';
//this type is string by using below
let endwithC2 = (<string> test3).endsWith('a',3);
//or alternatively can do like this, same as above
let endwithC3 = (test3 as string).endsWith('w',3);

console.log(endwithC);
console.log(endwithC2);
console.log(endwithC3);
