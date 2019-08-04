// 1.继承

// class Animal {
//   move(distanceInMeters: number = 0) {
//       console.log(`Animal moved ${distanceInMeters}m.`);
//   }
// }

// class Dog extends Animal {
//   bark() {
//       console.log('Woof! Woof!');
//   }
// }

// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();




// 2.修饰符

// class Animal {
//   private name: string;
//   public constructor(theName: string) { this.name = theName; }
//   public move(distanceInMeters: number) {
//       console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }

// new Animal('cat').name


// 2-1 理解protected

// class Person {
//   protected name: string;
//   constructor(name: string) { this.name = name; }
// }

// class Employee extends Person {
//   private department: string;

//   constructor(name: string, department: string) {
//       super(name)
//       this.department = department;
//   }

//   public getElevatorPitch() {
//       return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//   }
// }

// let howard = new Employee("Howard", "Sales");
// console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误


// 3. getters/setters 

// let passcode = "secret passcode";

// class Employee {
//     private _fullName: string;

//     get fullName(): string {
//         return this._fullName;
//     }

//     set fullName(newName: string) {
//         if (passcode && passcode == "secret passcode") {
//             this._fullName = newName;
//         }
//         else {
//             console.log("Error: Unauthorized update of employee!");
//         }
//     }
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     alert(employee.fullName);
// }


// 4.静态属性

// class Grid {
//   static origin = {x: 0, y: 0};
//   calculateDistanceFromOrigin(point: {x: number; y: number;}) {
//       let xDist = (point.x - Grid.origin.x);
//       let yDist = (point.y - Grid.origin.y);
//       return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//   }
//   constructor (public scale: number) { }
// }

// let grid1 = new Grid(1.0);  // 1x scale
// let grid2 = new Grid(5.0);  // 5x scale

// console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
// console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));


