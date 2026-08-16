class Tooltip extends HTMLElement {
  constructor() {
    super()
    console.log('Tooltip working')
  }
}

customElements.define('uc-tooltip', Tooltip)
