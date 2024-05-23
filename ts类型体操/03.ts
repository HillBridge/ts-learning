// 类型标注总结
// 字面量类型
// 原始类型 string, number, boolean, bigint, symbol, null, undefined, unknown, never
// 对象类型 object, Object, {}
// 接口类型 interface type
// ============= 函数类型 和 class类 构造器

function baz(name: string): number {
    return name.length
}

const bax = function (name: string): number {
    return name.length
}

const bab = (name: string): number => {
    return name.length
}

const bab2 : (name: string) => number = (name) => {
    return name.length
}
// 类型别名
type TypeBab3 = (name: string) => number 

const bab3: TypeBab3 = (name) => {
    return name.length
}

// 函数返回无返回值
function bay(): void{ }
const bay2 = (): void => { }

// 函数的可选参数

function taz(name: string, age?: number){
    const _age = age || 18
    if (_age > 18) {
        console.log(name+'成年了')
    }
}

function taz2(name: string, age: number = 18) {
    if (age > 18) {
        console.log(name+'成年了')
    }
}

// tuple 特殊的array
function taz3(name: string, ...args: [number, boolean]) {
    
}

taz3('bridge', 12, true)


function taz4(name: string, ...args: any[]) {
    
}
taz4('bridge', 12, true, 10, null, undefined)

type TypeGun = number | string // 类型声明, 联合类型

// 多组参数类型和返回值类型
function gun(name: string, male: boolean): TypeGun {
    if (male) {
        return name
    } else {
        return 555
    }
}

gun('bridge', true)

// 函数的重载签名
function gunOverload(name: string, male: true): string // 重载签名一, 更细致说明了当male参数为true的时候返回字符串类型
function gunOverload(name: string, male?: false): number // 重载签名二, 更细致地说明了当male参数为false或不传时返回number类型
function gunOverload(name: string, male?: boolean): string | number { // 函数的实现签名, 包含所有重载签名的所有情况
    if (male) {
        return name
    } else {
        return 555
    }
}