import {createHtmlElement} from '../../helpers/createHtmlElement'
import {getTableTemplate} from './winnersTemplate'
import './styles/winners.css'

export class WinnersView {

  main: HTMLElement
  previousButton: HTMLElement
  nextButton: HTMLElement
  actualPage: HTMLElement
  allWinners: HTMLElement

  constructor() {
    this.main = createHtmlElement({ classNames: ['winners'], tag: 'main'})
    this.previousButton = createHtmlElement({ classNames: ['btn'], tag: 'div', textContent: 'Previous'})
    this.nextButton = createHtmlElement({ classNames: ['btn'], tag: 'div', textContent: 'Next'})
    this.actualPage = createHtmlElement({ classNames: ['page'], tag: 'span', textContent: '1'})
    this.allWinners = createHtmlElement({ classNames: ['page'], tag: 'span', textContent: '1'})
    this.createWinnersPage()
  }

  createWinnersPage() {
    const buttonsContainer = createHtmlElement({ classNames: ['change-page-container'], tag: 'div'})
    buttonsContainer.append(this.previousButton, this.actualPage, this.nextButton)
    //this.main.prepend(this.allWinners)
    this.main.insertAdjacentHTML('beforeend', getTableTemplate())
    this.main.append(buttonsContainer)
  }


}