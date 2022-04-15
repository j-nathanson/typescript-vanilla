"use strict";
exports.__esModule = true;
var message = 'Hello Bobby';
// run indiv file with tsc main
console.log(message);
var x = 10;
// cannot do let x = 2; already declared
// can do x = 2;
var y = 20;
var sum;
var title = 'Bobproject';
// basic
// '.' for type intellisense 
var isBeginner = true;
var total = 0;
var name = 'doug';
var sentence = "My name is ".concat(name, " I am new to typescript");
console.log(sentence);
// not much use on their own
var n = null;
var u = undefined;
//null and undefined are sub-types of all other types
var isNew = null;
var myName = undefined;
// array different syntax, same effect
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//mixed type tuple, fixed array length, and type order
var person1 = ['zeke', 99];
// enum
//friendly name to set of numeric values
// default index at 0
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
// any, can reassign to any type
var randomVal = 10;
randomVal = true;
randomVal = 'bob';
// wont catch any errors because it could be any type
var myVal = 10;
console.log(myVal.name);
myVal();
myVal.toUpperCase();
var myVal2 = 10;
// These will throw compile error
// console.log(myVal2.name)
// myVal2()
// myVal2.toUpperCase()
// returns obj is { name: string }  , object with prop 'name' type string
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        "name" in obj;
}
// type assertion treat variable as the type
if (hasName(myVal2)) {
    console.log(myVal2.name);
}
myVal2.toUpperCase();
//type inference
var a; // implicit type any
a = 10;
a = true;
var b = 20; // implicit type number cannot do b = true
//multiple type union type only these two
var multiType;
multiType = 90;
multiType = true;
