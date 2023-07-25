import {createHtmlElement} from '../../helpers/createHtmlElement'
import {getTableTemplate} from './winnersTemplate'
import { getWinnerTemplate } from './winnerTemplate'
import { WinnersApi } from '../../api/winners'
import { GarageApi } from '../../api/garage'
import {Sort, Order} from '../../api/serverTypes'
import './styles/winners.css'

export class WinnersView {

  main: HTMLElement
  previousButton: HTMLElement
  nextButton: HTMLElement
  actualPageElement: HTMLElement
  sortByTimeBtn: HTMLElement
  sortByWinsBtn: HTMLElement
  actualPage: number
  winnersApi: WinnersApi
  garageApi: GarageApi
  sort: Sort
  order: Order
  winnersAmount: number

  constructor() {
    this.winnersAmount = 0
    this.main = createHtmlElement({ classNames: ['winners'], tag: 'main'})
    this.previousButton = createHtmlElement({ classNames: ['btn'], tag: 'div', textContent: 'Previous'})
    this.nextButton = createHtmlElement({ classNames: ['btn'], tag: 'div', textContent: 'Next'})
    this.actualPageElement = createHtmlElement({ classNames: ['page'], tag: 'span', textContent: '1'})
    this.actualPage = 1
    this.createWinnersPage()
    this.sortByTimeBtn = this.main.querySelector('.table_time') as HTMLElement
    this.sortByWinsBtn = this.main.querySelector('.table_wins') as HTMLElement
    this.handleSortButtons()
    this.handlePageButtons()
    this.winnersApi = new WinnersApi
    this.garageApi = new GarageApi
    this.sort = Sort.time
    this.order = Order.up
  }

  createWinnersPage() {
    const buttonsContainer = createHtmlElement({ classNames: ['change-page-container'], tag: 'div'})
    buttonsContainer.append(this.previousButton, this.actualPageElement, this.nextButton)
    this.main.insertAdjacentHTML('beforeend', getTableTemplate())
    this.main.append(buttonsContainer)
  }

  removeWinner(id: number) {
    const winner = this.main.querySelector(`[data-winner="${id}"]`)
    winner?.remove()
  }

  async addWinners() {
    const winners =  await this.winnersApi.getWinners({
      page: this.actualPage, limit: 10, sort: this.sort, order: this.order
    })
    const container = this.main.querySelector('.winners_container')
    const total = this.main.querySelector('.winners-amount')
    let winnersInPage = 1
    if (container && total) {
      container.innerHTML = ''
      this.winnersAmount = (await this.winnersApi.getAllWinners()).length
      total.textContent = `(${this.winnersAmount})`
      winners.forEach(async w => {
        const car = await this.garageApi.getCar(w.id)
        const winner = getWinnerTemplate(winnersInPage++, w.wins, w.time, car)
        container.insertAdjacentHTML('beforeend', winner)
      });
    }
  }

  handleSortButtons() {
    this.sortByTimeBtn.addEventListener('click', async () => {
      this.sortByWinsBtn.classList.remove('active-sort')
      this.sortByTimeBtn.classList.add('active-sort')
      this.sortByTimeBtn.classList.toggle('ASC')
      this.sort = Sort.time
      if (this.sortByTimeBtn.className.includes('ASC')) {
        this.order = Order.up
      } else {
        this.order = Order.down
      }
      await this.addWinners()
    })

    this.sortByWinsBtn.addEventListener('click', async () => {
      this.sortByTimeBtn.classList.remove('active-sort')
      this.sortByWinsBtn.classList.add('active-sort')
      this.sortByWinsBtn.classList.toggle('ASC')
      this.sort = Sort.wins
      if (this.sortByWinsBtn.className.includes('ASC')) {
        this.order = Order.up
      } else {
        this.order = Order.down
      }
      await this.addWinners()
    })
  }

  handlePageButtons() {
    this.previousButton.addEventListener('click', async () => {
      if (this.actualPage > 1) {
        this.actualPage --
        this.actualPageElement.textContent = `${this.actualPage}`
        await this.addWinners()
      }
    })

    this.nextButton.addEventListener('click', async () => {
      if (this.actualPage < this.winnersAmount / 10) {
        this.actualPage ++
        this.actualPageElement.textContent = `${this.actualPage}`
        await this.addWinners()
      }
    })
  }

}