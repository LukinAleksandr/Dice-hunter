import Modal from './Modal'

export default confirm = function (options) {
  return new Promise((resolve, reject) => {
    const modal = new Modal({
      points: options.points,
      buttons: [
        {
          text: 'Save',
          classes: 'btn-success',
          type: 'button',
          dataset: 'success',
          handler() {
            resolve(document.querySelector('.form-control').value)
          },
        },
        {
          text: 'Cancel',
          classes: 'btn-danger',
          type: 'button',
          dataset: 'denied',
          handler() {
            reject()
          },
        },
      ],
    })
    setTimeout(() => modal.open(), 100)
  })
}
