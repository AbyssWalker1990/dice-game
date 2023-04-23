"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dice {
    constructor(sides = 6) {
        this.sides = sides;
        this.randomSide = () => {
            return Math.floor(Math.random() * this.sides);
        };
        this.sides = sides;
    }
}
exports.default = Dice;
