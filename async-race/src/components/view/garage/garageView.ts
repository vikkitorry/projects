import { createHtmlElement } from "../../helpers/createHtmlElement"
import { garageTemplate } from "../garage/garageTemplate"
import { Car } from './car/car'
import { ICar, winnersLimit } from '../../../types/types'
import './styles/garage.css'

export class GarageView {

  container: HTMLElement
  currentPage: HTMLElement
  carsAmount: HTMLElement
  previousPageButton: HTMLElement
  nextPageButton: HTMLElement
  main: HTMLElement
  allCars: Array<Car>
  carsInPage: Array<Car>

  constructor() {
    this.main = createHtmlElement({tag: 'main', classNames: ['garage']})
    this.carsAmount = createHtmlElement({tag: 'span', classNames: ['car-amount']})
    this.container = createHtmlElement({tag: 'div', classNames: ['garage-container']})
    this.currentPage = createHtmlElement({tag: 'span', classNames: ['current-page'], textContent: '1'})
    this.previousPageButton = createHtmlElement({tag: 'div', classNames: ['btn'], textContent: 'Previous'})
    this.nextPageButton = createHtmlElement({tag: 'div', classNames: ['btn'], textContent: 'Next'})
    this.allCars = []
    this.carsInPage = []
    this.renderGarageMenu()
  }

  private renderGarageMenu() {
    const buttonsContainer = createHtmlElement({tag: 'div', classNames: ['change-page-container']})
    buttonsContainer.append(this.previousPageButton, this.currentPage, this.nextPageButton)
    this.main.innerHTML = garageTemplate
    this.main.append(this.carsAmount, this.container, buttonsContainer)
  }

  createFirstPage() {
    const carsNodes = this.allCars.slice(0, winnersLimit)
    this.carsInPage = carsNodes
    carsNodes.forEach(car => this.container.append(car.carNode))
  }

  addNewCar(newCar: ICar, listenner: (e: Event) => void) {
    const car = new Car(newCar, listenner)
    this.allCars.push(car)
    if (this.carsInPage.length < winnersLimit) {
      this.carsInPage.push(car)
      this.container.append(car.carNode)
    }
  }

  removeCar(id: number) {
    this.allCars = this.allCars.filter(car => car.id !== id)
    const deletedCar = this.carsInPage.find(car => car.id === id )
    deletedCar?.carNode.remove()
    this.carsInPage = this.carsInPage.filter(car => car.id !== id)
  }

  setCurrentPage(page: number, counter: 1 | -1) {
    const newPage = page + counter
    this.currentPage.textContent = `${newPage}`
    counter === +1 ? this.carsInPage = this.allCars.slice(page * winnersLimit, newPage * winnersLimit) :
    this.carsInPage = this.allCars.slice((newPage -1) * winnersLimit, newPage * winnersLimit)
    this.container.innerHTML = ''
    this.carsInPage.forEach(car => this.container.append(car.carNode))
  }


}