
/*
    数组其实是泛型接口
*/

let str = ['1','2','3']
// 使用数组时，TS会识别我们的数组类型，然后推断出item的类型。
str.forEach((item) =>{})

let nums = [1,2,3]

nums.forEach((item) =>{})
