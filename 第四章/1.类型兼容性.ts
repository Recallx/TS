

/*
 两种类型系统：1.Structural Type System（结构化类型系统）
              2.Nominal Type Ststem（标明类型系统）
 TS采用的是结构化类型系统，也叫做duck typing（鸭子类型）
 对于对象类型来说，y的成员至少与x相同，则x兼容y（成员多的可以赋值给少的）
*/

class Ponint {
    x: number
    y: number
}
class Ponint2 {
    x: number
    y: number
}

const p: Ponint = new Ponint2()
