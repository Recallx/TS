

// 给对象内部的值指定类型
// 在函数名后面添加 { } 里面的类型结束用;
let person: {
    nume: string
    age: number
    sayHi(): void
    gerrt(name:string): void
} = {
    nume:'木头',
    age: 18,
    sayHi() {},
    gerrt(name){}
}

// 对象的属性或方法，设置为可选属性 添加 ? 即可
function myAxios (config: { url:string; method?: string }){}

myAxios({url:'123'})