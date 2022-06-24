

// 类型推论
let age = 18;

function add(num1:number,num2:number){
    return num1 + num2
}

add(5,5)

// 类型断言
// 通过  as  指定类型
// 解决ts中获取类型不准确的问题
const aLink = document.getElementById('link') as HTMLAnchorElement;
aLink.href
