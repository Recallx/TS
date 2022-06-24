
class Person { 
    age: number
    gender:string

    // 用constructor声明
    // constructor构造函数没有指定返回值
    constructor(age: number, gender:string) {
        this.age = age;
        this.gender = gender;
    }
}

const p = new Person(18,'男')
console.log(p.age,p.gender)
