export default class Dice {
  constructor(game) {
    this.game = game
    this.types = [
      {
        type: 'one',
        point: 1,
        size: 60,
      },
      {
        type: 'two',
        point: 2,
        size: 50,
      },
      {
        type: 'three',
        point: 3,
        size: 40,
      },
      {
        type: 'four',
        point: 4,
        size: 30,
      },
      {
        type: 'five',
        point: 5,
        size: 25,
      },
      {
        type: 'six',
        point: 6,
        size: 20,
      },
    ]
    this.listener = this.destroyDice
    this.figure = this.creatRandomFigure()
  }

  creatRandomFigure = () => {
    let random = Math.floor(Math.random() * this.types.length)
    let figure = document.createElement('figure')
    figure.className = `dice ${this.types[random].type}`
    figure.dataset.point = this.types[random].point
    figure.addEventListener('click', this.listener)
    figure.style.height = figure.style.width = `${this.types[random].size}px`
    figure.style.left = `${Math.floor(
      Math.random() *
        (this.game.board.widthBoard - (this.types[random].size + 5))
    )}px`
    figure.style.top = `${Math.floor(
      Math.random() *
        (this.game.board.heightBoard - (this.types[random].size + 5))
    )}px`

    return figure
  }

  destroyDice = (ev) => {
    this.figure.removeEventListener('click', this.listener)
    this.game.points.setPoint =
      this.game.points.getPoint + Number(ev.target.dataset.point)
    ev.target.remove()
    let random = Math.floor(Math.random() * 3)

    for (let i = 0; i <= random; i++) {
      this.game.printer.printToBoard(new Dice(this.game))
    }
  }
}
