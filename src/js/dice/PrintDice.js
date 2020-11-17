export default class PrintDice {
  printToBoard = (dice) => {
    document.querySelector('#board').appendChild(dice.figure)
    setTimeout(() => {
      dice.figure.style.transform = 'scale(1)'
    }, 100)
  }
}
