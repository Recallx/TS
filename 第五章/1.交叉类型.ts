
/*
交叉类型：类似于继承extends，用于组合多个类型为一个类型。
*/

interface Person { 
    name: string
    say(): number
}

interface Contet{
    age: number
}
// 一般常用语对象类型
// 组合多个类型为一个类型，使用一个 & 符号连接。
type PersonDetail = Person & Contet

let obj: PersonDetail = {
    name: '大傻刘',
    age: 22,
    say(){return 99}
}
console.log(obj)

/*
    交叉类型和接口继承extends 的区别
    相同点：都可以实现对象类型的组合
    不同点：两种方式实现类型组合时，对于同名属性之间，处理类型冲突的方式不同
*/

interface A {
    fn: (value: number) => string
}
// 使用extends继承里面的属性同名的话，就会报类型不兼容
// interface B extends A {
//     fn: (value: string) => string
// }

interface B {
    fn: (value: string) => string
}

type C = A & B

