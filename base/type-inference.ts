//  通用类型推论

let aa = [0, 1, false];

aa = ['a', undefined, null, 1]

// 默认情况下 undefined 和 null 是所有类型的子类型, 除非使用 strictNullChecks

class Animals {

}

class Rhino {

}

class Elephant {

}

class Snake {

}

let zoo = [new Rhino(), new Elephant(), new Snake()];


// 上下文类型
// noImplicitAny

window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button);
};

function createZoo(): Animals[] {
  return [new Rhino(), new Elephant(), new Snake()];
}

function createZoo2() {
  return [new Rhino(), new Elephant(), new Snake()];
}