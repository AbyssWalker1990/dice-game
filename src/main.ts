import Dice from "./Dice"
import Player from "./Player"

class GameService {
  private diceSet: Set<Dice>
  constructor(public playersArr: string[], public diceAmount = 2, public diceSides = 6) {
    this.playersArr = playersArr
    this.diceAmount = diceAmount
    this.diceSides = diceSides
    this.diceSet = this.createDiceSet()
  }

  public showPlayers = (): void => {
    const players = this.createPlayers(this.diceSet)
    players.forEach(player => console.log(player))
  }

  public showDiceSet = (): void => {
    const diceSet = this.createDiceSet()
    diceSet.forEach(dice => console.log(dice))
  }

  private createPlayers = (diceSet: Set<Dice>): Player[] => {
    const players: Player[] = []
    this.playersArr.forEach(playerName => {
      const player = new Player(playerName, diceSet)
      players.push(player)
    })
    return players
  }

  private createDiceSet = (): Set<Dice> => {
    const diceSet: Set<Dice> = new Set()
    for (let i = 0; i < this.diceAmount; i++) {
      const dice = new Dice(this.diceSides)
      diceSet.add(dice)
    }
    return diceSet
  }
}

const gameService = new GameService(['Bob', 'Dylan'])
gameService.showPlayers()
gameService.showDiceSet()