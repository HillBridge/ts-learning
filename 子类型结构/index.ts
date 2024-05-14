// js中的基本数据类型
const s1: string = '123'

const s2: number = 123 // typeof s2 === 'number'

const s3: boolean = true

const s4: undefined = undefined
const s5: null = null
const s6: symbol = Symbol()

const bigInt: bigint = 1n // 代表更大的值, 而不失精度

let s7: string = ''


// 字面类型
const s8: 'abc' = 'abc' 
let s9: 'abc' = 'abc' 

// 包装类类型=====> 字面类型可以赋值给包装类类型
let str1: string = 'hhh'
let num1: number = 123
let s10 = new String('hhh')

s10 = s9

// str1.toString() == String(str1).toString() == ( new String(str1)).toString()

// 子类类型
class StringEx extends String { }

let s11 = new StringEx('ok');

s10 = s11 // s11是子类, 可以赋值给父类, 祖先类

// empty类型

interface Empty { }
//type Empty = {}

const s12: {} = s9

// 对象字面类型
const obj1: {
    name: string;
    age: number;
} = {
    name: 'qiao',
    age: 12
}

const aa: string = 'aa'
const bb: string = aa



// ****
// 值类型(字面类型) ==> 原始类型 ===>  包装类类型  ===> 父类/祖先类 ===> 根类型 empty{}
// 字面对象类型  ====>  对象类型 ===>  Object类/接口


// ts三大类型
// 1. 特殊类型
// 2. 字面类型(就是js的基本数据类型,值类型)
// 3. 接口类型(interface/type) ==> 对象, 函数, 类, 构造类型
// **** 