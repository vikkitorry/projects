import {createHtmlElement} from '../../helpers/createHtmlElement'
import {getTableTemplate} from './winnersTemplate'
import { getWinnerTemplate } from './winnerTemplate'
import { ICar } from '../../../types/types'
import { WinnersApi } from '../../api/winners'
import './styles/winners.css'

export class WinnersView {

  main: HTMLElement
  previousButton: HTMLElement
  nextButton: HTMLElement
  actualPageElement: HTMLElement
  actualPage: number
  winnersInPage: number
  winnersApi: WinnersApi

  constructor() {
    this.main = createHtmlElement({ classNames: ['winners'], tag: 'main'})
    this.main.addEventListener('click', (e) => this.handleSortButtons(e))
    this.previousButton = createHtmlElement({ classNames: ['btn'], tag: 'div', textContent: 'Previous'})
    this.nextButton = createHtmlElement({ classNames: ['btn'], tag: 'div', textContent: 'Next'})
    this.actualPageElement = createHtmlElement({ classNames: ['page'], tag: 'span', textContent: '1'})
    this.actualPage = 1
    this.createWinnersPage()
    this.winnersInPage = 0
    this.winnersApi = new WinnersApi
  }

  createWinnersPage() {
    const buttonsContainer = createHtmlElement({ classNames: ['change-page-container'], tag: 'div'})
    buttonsContainer.append(this.previousButton, this.actualPageElement, this.nextButton)
    this.main.insertAdjacentHTML('beforeend', getTableTemplate())
    this.main.append(buttonsContainer)
  }

  addWinnerToTable(wins: number, time: number, car: ICar){
    const winnerContainer = this.main.querySelector(`[data-winner="${car.id}"]`)
    if (winnerContainer) {
      const winsAmount = winnerContainer.querySelector('.winner-wins') as HTMLElement
      if (winsAmount.textContent) {
        winsAmount.textContent = `${+winsAmount.textContent + 1}`
      }
    } else {
      this.winnersInPage = this.winnersInPage + 1
      const winner = getWinnerTemplate(this.winnersInPage, wins, time, car)
      this.main.querySelector('thead')?.insertAdjacentHTML('beforeend', winner)
    }
  }

  removeWinner(id: number) {
    const winner = this.main.querySelector(`[data-winner="${id}"]`)
    winner?.remove()
  }

  sortWinners(sort: string, order: string) {
    this.winnersApi.getWinners({page: this.actualPage, limit: 10, sort, order})
  }

  handleSortButtons(e: Event) {
    if (e?.target instanceof Element) {
      const classNames = e.target.className
      const wins = e.target.closest('.table_wins')
      const time = e.target.closest('.table_time')
      if (wins) {
console.log('wins')
      } else if (time) {
        console.log('time')
      }
    }
  }

}