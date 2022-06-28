
// 原理是一样兼容，接口和class类之间可以互相兼容
// 多成员的属性可以赋值给少成员的
interface Point { 
    x: number
    y: number
}

interface Point2D{
    x: number
    y: number
}

interface Point3D{
    x: number
    y: number
    z: number
}

let c1: Point
var c2: Point2D
let c3: Point3D

// c1 = c2

// 接口和类也可以兼容
class Point4D { 
    x: number
    y: number
    z: number
}

c2 = new Point4D()
