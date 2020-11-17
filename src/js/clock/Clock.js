export default class Clock {
  constructor(selector) {
    this.selector = selector
    this.clock = document.querySelector(this.selector)
  }
  setTime() {
    throw new Error('Implement the method setTime')
  }
}
