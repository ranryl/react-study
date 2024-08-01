// number、string、boolean、any、unknown
// void 空值、undefined
// 字面量：其本身
// never 没有值，不能是任何值
// object、array
// tuple ts新增类型、固定长度数组
// enum 枚举


// 直接使用字面量进行类型声明
// 只能等于10
let f: 10;

f = 10;

// | 限制多个字面量
let bb: 'male' | 'female'

bb = 'male'
bb = 'female'

// 联合类型，可以是多个类型
let cc: boolean | string

cc = true;
cc = 'hello';

// 设置为any后，相当于对该变量关闭了ts的类型检测
// 显示 any
let dd: any;
// 隐式 any
let ee

dd = 10;
dd = "hello";
// unknown 未知类型
let ff: unknown
ff = 10;
ff = "xxxx";
// any可以把值赋值给其他类型变量
// unknown不能直接把值赋值给其他变量
let gg: string
//gg = ff
// 类型判断
if (typeof ff === "string") {
    // 不报错
    gg = ff;
}
// 类型断言
gg = ff as string // 写法1
gg = <string>ff; // 写法2

function fn() :void {
    // return undefined
    // return null
    // return ""
}
// never 表示永远不会返回结果
function fn2() :never{
    throw new Error(""); // 报错、永远不会有返回值
}

let a03: object;
a03 = {};
a03 = function() {}

// {} 用来指定对象中可以包含哪些属性
// 属性后面加？，表示是可选
let b03: {name: string, age?: number}
b03 = {name: "hh"};

// [propName: string]: any 白哦是任意类型的属性
let c03: {name: string, [propName: string]: any}
c03 = {name: "xxx", age: 10, sex: "男"}

// 设置函数结构的类型声明
// 语法：（形参:类型, 形参:类型） => 返回值
let d03: (a: number, b: number) => number
d03 = function(n1: number, n2: number) :number {
    return n1+n2
}

// 数组的类型声明
// 1. 类型[]
// 2. Array<类型>
let e03: string[];

let g03: Array<number>
g03 = [1, 2, 3]

let f03: Array<any>

// tuple 元组: 固定长度数组
// [类型, 类型, ...]
let i03: [string, string];
i03 = ['hello', 'abc'];
// i03 =['hello', 123]
// 枚举
enum Gender {
    Male = 1,
    Female,
}
let i: {name: string, gender: Gender}
i = {name: 'xxx', gender: Gender.Male, }

// 类型即是也是
let j: string & number
let k: {name: string} & {age: number}
k = {name: 'xxx', age: 18}

// 类型别名
type myType = 1 | 2 | 3 | 4 | 5
let l : myType
let m: myType