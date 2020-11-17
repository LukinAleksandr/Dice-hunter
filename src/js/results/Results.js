export default class Result {
  constructor() {
    this.renderResult()
  }
  getLocalStorage = () => JSON.parse(localStorage.getItem('results'))
  setLocalStorage = (arr) =>
    localStorage.setItem('results', JSON.stringify(arr))

  saveResult = (result) => {
    let ls = this.getLocalStorage()
    ls === null ? (ls = [result]) : ls.push(result)
    this.setLocalStorage(ls)
    this.renderResult()
  }

  renderResult = () => {
    const tabl = document.querySelector('#records-table tbody')
    const ls = this.getLocalStorage()
    if (ls === null) {
      return false
    }
    ls.sort((a, b) => {
      return b.point - a.point
    })

    let tbody = ``

    ls.forEach((element, index) => {
      tbody += `<tr>
                <th scope="row">${index + 1}</th>
                <td>${element.name}</td>
                <td>${element.point}</td>
              </tr>`
    })

    tabl.innerHTML = tbody
  }
}
