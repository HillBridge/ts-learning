// 基本标注 所有有name声明或引用变量的地方
const x1: number = 1
let x2: number = 2
var x3: number = 3

function foo(s: string, b: boolean): number {
    return 1
}

class Foo {
    ask(type: string) : number{
        return 1
    }
}

// import

//=================
// 断言标注(隐式)
// 所有表达式后面都可以用as隐式来标注类型

const res = foo('bar', true) as number

const res2 = 123 as const // const 类型就是字面类型

const res4 = 4 as any

// 类型标注的原则
// 1. 尽量清晰
// 2. 尽量少标注, 能推断出来的尽量不标注
// 3. 尽量少使用as断言标注方式
