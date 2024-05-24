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


// === class 类  ====
// 构造函数 constructor、方法、 属性、存取器

// 类声明
class Bob {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    print(say: string): void{
        console.log(this.name+say)
    }

    get PropA():number{
        return this.age
    }

    set PropA(age: number) {
        this.age = age
    }
}

// 类表达式
const Bob2 = class {

    constructor(public name: string, private age: number) {
        this.name = name
        this.age = age
    }

    print(say: string): void{
        console.log(this.name+say)
    }

    get PropA():number{
        return this.age
    }

    set PropA(age: number) {
        this.age = age
    }
}

// class中的修饰符, public, private, projected, readonly
// public      此类成员在类, 类的实例, 子类中都能访问
// private     此类成员只能在类的内部被访问
// projected   此类成员只能在类和子类中被访问, 不能在类的实例中访问

// 静态成员 static  静态成员无法通过this来访问, 只能通过函数体访问, 说明静态成员是绑定在函数体上的, 并不是绑定到原型上的
// 静态成员只属于当前的这个类, 所以并不可以被继承, 只有在原型上的才可以继承


class Bob3 {
    static getName(name: string): string {
        return name+'yes'
    }

    say():void{} // 绑定到原型上
}

const bob1 = new Bob3()
// bob1.getName()
Bob3.getName('bridge')

// =====  class 类的继承
// 继承主要考虑子类对父类方法和属性的可访问性和覆盖操作

class Father { 
    print(){}
}

class Son extends Father {
    print(): void {
        // 1. 可以对父类中的方法进行覆盖
        // 2. 可以通过super调用父类中的方法
       super.print() 
    }
    // override 属性可以检测子类中的方法是否可以覆盖父类中的, 保证父类中有才可以覆盖
    override printA() {
        
    }
}

// abstract 抽象类, 描述这个类的结构
abstract class AbsFoo {
    abstract absProp: string
    abstract get absGetter(): string
    abstract absMethod(name: string): void
}
// interface 接口形式
interface AbsFooInterface {
     absProp: string
     get absGetter(): string
     absMethod(name: string): void
}

class Foo9 implements AbsFoo { 
    absProp = "foo";
    get absGetter() {
        return 'abstract'
    }
    absMethod(){
        console.log(this.absProp)
    }
}

class Foo99 implements AbsFooInterface { 
    absProp = "foo";
    get absGetter() {
        return 'abstract'
    }
    absMethod(){
        console.log(this.absProp)
    }
}