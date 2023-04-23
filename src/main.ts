import Dice from "./Dice"
import Player from "./Player"

class GameService {
  private players: Player[]
  private diceSet: Set<Dice>
  constructor(public playersArr: string[], public diceAmount = 2, public diceSides = 6) {
    this.playersArr = playersArr
    this.diceAmount = diceAmount
    this.diceSides = diceSides
    this.diceSet = this.createDiceSet()
    this.players = this.createPlayers(this.diceSet)
    this.throwDices()
    this.showPlayers()
  }

  public showPlayers = (): void => {
    const players = this.players
    players.forEach(player => console.log(player))
  }

  public showDiceSet = (): void => {
    const diceSet = this.diceSet
    diceSet.forEach(dice => console.log(dice))
  }

  private createDiceSet = (): Set<Dice> => {
    const diceSet: Set<Dice> = new Set()
    for (let i = 0; i < this.diceAmount; i++) {
      const dice = new Dice(this.diceSides)
      diceSet.add(dice)
    }
    return diceSet
  }

  private createPlayers = (diceSet: Set<Dice>): Player[] => {
    const players: Player[] = []
    this.playersArr.forEach(playerName => {
      const player = new Player(playerName, diceSet)
      players.push(player)
    })
    return players
  }


  private throwDices = (): void => {
    this.players.forEach(player => {
      player.throwDices()
    })
  }
}

const gameService = new GameService(['Bob', 'Dylan'])

// gameService.showDiceSet()
// gameService.showPlayers()