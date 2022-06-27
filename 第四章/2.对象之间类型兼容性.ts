
// 简单来说（多的成员赋值少的）
// 多成员的属性可以赋值给少成员的
class Point { 
    x: number
    y: number
}
class Point2D{
    x: number
    y: number
}

const p: Point = new Point2D()

class Point3D {
    x: number
    y: number
    z: number
}

const p1: Point = new Point3D()