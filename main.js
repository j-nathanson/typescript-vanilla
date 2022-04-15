"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// console.log(myVal.name)
// myVal()
// myVal.toUpperCase()
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
// (myVal2 as string).toUpperCase()
//type inference
var a; // implicit type any
a = 10;
a = true;
var b = 20; // implicit type number cannot do b = true
//multiple type union type only these two
var multiType;
multiType = 90;
multiType = true;
var anyType;
anyType = 20;
// function
function add1(num1, num2) {
    return num1 + num2;
}
// after params can state what will be returned or else it will be inferred
function add2(num1, num2) {
    return num1 + num2;
}
// optional parameters after required parameters
function add3(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
// default value
function add4(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
console.log(add4(5, 10));
console.log(add4(5));
// okay for obj with small amount of properties
function fullName1(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
function fullName2(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Don',
    lastName: 'McCune'
};
fullName2(p);
// public property can be used inside/outside of a class
// private only inside the base class, does not extend to other classes
// protected can be extended within extend classes, but not outside scope
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("my name is ".concat(this.employeeName));
    };
    return Employee;
}());
var employee1 = new Employee('pablo');
console.log(employee1.employeeName);
employee1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
        console.log(m1.employeeName);
    };
    return Manager;
}(Employee));
var m1 = new Manager('luke');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
