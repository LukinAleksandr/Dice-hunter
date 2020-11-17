export default class Time {
  constructor() {
    this.time = 0
  }

  get getTime() {
    return this.time
  }

  set setTime(second) {
    this.time = Number(second)
  }
}
