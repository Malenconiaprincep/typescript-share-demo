// 

interface Named {
  name: string;
}

let x1: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: 'Alice', location: 'Seattle' };
x1 = y;



function greet(n: Named) {
  console.log('Hello, ' + n.name);
}
greet(y); // OK


let x2 = (a: number) => 0;
let y2 = (b: number, s: string) => 0;

// y2 = x2
// x2 = y2

// 为啥能忽略参数？


// 返回值

let x3 = () => ({name: 'Alice'});
let y3 = () => ({name: 'Alice', location: 'Seattle'});

// y3 = x3
// x3 = y3

// 类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型。


// 枚举兼容
enum Status {
  Ready,
  Waiting
}
enum Color {
  Red1,
  Blue1,
  Green1
}

let status2 = Status.Ready;
let color = Color.Red1;

status2 = color; // Error


// 类
// 仅仅只有实例成员和方法会相比较，构造函数和静态成员不会被检查。
class Animal55 {
  feet: number;
  constructor(name: string, numFeet: number) {}
}

class Size55 {
  feet: number;
  constructor(meters: number) {}
}

let a: Animal55;
let s: Size55;

a = s; // OK
s = a; // OK


// 私有的和受保护的成员必须来自于相同的类。
class Animal5 {
  protected feet: number;
}
class Cat extends Animal5 {}

let animal: Animal5;
let cat: Cat;

animal = cat; // ok
cat = animal; // ok

class Size {
  protected feet: number;
}

let size: Size;

animal = size; // ERROR
size = animal; // ERROR


// 泛型

// 类型参数未被使用

// interface Empty<T> {}

// let x5: Empty<number>;
// let y5: Empty<string>;

// x5 = y; // ok


// 类型参数被使用

interface Empty<T> {
  data: T
}

let x5: Empty<number>;
let y5: Empty<string>;

x5 = y; // ok



// 类中泛型
class List<T> {
  add(val: T) {}
}

class Animalx {
  name: string;
}
class Catx extends Animalx {
  meow() {
    // ..
  }
}

const animals = new List<Animalx>();
animals.add(new Animalx()); // ok
animals.add(new Catx()); // ok

const cats = new List<Catx>();
cats.add(new Animalx()); // Error
cats.add(new Catx()); // ok