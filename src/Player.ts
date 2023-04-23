export default class Player {
  constructor(
    public name: string, 
    private result: number = 0,
    private round: number = 1,
    private isChampion: boolean = false) {
      this.name = name
  }
}