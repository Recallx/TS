console.log(typeof "hellow world")

// typeof （类型查询）
// typeof只能查询对象属性类型或者变量类型，不能查询函数调用的类型。
let p = {x: 1, y: 2}

function formatPoint(amt: typeof p){}
formatPoint({x:500 , y:200})

let num: typeof p.x
