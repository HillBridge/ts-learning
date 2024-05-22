const q1: string = ''
const q2: number = 0
const q3: boolean = false
const q4: undefined = undefined
const q5: null = null
let q6: never
let q7: unknown
const q8: bigint = BigInt(12123434)
const q9: symbol = Symbol('q9')
const qobj: object = {name: 12}
const void_v1: void = undefined
// const void_v2: void = null

function fn1(): void {

}

// array 和 tuple
const q_arr1: readonly string[] = []
const q_arr2: Array<string | number> = [12, 2]
const q_tuple1: [string, string] = ['a', 'b']
const q_tuple2: readonly [number, string, boolean] = [112, 'aa', true]
const q_tuple3: [number, string?, boolean?] = [112]

// q_tuple1[3]
// q_tuple2[2] = 12
// q_arr1.push('a')

type Tuple3Len = typeof q_tuple3.length  // type可用来查看具体类型等

// 具名元祖 帅滴狠
const q_tuple4: [name: string, age: number, isBoy: boolean] = ['bridge', 23, true]

const [name1, ...other] = q_tuple4

// 对象和接口类型
// 对象和类可以用interface接口类型来描述, 当然用type类型别名也可以, 除此之外可以用type

// 可选修饰符 ?
// 只读修饰符 readonly

interface User {
    readonly name: string,
    age: number,
    male?: boolean,
    work?: Function
}

const bridgeObj: User = {
    name: 'bridge',
    age: 12,
    male: true
}

const vv1 = bridgeObj.male

bridgeObj.work = function () { }

// bridgeObj.name = 'jack'

type UserType = {
    readonly name: string,
    age: number,
    male?: boolean,
    work?: Function
}

// object Object {} 三者区别

const o1: object = {name: 'zs'}
const q11: Object = 'bridge'
const q12: Object = 12
// const q13: Object = undefined
// const q14: Object = null
const q15: Object = true


let q16: {} = 'stirng'
const q17: {} = {name: 'zs'}

q16 = 12
// q17.name = '123'

// object Object {} 三者使用总结
// 在任何是否都不要用Object以及类似的装箱类型
// 尽量少使用{}来标注类型
