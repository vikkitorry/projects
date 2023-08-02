import { createHtmlElement } from '../../helpers/createHtmlElement'
import './styles/modal.css'

export class ModalWindow {

  private message: HTMLElement
  private tittle: HTMLElement
  private container: HTMLElement

  constructor(parent: HTMLElement) {
    this.tittle = createHtmlElement({ classNames: ['modal-tittle'], tag: 'div'})
    this.container = createHtmlElement({ classNames: ['modal'], tag: 'div'})
    this.message = createHtmlElement({ classNames: ['mssg'], tag: 'p'})
    this.renderPromt(parent)
  }

  private renderPromt(parent: HTMLElement) {
    this.container.append(this.tittle, this.message)
    parent.prepend(this.container)
  }

  showWinner(name: string, time: number) {
    this.tittle.textContent = 'Winner'
    this.message.textContent = `${name} ${time}(sec)`
    this.container.classList.add('modal-active')
    setTimeout(() => this.container.classList.remove('modal-active'), 3000)
  }

  showError(err:string) {
    this.tittle.textContent = 'Error'
    this.message.textContent = err
    this.container.classList.add('modal-active')
    setTimeout(() => this.container.classList.remove('modal-active'), 5000)
  }

}