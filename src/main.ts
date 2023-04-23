import Dice from "./Dice"
import Player from "./Player"

class GameService {
  constructor(public playersArr: string[], public diceSides = 6) {
    this.playersArr = playersArr
    this.diceSides = diceSides
  }

  public showPlayers = (): void => {
    this.playersArr.forEach(element => {
      console.log(element)
    })
  }
}

const gameService = new GameService(['Bob', 'Dylan'])
gameService.showPlayers()