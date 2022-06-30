
/*
    Pick工具类型有两个类型变量：1表示选择谁的属性，2表示选择哪几个属性
    使用Pick构造出来的新类型，只可以选择第一个类型内存在的属性。
*/
interface Props { 
    name: string
    age: number
    saHi: ()=> void
}

type PickProps = Pick<Props, 'name' | 'age'>
// PickPros 里的属性，只有 name 和 age
let p: PickProps = {
    name:'hhh',
    age: 28
}