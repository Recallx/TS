
/*
    Readonly构造出来的版本为只读，不可以修改。
*/
interface Props { 
    name: string
    childrn: string[]
}

type ReadonlyProps = Readonly<Props>

// 无法重新声明
