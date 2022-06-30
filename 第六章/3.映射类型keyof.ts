
/*
    映射类型keyof的使用
    映射类型除了联合类型之外，还可以根据对象类型来创建
*/

type Props = { a: number; b: string; c: string }

// 在key in 后面使用keyof，就可以映射是对象类型。
type obj = { [key in keyof Props]: number }
