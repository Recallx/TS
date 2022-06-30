
/*
    Record<Keys,Type>工具类有两个属性，第一个表示对象有那些属性，第二个表示对象属性的类型
*/

type RecordObj = Record<'a' | 'b' | 'c', number[]>

let obj: RecordObj = {
    a: [1],
    b: [5],
    c: [9]
}
