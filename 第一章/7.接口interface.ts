
// 类型别名type 和 接口interface 的区别
/* 
相同点：都可以给对象指定类型

不用点：
    接口interface，只能为对象指定类型
    类型别名type，不仅可以为对象指定类型，实际上可以为任意类型指定别名 不一定是对象。
    使用类型别名type 后面要加 = 号
*/

// 通过interface 自定义名 + {}
interface IPerson {
    name: string
    age:number
    sayHi():void
}

// 作用：达到复用的目的。
let person1: IPerson = {
    name:'小明',
    age: 20,
    sayHi() {},
}

let person2: IPerson = {
    name:'红火火',
    age: 28,
    sayHi() {},
}

// 接口继承 
/*
    两个接口之间有相同的属性或方法，可以将公共的属性或方法抽离出来。通过extends来实现复用  
*/

interface Poin1 { x:number; y:number}

// extends 继承Poin1属性
interface Poin2 extends Poin1{ l:number }

let p3: Poin2 = {
    x:1,
    y:2,
    l:3
}