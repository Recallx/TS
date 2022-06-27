
// 通过readonly关键字表示自读
// 作用：用来防止在构造函数之外对属性进行赋值
// 注意：只能修饰属性不能修饰方法

// 只要是 readeonly 来修饰的属性，必须手动提供明确的类型
class Person { 
    readonly age:number = 18
    constructor(age: number){
        this.age = age
    }

    // setAge(){
    //     this.age = 20
    // }
}
const a = new Person(18)

// interface 和 {} 也可以用 readonly 设置只读属性
interface IPerson { 
    readonly name: string
}

let obj: IPerson = {
    name: 'jack'
}

let obk: { readonly name: string } = {
    name: 'jack'
}