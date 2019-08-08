// 交叉类型

function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let id in first) {
      (<any>result)[id] = (<any>first)[id];
  }
  for (let id in second) {
      if (!result.hasOwnProperty(id)) {
          (<any>result)[id] = (<any>second)[id];
      }
  }
  return result;
}


class Person {
  constructor(public name: string) { }
}
interface Loggable {
  log(): void;
}
class ConsoleLogger implements Loggable {
  log() {
      // ...
  }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n1 = jim.name;
jim.log();



// 联合类型

function formatCommandline(command: string[] | string) {
  let line = '';
  if (typeof command === 'string') {
    line = command.trim();
  } else {
    line = command.join(' ').trim();
  }

  // Do stuff with line: string
}





// 映射类型
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
}
type Partial<T> = {
  [P in keyof T]?: T[P];
}

type Person1 =  {
  name: string
  age: number
}

type ReadOnlyPerson = Readonly<Person1>

type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean };



// 索引类型

function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
  return propertyNames.map(n => o[n]);
}

interface Car {
    manufacturer: string;
    model: string;
    year: number;
}
let taxi: Car = {
    manufacturer: 'Toyota',
    model: 'Camry',
    year: 2014
};

// Manufacturer and model are both of type string,
// so we can pluck them both into a typed string array
let makeAndModel: string[] = pluck(taxi, ['manufacturer', 'model']);

// If we try to pluck model and year, we get an
// array of a union type: (string | number)[]
let modelYear = pluck(taxi, ['model', 'year'])

let errorTest = pluck(taxi, ['model1', 'year'])

export default {}