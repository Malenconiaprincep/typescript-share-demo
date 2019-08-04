// 1. 抽象类

// abstract class Animal {
//   abstract makeSound(): void;
//   move(): void {
//       console.log('roaming the earch...');
//   }
// }

// class Cat extends Animal {
//   constructor() {
//     super()
//   }

//   test(): void {

//   }

//   makeSound() {

//   }
// }

// let cat: Animal
// cat = new Cat()

// cat.test()  // 不存在抽象类上



// 2. 实现接口

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}

interface TestInterface {
  test: string;
  setTest(a: string)
}

class Clock implements ClockInterface,TestInterface {
  currentTime: Date;
  test: string;
  setTime(d: Date) {
      this.currentTime = d;
  }
  setTest(a: string) {
    this.test = 'test'
  }
  constructor(h: number, m: number) { }
}





export default {}