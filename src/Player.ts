import Dice from "./Dice"

export default class Player {
  constructor(
    public name: string, 
    public diceSet: Set<Dice>,
    private result: number = 0,
    private round: number = 1,
    private isChampion: boolean = false) {
      this.name = name
      this.diceSet = diceSet
  }
}