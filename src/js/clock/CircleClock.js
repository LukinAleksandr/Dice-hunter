import Clock from './Clock'

export default class CircleClock extends Clock {
  setTime(time) {
    let second = time * 6
    this.clock.style.transform = `rotateZ(${second}deg)`
  }
}
