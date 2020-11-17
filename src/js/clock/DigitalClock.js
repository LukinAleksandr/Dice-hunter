import Clock from './Clock'

export default class DigitalClock extends Clock {
  setTime(time) {
    this.clock.innerHTML = 60 - time < 10 ? `0${60 - time}` : 60 - time
  }
}
