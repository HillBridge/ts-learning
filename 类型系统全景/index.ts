
// 这个是对象字面量
const b1 = {
    id: 12,
    name: "张三",
    age: 25,
}
// 这个是对象
const bb1 = new Object(b1)

// type 和 interface
type User1 = { // User1 是别名, 1. 可以是对象字面量类型 {...} || {}  2. 匿名接口类型
    id: number;
    name: string;
    age: number;
}

interface User2  { // User2 是接口
    id: number;
    name: string;
    age: number;
}

// 对象字面量类型
const b2:{
    id: number;
    name: string;
    age: number;
} = b1


const b3: User1 = b1  // 对象字面量类型


const b4: User2 = b1 // 接口类型


// 接口是对象的表现, 所以说interface是type的一种表现形式

// implements 声明类的一个或多个接口

class MyUser implements User2 {
    id = 12
    name = "张三"
    age = 25
} 

interface Printable {
    print(): void;
    age: number
}

class Book implements Printable {
  age =  12
  print() {
    console.log("Printing book...");
    // 具体的打印逻辑
  }
}

type T1 = string | ''

// ****  1. 类型的分类总结   ******
// 基本类型(原始类型, 字面类型, 特殊类型) + 复合类型(函数类型, 对象类型, 类/构造器类型, 接口类型)
// 特殊类型、 字面类型 、原始类型 、 对象类型(对象、列表(数组,元祖)、函数)、接口类型
// ts独有(特殊类型、字面类型、接口类型), js+ts都有(原始类型(string, number, boolean...), 函数类型, 对象类型, 类/构造器类型)

// ****  2. 接口是对象的外观与表现: 实质表达的是对象的成员列表   ******