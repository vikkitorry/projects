import { createHtmlElement } from '../../helpers/createHtmlElement'
import './styles/modal.css'

export class ModalWindow {
  container: HTMLElement
  message: HTMLElement

  constructor(parent: HTMLElement) {
    this.container = createHtmlElement({ classNames: ['modal'], tag: 'div'})
    this.message = createHtmlElement({ classNames: ['mssg'], tag: 'p'})
    this.renderPromt(parent)
  }

  renderPromt(parent: HTMLElement) {
    const tittle = createHtmlElement({ classNames: ['modal-tittle'], tag: 'div', textContent: 'Winner'})
    this.container.append(tittle, this.message)
    parent.prepend(this.container)
  }

  showModal(name: string, time: number) {
    this.message.textContent = `${name} ${time}(sec)`
    this.container.classList.add('modal-active')
    setTimeout(() => this.container.classList.remove('modal-active'), 3000)
  }
}