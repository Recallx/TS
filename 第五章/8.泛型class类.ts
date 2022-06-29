
/*
    class类也可以使用泛型定义类型
*/
class GenericNumber<NumType> {
    defaultValue: NumType
    add: (x:NumType, y:NumType) => NumType
    
}
/* 在上方的类中，没constructor构造函数用到NumType的类型变量。 
   在实例化调用的时候，ts就会识别不出实例的类型。为unknown未知。
   这种情况手动指定number类型，是比较好的。
*/
const myNum = new GenericNumber<number>()
myNum.defaultValue = 10

// 第二种情况
/* 
    在class类中有constructor构造函数用到NumType的类型变量。
    并且赋值给类中的属性，在调用的时候就不需要手动传入类型。
    ts会帮我们推断出传入的类型
*/
class GenericNumber2<NumType> {
    defaultValue: NumType
    add: (x: NumType, y: NumType) => NumType

    constructor(value: NumType){
        this.defaultValue = value
    }
}

const myNum2 = new GenericNumber2(100)
myNum2.defaultValue = 10