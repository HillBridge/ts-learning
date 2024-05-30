// 类型别名中的泛型

type Factory22<T> = T | number | string;

type M1 = Factory22<boolean>

interface Obj2  {
    name: string; 
    age: number
}

type Clone3<T> = {
    [K in keyof T]?: T[K]
}

type M2 = Clone3<Obj2>

// 条件类型
type IsEqual<T> = T extends true ? 1 : 2

type M3 = IsEqual<false>

type M4 = IsEqual<true>

type M5 = IsEqual<'aaa'>

// 泛型约束与默认值

type Factory44<T = boolean> = T | string | number 


type M6 = Factory44


type ResStatus<ResCode extends number> = ResCode extends 10000 | 20000 | 200001 ? 'success' : 'error'

type M7 = ResStatus<10000>

type  M8 = ResStatus<30000>

type M9 = ResStatus<'30000'>

// 多泛型关联
type Conditional<Type, Condition, TruthyResult, FalsyResult> =
    Type extends Condition ? TruthyResult : FalsyResult;
  

type M10 = Conditional<'abc', string, 'yes', 'no'>

type M11 = Conditional<'abc', boolean, 'yes', 'no'>