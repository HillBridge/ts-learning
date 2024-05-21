type T9 = {  // 对象方式
    (s: string): void
    (n: number): void
}

interface IFoo {  // 接口方式
    (s: string): void
    (n: number): void
    a: string
}


let f1: T9 = function () { };  // 匿名函数
let f2: () => void= () => {};        // 箭头函数
let f3: IFoo = (function () { }) as any;   

// f3.a

function foo(s: string): void // 重载方式
function foo(n: number): void
function foo(...args: any[]): any {  //  具名函数
   
}

foo.a = '123'

foo('11')
foo(11)


class MyClass {  // 类 构造器
    static a: string = 'a'; // 静态属性作为存储, 相当于绑在类上
    b: number = 100  // 实例上调取

    constructor(s: string)
    constructor(n: number)
    constructor() {
        
    }

    foo(s: string): void
    foo(n: number): void
    foo() {

    }
}

const m1 = new MyClass('foo')

// MyClass.a

// m1.b