
interface IShape {
  area(): number
}

class Rectangle implements IShape {
  constructor(
    public height: number,
    public width: number,
  ) { }

  public area(): number {
    return this.width * this.height
  }
}

class Circle implements IShape {
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
    public dimensions: IShape
  ) { }

  public area(): number {
    return this.dimensions.area()
  }
}

const wall = new Wall("yellow", new Circle(10))

console.log(wall.area());