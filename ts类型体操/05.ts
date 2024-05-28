// 类型别名 type
// 类型别名主要是对一组类型或某一个特定类型进行封装, 以方便在不同地方进行复用
type T01 = string

const str001: T01 = '123'
const str002: T01 = '456'
const str003: T01 = '789'


type StatusCode = 200 | 201 | 401 | 400 | 403 | 500

const res001: StatusCode = 200


type ResMsg = string | boolean | 'success' | 'error'

const resMsg001: ResMsg = 'success'


type Handler = () => void

const fn001: Handler = () => { }
const fn002: () => void = () => { }


type Objtype = {
    name: string,
    age: number,
}

const user001: Objtype = {
    name: 'bridge',
    age: 20
}

// 类型工具
type Factory<T> = T | string

const str004: Factory<123> = 123
const str005: Factory<any> = true

type MaybeNull<T> = T | null

function fn005(input: MaybeNull<{handler: () => {}}>) {
    input?.handler()
}

type MaybeArray<T> = T | T[]

function ensureArray<T>(input: MaybeArray<T>): T[] {
    return Array.isArray(input) ? input : [input];
}

interface NameStract  {
    name: string
}

interface AgeStract  {
    age: number
}

type ProfileStract = NameStract & AgeStract

const profile: ProfileStract = {
    name: 'profile',
    age: 20
}

type T009 = string & number // never


type Stract1 = {
    name: string,
    love: {
        label: string
    }
}

type Stract2 = {
    name: number,
    love: {
        count: number
    }
}


type Composed = Stract1 & Stract2

type StractName = Composed['name']

type StractLove = Composed['love']

// const oo1: StractName = '123'
const oo2: StractLove = {
    label: '123',
    count: 1
}

// 联合类型只要符合任何其中一种类型就行 |
// 交叉类型必须严格符合所有类型 &


// 索引类型
//  ====== 索引签名类型  ===》 声明  [索引类型声明]


// 键值类型一致

interface AllType1 {
    [key: string]: boolean,
}


type AllType2 = {
    [key: string]: number | boolean,
    male: boolean
}

const oo3: AllType1 = {
    name: true
}

const oo4: AllType2 = {
    age: 123,
    111: 122,
    [Symbol('123')]: 123,
    male: false
}

type PropType1 = AllType1['name']

type PropType2 = AllType2['name']

// 索引签名类型一个常用的场景就是在重构javascript时, 为内部属性较多的对象声明一个any索引签名类型
type AllType3 = {
    [key: string]: any
}

const oo5: AllType3['name'] = 'any value'

//  ===== 索引类型 查询 ======
interface F  {
    name: string,
    599 :1
}

type FKeys = keyof F & {} // 查询完进行交叉取值, 最终得到合并后的类型, 通过type来判断类型

type FKeys2 = keyof any // 查询完进行类型赋值, 通过type 来判断类型

// ==== 类型索引 访问 ====  类似于 obj[expression] 

interface NumberRecord {
    [key: string]: number
}

type FF = NumberRecord[string] // 访问和返回都是类型

// 对面字面量多形式访问
interface NumberRecord2 {
    propA: string
    propB: number,
    propC: boolean
}

type FF2 = NumberRecord2['propA']
type FF3 = NumberRecord2['propB']
type FF4 = NumberRecord2[keyof NumberRecord2] // keyof 来查询值, 然后用得到的值来获取新的类型


interface NumberRecord3 {
    propD: string | symbol,
    // [key: string]: number | string
}

type FF5 = NumberRecord3['propD']

// 映射 K in T 
type stringify<T> = {
    [K in keyof T]: string
}

interface User55 {
    name: string
    age: number
    ask: () => void
}

type Stringified = stringify<User55> // 将所有key映射出来, 将所有键值专程string类型

interface User55ToString  {
    name: string;
    age: string;
    ask: string;
}

// clone 对象类型的方法|函数
type Clone<T> = {
    [K in keyof T]: T[K]
}

type C2 = Clone<User55>