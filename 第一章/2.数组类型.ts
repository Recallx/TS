

// 特点：对象类型，在ts中更加细化，每个具体的对象都有自己的类型语法。

// 数组类型 两种写法

// 第一种 设置为number，数组里面的值要为数字类型
let number: number[] = [1,2,3]

let strings: string[] = ['1','2','3']

// 第二种
let arr: Array<number> = [1,2,3]

console.log(number)
// 一般推荐使用第一种写法