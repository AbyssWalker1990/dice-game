import Dice from "./Dice"

export default class Player {
  constructor(
    public name: string, 
    public diceSet: Set<Dice>,
    private resultSet: number[] = [],
    private sumResult: number = 0,
    private round: number = 1,
    private isChampion: boolean = false) {
      this.name = name
      this.diceSet = diceSet
      this.resultSet = resultSet
  }

  public throwDices = (): void => {
    this.diceSet.forEach(dice => {
      const throwResult = dice.randomSide()
      this.resultSet.push(throwResult)
    })
    this.getSumResult()
  }

  private getSumResult = (): void => {
    this.sumResult = this.resultSet.reduce((acc, cur) => acc + cur)
  }
}