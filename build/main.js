"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dice_1 = __importDefault(require("./Dice"));
const Player_1 = __importDefault(require("./Player"));
class GameService {
    constructor(playersArr, diceAmount = 2, diceSides = 6) {
        this.playersArr = playersArr;
        this.diceAmount = diceAmount;
        this.diceSides = diceSides;
        this.showPlayers = () => {
            const players = this.createPlayers(this.diceSet);
            players.forEach(player => console.log(player));
        };
        this.showDiceSet = () => {
            const diceSet = this.createDiceSet();
            diceSet.forEach(dice => console.log(dice));
        };
        this.createPlayers = (diceSet) => {
            const players = [];
            this.playersArr.forEach(playerName => {
                const player = new Player_1.default(playerName, diceSet);
                players.push(player);
            });
            return players;
        };
        this.createDiceSet = () => {
            const diceSet = new Set();
            for (let i = 0; i < this.diceAmount; i++) {
                const dice = new Dice_1.default(this.diceSides);
                diceSet.add(dice);
            }
            return diceSet;
        };
        this.throwDices = () => {
            this.players.forEach(player => {
                player.throwDices();
            });
        };
        this.playersArr = playersArr;
        this.diceAmount = diceAmount;
        this.diceSides = diceSides;
        this.diceSet = this.createDiceSet();
        this.players = this.createPlayers(this.diceSet);
        this.throwDices();
        this.showPlayers();
    }
}
const gameService = new GameService(['Bob', 'Dylan']);
// gameService.showDiceSet()
// gameService.showPlayers()
