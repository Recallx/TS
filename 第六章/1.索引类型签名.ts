
/*
    索引类型签名
    使用场景：当无法确定对象中哪些属性（或者说对象中可以出现任意多个属性），此时，就用到索引签名类型了。
*/

interface AnyObject { 
    // key是占位符，可以是任意名称
    [key: string]: number
}

let obj: AnyObject = {
    
}
