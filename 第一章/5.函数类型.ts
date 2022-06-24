

// 1.普通函数
// 函数的类型指的是：为函数的参数和返回值定义类型
function add(num8: number,num9: number): number {
    return num8 + num9
}

// 2.箭头函数
const fun = (num5:number , num6:number):number =>{
    return num5 + num6
}

// console.log(fun(3,10))


// 3.同时指定参数和返回值的类型
type funType = (num3: number, num4: number) => number

const add1: funType = (num1, num2) =>{
    return num1 + num2
}

// console.log(add1(8,8))


// 4.函数的void类型 void代表函数的return为空 不需要返回值
// void是ts新增的
function greet(name:string): void {
    // 函数内部没有return返回值，就设置void
    console.log(name)
}

// greet('森岛帆高')



// 5.函数可选参数
// 作用：函数的参数可传可不传
// 怎么用：在:前面添加?即可
// 注意：必须参数必须在可选参数前面 ！
function graat(start?: string,end?: string):void {
    console.log(start,end)
}

graat()
graat('开始了')
graat('开始了','结束了')