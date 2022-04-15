export { } //use to have ts and js files open in editor at the same time
let message = 'Hello Bobby'
// run indiv file with tsc main
console.log(message)

let x = 10;
// cannot do let x = 2; already declared
// can do x = 2;
const y = 20;

let sum;
const title = 'Bobproject';

// basic
// '.' for type intellisense 
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'doug';

let sentence: string = `My name is ${name} I am new to typescript`;

console.log(sentence)

// not much use on their own
let n: null = null;
let u: undefined = undefined;

//null and undefined are sub-types of all other types

let isNew: boolean = null;
let myName: string = undefined;

// array different syntax, same effect
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]

//mixed type tuple, fixed array length, and type order
let person1: [string, number] = ['zeke', 99]

// enum
//friendly name to set of numeric values
// default index at 0
enum Color { Red = 5, Green, Blue };

let c: Color = Color.Green
console.log(c)

// any, can reassign to any type
let randomVal: any = 10;
randomVal = true;
randomVal = 'bob';

// wont catch any errors because it could be any type
let myVal: any = 10;
// console.log(myVal.name)
// myVal()
// myVal.toUpperCase()

let myVal2: unknown = 10;
// These will throw compile error
// console.log(myVal2.name)
// myVal2()
// myVal2.toUpperCase()

// returns obj is { name: string }  , object with prop 'name' type string
function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === 'object' &&
        "name" in obj
}

// type assertion treat variable as the type
if (hasName(myVal2)) {
    console.log(myVal2.name);

}

// (myVal2 as string).toUpperCase()

//type inference
let a; // implicit type any
a = 10;
a = true;

let b = 20; // implicit type number cannot do b = true

//multiple type union type only these two
let multiType: number | boolean;
multiType = 90;
multiType = true;

let anyType: any;
anyType = 20;

// function
function add1(num1: number, num2: number) {
    return num1 + num2
}

// after params can state what will be returned or else it will be inferred
function add2(num1: number, num2: number): number {
    return num1 + num2
}

// optional parameters after required parameters
function add3(num1: number, num2?: number): number {
    if (num2) {
        return num1 + num2
    }
    return num1
}

// default value
function add4(num1: number, num2: number = 10): number {
    if (num2) {
        return num1 + num2
    }
    return num1
}

console.log(add4(5, 10))
console.log(add4(5))


// add('5',10)  static