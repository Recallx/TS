
/*
    Partial可以将一个必传参数版本的类型，转成可选类型的版本。
*/
interface Props {
    name: string
    childerm: number[]
}
// 使用partial关键字，后面传入要改变的版本
type PartialProps = Partial<Props>

// Props是必选版本
let p: Props = {
    name:'',
    childerm: [1]
}

// 经过partial转换之后，变成一个可选类型的版本
let p1: PartialProps = {
    name: '哈哈哈'
}
