

declare module 'foo' {
    // 因为 jquery 使用的是 commonjs module，所以需要用 export 导出
    // es6 module 可以使用 export default 导出
    // export = Foo;
    export const name: string;
    export function getName(): string;
    export class Animal {
        constructor(name: string);
        sayHi(): string;
    }
    export enum Directions {
        Up,
        Down,
        Left,
        Right
    }
    export interface Options {
        data: any;
    }
}