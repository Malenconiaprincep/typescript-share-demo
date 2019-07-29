// 1.对象属性类型

interface Student {
  username: string
  age: number
  hobby?: string
  readonly sex: string
  [propName: string]: any
}

function CreateStudent(props: Student) {

}

CreateStudent({ username: 'test', age: 12, sex: 'man'})
CreateStudent({ username: 'test', age: 12, sex: 'man', hobby: 'aa'})



// 2.函数类型

// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
// mySearch = function(source, subString) {
//   let result = source.search(subString);
//   return result > -1;
// }




// 3.可索引类型  


// 3.1 数字

// interface StringArray {
//   [index: number]: string;
// }

// let myArray: StringArray;
// myArray = ["Bob", "Fred"];

// let myStr: string = myArray[0];



// 3.2 字符串



// interface StringArray1 {
//   [index: string]: string;
// }

// let myData: StringArray1
// myData = {
//   "1": 'a'
// }