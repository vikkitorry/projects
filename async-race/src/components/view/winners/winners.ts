import {createHtmlElement} from '../../helpers/createHtmlElement'
import {getTableTemplate} from './winnersTemplate'
import { getWinnerTemplate } from './winnerTemplate'
import { ICar } from '../../../types/types'
import './styles/winners.css'

export class WinnersView {

  main: HTMLElement
  previousButton: HTMLElement
  nextButton: HTMLElement
  actualPage: HTMLElement
  winnersInPage: number

  constructor() {
    this.main = createHtmlElement({ classNames: ['winners'], tag: 'main'})
    this.previousButton = createHtmlElement({ classNames: ['btn'], tag: 'div', textContent: 'Previous'})
    this.nextButton = createHtmlElement({ classNames: ['btn'], tag: 'div', textContent: 'Next'})
    this.actualPage = createHtmlElement({ classNames: ['page'], tag: 'span', textContent: '1'})
    this.createWinnersPage()
    this.winnersInPage = 0
  }

  createWinnersPage() {
    const buttonsContainer = createHtmlElement({ classNames: ['change-page-container'], tag: 'div'})
    buttonsContainer.append(this.previousButton, this.actualPage, this.nextButton)
    this.main.insertAdjacentHTML('beforeend', getTableTemplate())
    this.main.append(buttonsContainer)
  }

  addWinnerToTable(wins: number, time: number, car: ICar){
    this.winnersInPage = this.winnersInPage + 1
    const winner = getWinnerTemplate(this.winnersInPage, wins, time, car)
    this.main.querySelector('thead')?.insertAdjacentHTML('beforeend', winner)
  }

  removeWinner(id: number) {
    const winner = this.main.querySelector(`[data-winner="${id}"]`)
    winner?.remove()
  }


}