
interface Shape {
  area(): number
}

class Rectangle implements Shape {
  constructor(
    public height: number,
    public width: number,
  ) { }

  public area(): number {
    return this.width * this.height
  }
}

class Circle implements Shape {
  constructor(
    public radius: number,
  ) { }

  public area() {
    return 3.1416 * (this.radius ** 2)
  }

}


class Wall {
  constructor(
    public color: string,
    public dimensions: Shape
  ) { }

  public area(): number {
    return this.dimensions.area()
  }
}

const wall = new Wall("yellow", new Circle(10))

console.log(wall.area());