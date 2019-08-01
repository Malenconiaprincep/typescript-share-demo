
// 1. typeof

// function doSome(x: number | string) {
//   if (typeof x === 'string') {
//     // 在这个块中，TypeScript 知道 `x` 的类型必须是 `string`
//     console.log(x.substr(1)); // Error: 'subtr' 方法并没有存在于 `string` 上
//     console.log(x.substr(1)); // ok
//   }

//   x.substr(1); // Error: 无法保证 `x` 是 `string` 类型
// }


// 2. instanceof 

// class Foo {
//   foo = 123;
//   common = '123';
// }

// class Bar {
//   bar = 123;
//   common = '123';
// }

// function doStuff(arg: Foo | Bar) {
//   if (arg instanceof Foo) {
//     console.log(arg.foo); // ok
//     console.log(arg.bar); // Error
//   }
//   if (arg instanceof Bar) {
//     console.log(arg.foo); // Error
//     console.log(arg.bar); // ok
//   }
// }

// doStuff(new Foo());
// doStuff(new Bar());


// 3. in 

// interface A {
//   x: number;
// }

// interface B {
//   y: string;
// }

// function doStuff(q: A | B) {
//   if ('x' in q) {
//     // q: A
//     console.log(q.x)
//     console.log(q.y)
//   } else {
//     // q: B
//     console.log(q.x)
//     console.log(q.y)
//   }
// }


// 4. 自定义保护类型

// 仅仅是一个 interface
interface Foo {
  foo: number;
  common: string;
}

interface Bar {
  bar: number;
  common: string;
}

// 用户自己定义的类型保护！
function isFoo(arg: Foo | Bar): arg is Foo {
  return (arg as Foo).foo !== undefined;
}

// 用户自己定义的类型保护使用用例：
function doStuff(arg: Foo | Bar) {
  if (isFoo(arg)) {
    console.log(arg.foo); // ok
    console.log(arg.bar); // Error
  } else {
    console.log(arg.foo); // Error
    console.log(arg.bar); // ok
  }
}

doStuff({ foo: 123, common: '123' });
doStuff({ bar: 123, common: '123' });