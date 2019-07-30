// 泛型

// 不用泛型
// function identity(arg: number): number {
//   return arg;
// }

// function identity(arg: any): any {
//   return arg;
// }


// 使用泛型

// 1.类型变量

  // function identity<T>(arg: T): T {
  //   return arg;
  // }

  // 1.传入所有的参数，包含类型参数
  // let output = identity<string>("myString"); 

  // 2. 类型推论
  // let output = identity("myString");


// 2.泛型变量

// function loggingIdentity<T>(arg: T): T {
//     console.log(arg.length);  // Error: T doesn't have .length
//     return arg;
// }

// function loggingIdentity<T>(arg: T[]): T[] {
//   console.log(arg.length);  // Error: T doesn't have .length
//   return arg;
// }



// 3.泛型接口

// interface GenericIdentityFn<T> {
//   (arg: T): T;
// }

// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: GenericIdentityFn<number> = identity;


// 4.泛型类
// 注： 静态属性是不能泛型类型

// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };


// 5.泛型约束

// interface Lengthwise {
//   length: number;
// }

// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//   console.log(arg.length);  // Now we know it has a .length property, so no more error
//   return arg;
// }

// loggingIdentity(3);
// loggingIdentity({length: 10, value: 3});



 function copy<T extends U, U>(source: U, target: T): T {
       for (let prop in source) {
           target[prop] = source[prop];
       }
   
       return target;
   }

   copy({ a: 1, b: 2 }, { a: 2, b: 3, c: 4 });