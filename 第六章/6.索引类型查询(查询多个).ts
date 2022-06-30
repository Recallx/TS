
/*
    使用索引查询是查询多个类型
    当我们查询对象中的类型，如果有重复的类型。TS会自动帮我们去重。
*/
type Props = {a: number; b: number; c: boolean}

// 单独查询某些类型
type TypeA = Props['a' | 'b']

// keyof 查询全部类型
type TypeB = Props[keyof Props]
