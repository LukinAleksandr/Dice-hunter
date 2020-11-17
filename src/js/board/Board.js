export default class Board {
  constructor() {
    this.board = document.querySelector('#board')
    this.widthBoard = this.board.clientWidth
    this.heightBoard = this.board.clientHeight
  }

  updateBoardSizing() {
    this.widthBoard = this.board.clientWidth
    this.heightBoard = this.board.clientHeight
  }

  disabledBoard = () => {
    const blocker = document.createElement('div')
    blocker.id = 'blocker'
    this.board.appendChild(blocker)
  }

  enabledBoard = () => {
    const blocker = this.board.querySelector('#blocker')
    if (blocker) {
      blocker.remove()
    }
  }

  clearBoard = () => {
    this.board.innerHTML = ''
    this.enabledBoard()
    this.updateBoardSizing()
  }
}
