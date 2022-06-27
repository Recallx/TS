
class Point {
    x = 10
    y = 20

    scale(n: number): void {
        this.x *= n;
        this.y *= n;
    }
}

const c = new Point()

c.scale(10)

console.log(c.x,c.y)

