import Board from './board/Board'
import CircleClock from './clock/CircleClock'
import DigitalClock from './clock/DigitalClock'
import Dice from './dice/Dice'
import PrintDice from './dice/PrintDice'
import confirm from './modal/confirm'
import Point from './point/Point'
import Result from './results/Results'
import Time from './time/Time'

export default class Game {
  constructor() {
    this.startBtn = document.querySelector('#btn-start')
    this.resetBtn = document.querySelector('#btn-reset')
    this.printer = new PrintDice()
    this.board = new Board()
    this.points = new Point()
    this.time = new Time()
    this.results = new Result()
    this.citcleClock = new CircleClock('#sc')
    this.digitalClock = new DigitalClock('#seconds')
    this.interval = null
    this._setup()
  }

  _setup() {
    this.startBtn.addEventListener('click', this.startGame)
    this.resetBtn.addEventListener('click', this.resetGame)
    this.citcleClock.setTime(this.time.getTime)
    this.digitalClock.setTime(this.time.getTime)
    this.points.renderPoint()
  }

  startGame = () => {
    this.startBtn.innerHTML.trim() === 'Start' ? this.start() : this.pause()
  }
  resetGame = () => {
    clearInterval(this.interval)
    this.startBtn.innerHTML = 'Start'
    this.time.setTime = 0
    this.citcleClock.setTime(this.time.getTime)
    this.digitalClock.setTime(this.time.getTime)
    this.startBtn.disabled = false
    this.points.setPoint = 0
    this.board.clearBoard()
  }

  start = () => {
    this.startBtn.innerHTML = 'Pause'
    this.board.enabledBoard()
    let dice = new Dice(this)
    this.printer.printToBoard(dice)
    this.interval = setInterval(() => {
      if (this.time.getTime === 59) {
        this.endGame()
      }
      this.time.setTime = this.time.getTime + 1
      this.citcleClock.setTime(this.time.getTime)
      this.digitalClock.setTime(this.time.getTime)
    }, 1000)
  }

  pause = () => {
    clearInterval(this.interval)
    this.startBtn.innerHTML = 'Start'
    this.board.disabledBoard()
  }

  endGame = () => {
    clearInterval(this.interval)
    this.startBtn.innerHTML = 'Start'
    this.startBtn.disabled = true
    this.board.disabledBoard()
    confirm({
      points: this.points.getPoint,
    })
      .then((data) => {
        this.results.saveResult({
          name: data,
          point: this.points.getPoint,
        })
      })
      .catch(() => false)
  }
}
