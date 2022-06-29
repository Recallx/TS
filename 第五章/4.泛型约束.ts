
/* 添加泛型约束：1.指定更加具体的类型。
                2.添加约束
*/
interface Ilength { length: number }
// 通过 extends 关键字进行约束
function id<Type extends Ilength>(value: Type): Type{
    console.log(value.length)
    return value
}

// 传入带length属性的实参都可以
id(['1','2',3])
id('123345')
id({length: 6, name:'jack'})