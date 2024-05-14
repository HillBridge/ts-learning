// 联合类型 就是数学中的并集

const a1: number | string = ''

const a2: 'a' | 'b' | string = '' // ==> 会进行类型合并, 由具体 => 抽象(小=>大), 最大最极端就是 any类型

// 交叉类型 就是数学中的交集

let a3: 'a' & string // ==> 'a'

let a4: string & number  // ==> never

// 特殊类型  any | never | void | unknown
const a5: any = ''
let a6: never  // 代表无值
const a7: any = {}
let a9: string = ''

const a10: string | number | any = {}

let a11: string & never 

function bar() : void{
    return undefined
}
// 赋值的兼容性
// 1. 自身可以永远赋值给自身
// 2. never可以赋值给任何类型, 但只能被any和never赋值
// 3. undefined可以和void兼容
// 4. 子类型兼容还是结构性兼容, 最终在概念上都统一成[赋值兼容性]  *****
