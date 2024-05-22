// 比原始类型更具体的类型, 字面量类型
// 字面量类型包括, 字符串字面量类型 数字字面量类型, 布尔值字面量类型, 对象字面量类型

const w1: 123 = 123
const w2: 'bridge' = 'bridge'
const w3: true = true

const w4: string = 'bridge'
const w5: number = 123
const w6: boolean = true
const w7: { name: 'zs' } = { name: 'zs' }

interface ResT {
    code: number;
    msg: string
}
// 接口即文档
interface ResT2 { 
    code: 10000 | 10001 | 20000
    msg: 'success' | 'failure'
}

let obj2!: ResT2 

type Tq = Omit<ResT2, never>


declare var res1: ResT2

// res1.code 
// 类型别名 type
type Code = 10000 | 10001 | 20000
type Msg = 'success' | 'failure'


// 枚举  字符串枚举成员仍然只会进行单次映射
enum PageUrl {
    home_page = 'xxx_home',
    news_page = 'xxx_news'
}

PageUrl.home_page // 用枚举替换对象可以带来更好的类型提示

// 常量枚举 
const enum Nums {
    foo,
    bar 
}

enum Page {
    foo, // 默认值赋值 0
    bar  // 默认值赋值 1
}
// 枚举是双向的, 对象只能通过键得到值, 而枚举既可以通过下标方式得到键, 也可以通过键得到值
Page.foo // 得到值为0
Page.bar // 得到值为1

Page[0] // 得到key foo
Page[1] // 得到key bar

// 对象

const Obj = {
    home_page: 'xxx_home',
    news_page: 'xxx_news'
}