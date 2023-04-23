export default class Dice {
  constructor(public sides = 6) {
    this.sides = sides
  }

  public randomSide = (): number => {
    return Math.floor(Math.random() * this.sides)
  }
}