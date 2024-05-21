// 接口类型的联合与交叉

// 联合(具体到抽象的过程), 合并使赋值更抽象
let c1: 'a' | 'ab' | 'abc' | 'abcd' | string // ==> 最大是any类型 
// 交叉(抽象到具体的过程), 收敛使赋值更具体
let c2: '' & string & number & boolean // ==> 最小是never类型

interface Animal {
    id: string;
    weight: number;
}

interface Bird extends Animal {
    leg: string;
}

interface Horse extends Animal {
    height: number;
}
// 联合, 取交集
type T = Bird | Horse

// type Animal = Omit<T, never> // clone

let bird: Bird = {
    id: '1',
    weight: 1,
    leg : '1'
}
let horse: Horse = {
    id: '1',
    weight: 1,
    height: 1,
}

// 三种写法
let d1: T = horse
let d2: Animal = bird // ??
let d3: Bird | Horse = horse
let d4: Animal = {
    id: '1',
    weight: 1,
}

// 交叉, 取并集
interface Bird1 {
    id: string;
    weight: number;
    leg: string;
}
interface Horse1 {
    id: string;
    weight: number;
    height: number;
}


type T2 = Bird1 & Horse1
type BirdAndHorse = Omit<T2, never> // clone

class MyClass1 implements T2 {
    id!: string;
    weight!: number;
    leg!: string;
    height!: number;
}

class MyClass2 implements Bird1, Horse1 {
    id!: string;
    weight!: number;
    leg!: string;
    height!: number;
}

class MyClass3 implements BirdAndHorse {
    id!: string;
    weight!: number;
    leg!: string;
    height!: number;
}


