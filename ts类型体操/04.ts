// 已经学习的类型标注的方法
// 字面量类型, 原始类型, 联合类型 | , 交叉类型 &, interface 接口, 对象类型, enum枚举, 函数类型, class类, 构造函数等
//  =====  ts内置类型 any, unknown, never ======


// any
let anyVal: any = ''

anyVal = 123
anyVal = true
anyVal = BigInt(121212)
anyVal = Symbol('any')
anyVal = undefined
anyVal = null
anyVal = {}
anyVal = { name: 'any' }

// 使用any, 从一定意义上讲就是放弃了类型推倒和类型检测

// unknown
let unknownVal: unknown = '1233'

unknownVal = 123
unknownVal = true
unknownVal = null
unknownVal = undefined
unknownVal = BigInt(1212)
unknownVal = Symbol('unknown')
unknownVal = {}

// unknown 可以定义任何类型, 但只能赋值给unknown和any

let tt1: string = unknownVal
let tt2: any = unknownVal
let tt3: undefined = unknownVal
let tt4: unknown = unknownVal

// never 类型, 就是没有任何类型的意义
// void有类型, 是空类型, 但是没有值, never是啥都没有

type unkown = 123 | 'abc' | string | void | never

function justThrowError() : never{
    throw new Error('error')
}

// 类型断言, 就是将已有的类型指定一个新类型  as newType
// 用类型断言纠正不正确的类型分析, 但大多数情况下不需要
interface IFoo {
    name: string;
  }
  
  declare const obj: {
    foo: IFoo
  }
  
  const {
    foo = {} as IFoo
  } = obj

// 双重断言
  
const str123: string = "linbudu";

(str123 as unknown as { handler: () => {} }).handler();