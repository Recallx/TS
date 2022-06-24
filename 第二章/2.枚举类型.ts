
// 枚举类型 类似于字面量类型+联合类型组合的功能
// 枚举关键字enum

// 枚举成员可以设置值，后面的成员会自增长+1
enum Direction { 
    up = 20,
    Down,
    left = 50,
    right
 }

 function changeDirection (direction: Direction){

 } 

//  访问枚举成员要用.枚举里面的属性
 changeDirection(Direction.left)


//  字符串枚举 成员必须都要设置初始值
// 字符串枚举没有自增长行为，所以必须设置值
enum Direction1 { 
    up = '上',
    Down = '下',
    left = '左',
    right = '右'
 }

//  枚举编译成js代码，并相对应的赋值给对象里面的值