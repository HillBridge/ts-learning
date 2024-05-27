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
