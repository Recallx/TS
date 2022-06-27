
/*
    泛型可以在保证类型安全前提下，让函数等与多种类型一起工作，从而实现复用，常用于：函数、接口、class中。
    在调用函数时指定类型，就可以了
*/
// 函数名后面通过 <Type> 占位符
function id<Type>(value: Type): Type{
    return value
}

// 在调用函数的时候传入指定类型
// 1.传入number类型
const num = id<number>(50)
// 2.传入string类型
const str = id<string>('哈哈哈')
