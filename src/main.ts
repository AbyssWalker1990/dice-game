import Dice from "./Dice"
import Player from "./Player"

class GameService {
  constructor(public playersArr: string[], public diceSides = 6) {
    this.playersArr = playersArr
    this.diceSides = diceSides
  }

  public showPlayers = (): void => {
    const players = this.createPlayers()
    players.forEach(player => console.log(player))
  }

  private createPlayers = (): Player[] => {
    const players: Player[] = []
    this.playersArr.forEach(playerName => {
      const player = new Player(playerName)
      players.push(player)
    })
    return players
  }
}

const gameService = new GameService(['Bob', 'Dylan'])
gameService.showPlayers()