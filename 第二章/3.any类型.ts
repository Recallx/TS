
// any类型 不推荐使用any

// 除非临时使用any来避免写很长、很复杂的类型

let obj: any = {x:0}

// 错误使用，因为使用了any类型。所以代码不会提示错误
obj.bar = 500;
obj()

let a
a = 900