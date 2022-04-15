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
console.log(myVal.name)
myVal()
myVal.toUpperCase()

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
if(hasName(myVal2)){
    console.log(myVal2.name);
    
}

    (myVal2 as string).toUpperCase()