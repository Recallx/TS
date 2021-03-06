
/*
    映射类型基于旧类型创建新类型（对象类型），减少重复、提升开发效率
    1.映射类型是基于索引类型签名的，所以语法类似都有中括号 [ ]。
    2.通过[key in Type] 映射出来的新对象类型，和旧的结构是完全相同。除了类型不一定
    3.注意：映射类型只能在类型别名type中使用，不能在接口interface中使用。
*/

type PropType = 'x' | 'y' | 'h';

// key 是占位符,可以是任意名称，PropType 是需要映射的对象。后面是指定类型
type Type = { [key in PropType] : number }
