
// boolean
let isDone: boolean = false;

// number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// string
let username: string = "bob";


// array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error

console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'




// enum 
enum Color { Red = 1, Green = 2, Blue = 3}
let c: Color = Color.Green
let d: Color = Color.Yellow

// any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

//void
function warnUser(): void {
  console.log("This is my warning message");
}

// null 
// undefined

// never 
// 异常使用

// object