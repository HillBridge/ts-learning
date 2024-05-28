// 类型安全保障

// 类型查询操作符：熟悉又陌生的 typeof

const uu1 = "linbudu";

const uu2 = { name: "linbudu" };

const uu3 = null;
const uu4 = undefined;

const uu5 = (input: string) => {
  return input.length > 10;
}

const uu6 = 123

const uu7 = Symbol('uu7')

type UU1 = typeof uu1
type UU2 = typeof uu2
type UU3 = typeof uu3
type UU4 = typeof uu4
type UU5 = typeof uu5
type UU6 = typeof uu6
type UU7 = typeof uu7

const func = (input: string) => {
    return input.length > 10;
  }
  
  const func2: typeof func = (name: string) => {
    return name === 'linbudu'
  }


const isInputValid = (input: string): boolean => {
    return input.length > 10;
  }
  
// 不允许调用函数
let isValid: typeof isInputValid
// let isValid: typeof isInputValid("linbudu");

// 类型守卫 in

interface Foo {
    foo: string;
    fooOnly: boolean;
    shared: number;
}

interface Bar {
    bar: string;
    barOnly: boolean;
    shared: number;
}

type Com = Foo | Bar;
type Com2 = Omit<Com, never>

function handle(input: Com) {
    if ('foo' in input) {
        input.fooOnly;
    } else {
        input.barOnly;
    }
}



function handle2(input: Com) {
    if ('shared' in input) {
      // 类型“Foo | Bar”上不存在属性“fooOnly”。类型“Bar”上不存在属性“fooOnly”。
      input.fooOnly;
    } else {
      // 类型“never”上不存在属性“barOnly”。
      input.barOnly;
    }
}
  
interface Foo {
    kind: 'foo';
    diffType: string;
    fooOnly: boolean;
    shared: number;
  }
  
  interface Bar {
    kind: 'bar';
    diffType: number;
    barOnly: boolean;
    shared: number;
  }
  
  function handle1(input: Foo | Bar) {
    if (input.kind === 'foo') {
      input.fooOnly;
    } else {
      input.barOnly;
    }
  }

  // 接口的继承 extends

  interface Struct1 {
    primitiveProp: string | number;
    objectProp: {
      name: string | number;
    };
    unionProp: string | number | boolean;
  }
  

  interface Struct2 extends Struct1 {
    // “primitiveProp”的类型不兼容。不能将类型“number”分配给类型“string”。
    primitiveProp: number;
    // 属性“objectProp”的类型不兼容。
    objectProp: {
        name: null; // 继承后自定义已存在的属性不可以, 不可以覆盖父级中的属性类型
        age: string; // 可以继承后增加新属性
    };
    // 属性“unionProp”的类型不兼容。
    // 不能将类型“boolean”分配给类型“string | number”。
    unionProp: boolean;
}

// 接口继承类型别名, 规则一致, 不能覆盖父类中的类型
type Base = {
    name: string;
};

interface IDerived extends Base {
    // 报错！就像继承接口一样需要类型兼容
    name: number;
    age: number;
}

// 接口的合并, 其实就是交叉

interface IBase {
    name: string;
  }
  
  // 合并后的 name 同样是 never 类型
  type Derived = IBase & {
    name: number;
  };

type P = Omit<Derived, never>  // never