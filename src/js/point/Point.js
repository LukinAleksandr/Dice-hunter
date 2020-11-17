export default class Point {
  constructor() {
    this.point = 0
  }

  get getPoint() {
    return this.point
  }

  set setPoint(newPoint) {
    this.point = newPoint
    this.renderPoint()
  }

  renderPoint = () => {
    document.querySelector('#points').innerHTML = this.point
  }
}
