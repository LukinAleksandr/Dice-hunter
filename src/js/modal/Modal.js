export default class Modal {
  constructor(options) {
    this.options = options
    this.$modal = this.render()
    this.setup()
    this.ANIMATION_SPEED = 200
  }

  createModalFooter(btns) {
    const wrap = document.createElement('div')
    wrap.id = 'mymodal-footer'

    btns.forEach((btn) => {
      const $btn = document.createElement('button')
      $btn.textContent = btn.text
      $btn.type = btn.type
      $btn.classList.add('btn')
      $btn.classList.add(btn.classes)
      $btn.dataset.type = btn.dataset
      $btn.onclick = btn.handler || null

      wrap.appendChild($btn)
    })
    return wrap
  }

  render = () => {
    const modal = document.createElement('div')
    modal.classList.add('mymodal')
    modal.insertAdjacentHTML(
      'afterbegin',
      `
            <div id="mymodal-overlay">
                <div id="mymodal-window">
                    <div id="mymodal-body">
                        <h4 id="mymodal-title">Your score: ${this.options.points}</h4>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Name: </span>
                            </div>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        </div>
                    </div>
                </div>
            </div>
        `
    )
    const footer = this.createModalFooter(this.options.buttons)
    document.body.appendChild(modal)
    document.querySelector('#mymodal-body').appendChild(footer)

    return modal
  }

  setup() {
    this.clickHandler = this.clickHandler.bind(this)
    this.$modal.addEventListener('click', this.clickHandler)
  }

  clickHandler(event) {
    const { type } = event.target.dataset
    if (type === 'denied' || type === 'success') {
      this.close()
    }
  }

  open() {
    this.$modal.classList.add('open')
  }

  close() {
    this.$modal.classList.remove('open')
    this.$modal.classList.add('close')
    setTimeout(() => {
      this.$modal.classList.remove('close')
      this.destroy()
    }, this.ANIMATION_SPEED)
  }

  destroy() {
    this.$modal.removeEventListener('click', this.clickHandler)
    this.$modal.remove()
  }
}
