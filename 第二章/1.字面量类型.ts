

// let 声明变量可以是任意字符串，所有类型是string
let str1 = 'Hello'
// const 声明变量他的值不能变化，所以它的类型为'Hello'
const str2: 'Hello' = 'Hello'

function changeDirection(direction: 'up' | 'down' | 'left' | 'right'){}

changeDirection('left')