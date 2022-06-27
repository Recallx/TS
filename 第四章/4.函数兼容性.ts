
// 参数个数   参数类型  返回值类型

// 参数个数，参数多的兼容参数少的。
// 在js中省略用不到的函数参数很常见，促成了TS中函数类型之间的兼容性。
// 1.函数参数
type F1 = (a:number)=> void

type F2 = (a: number,b: number) => void

let f1: F1
let f2: F2

f2 = f1

// 2.参数类型
// 参数类型是普通类型的时候，只要类型相同就可以
type F4 = ( a: number ) => void
type F5 = ( a: number ) => void

let f4: F4
let f5: F5

f4 = f5

// 参数类型是对象的时候，参数少的可以赋值参数多的。
interface Point2D { x: number; y:number }
interface Point3D { x: number; y:number; z:number }
type F6 = (p: Point2D) => void
type F7 = (p: Point3D) => void

let f6: F6
let f7: F7

f7 = f6

// 3.函数返回值
// 只要类型一样，按函数规则。成员多的赋值给成员少的。
type F8 = () => string
type F9 = () => string

let f8: F8
let f9: F9

f8 = f9

type F10 = () => { name:string}
type F11 = () => { name:string; age:number}

let f10: F10
let f11: F11

f10 = f11

