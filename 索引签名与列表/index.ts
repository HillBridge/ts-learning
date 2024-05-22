interface T8 {
    [key: string | symbol | number | 12]: string;
}

// 可以用type查看类型
type v1 = Omit<T8, never>



type Arr1 = string[]
type Arr2 = Array<string>

let arr1: string[] = []

let arr2 = []


type Tx = [number, string]

let tu1!: Tx