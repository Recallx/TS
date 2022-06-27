
// extends方法继承  js也支持
class Animal { 
    move(){
        console.log('跑起来')
    }
}
// 通过extends继承父类的方法
// 在class类里面赋值是用 = 
class Dog extends Animal {
    name = '旺财'
}
 
const d = new Dog()
// d.move()
// console.log(d.name)

// implements继承接口 只支持ts
interface Singale {
    sing(): void
    name: string
}
// 用implements继承接口，在继承的类里面要写一个与接口中的方法一样。
class Person implements Singale {
    sing(){
        console.log('张曼玉')
    }
    name = '黎明'
}

const a = new Person()

a.sing()
console.log(a.name)