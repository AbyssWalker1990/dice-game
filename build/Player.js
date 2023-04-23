"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(name, diceSet, resultSet = [], sumResult = 0, round = 1, isChampion = false) {
        this.name = name;
        this.diceSet = diceSet;
        this.resultSet = resultSet;
        this.sumResult = sumResult;
        this.round = round;
        this.isChampion = isChampion;
        this.throwDices = () => {
            this.diceSet.forEach(dice => {
                const throwResult = dice.randomSide();
                this.resultSet.push(throwResult);
            });
        };
        this.name = name;
        this.diceSet = diceSet;
        this.resultSet = resultSet;
    }
}
exports.default = Player;
