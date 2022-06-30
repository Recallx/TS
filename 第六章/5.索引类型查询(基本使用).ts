
/*
    T[P]语法，在TS中叫做索引查询（访问）类型
    作用：用作查询属性的类型
*/
type Props = {a:number; b:string; c:boolean}

// 在中括号中查询 b，返回的是b的指定类型。
// 注意：查询的属性一定要存在对象当中，不然会报错
type myNum = Props['b']
