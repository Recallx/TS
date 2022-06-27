
/*
class类中可以继承
三个关键字 

public（公有的） 可以被任何地方访问
protected（守保护的）仅对其声明所在的类和子类中（非实例对象）可见。
private（私有的）

如果不想类中的某个方法被继承，可以通过设置private关键字设置为私有的
*/
// 1.class类中默认是公开的
class Animal {
    public move(){
        console.log('跑起来')
    }   
}
class Dog extends Animal {}
const d = new Dog()
d.move()

// 2.protected 受保护
class Animal1 {
    protected move(){
        console.log('飞起来')
    }
    run(){
        this.move()
    }   
}
// 在子类中可以在方法里面通过this调用父类的方法
class Dog1 extends Animal {
    back(){
        this.move()
    }
}
// new 出来的实例是访问不到move的，只能在( 类本身或者继承的子类的方法 )里面通过this调用move
const c = new Dog1()
c.move()

// 3. private 私有的
// 只能在当前类中的方法通过this访问
class Animal2 {
    private run(){
        console.log('私有的')
    }
}

class Dog2 extends Animal2 {
    back(){}
}
// 在任何实例中都是访问不到的。
const r = new Dog2()
