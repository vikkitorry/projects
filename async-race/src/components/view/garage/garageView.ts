import { createHtmlElement } from "../../helpers/createHtmlElement"
import { garageTemplate } from "../garage/garageTemplate"
import { Car } from './car/car'
import { ICar } from '../../../types/types'
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

  renderGarageMenu() {
    const buttonsContainer = createHtmlElement({tag: 'div', classNames: ['change-page-container']})
    buttonsContainer.append(this.previousPageButton, this.currentPage, this.nextPageButton)
    this.main.innerHTML = garageTemplate
    this.main.append(this.carsAmount, this.container, buttonsContainer)
  }

  createFirstPage() {
    const carsNodes = this.allCars.slice(0, 7)
    this.carsInPage = carsNodes
    carsNodes.forEach(car => this.container.append(car.carNode))
  }

  addNewCar(newCar: ICar, listenner: (e: Event) => void) {
    const car = new Car(newCar, listenner)
    this.allCars.push(car)
    if (this.carsInPage.length < 7) {
      this.container.append(car.carNode)
    }
  }

  removeCar(id: number) {
    this.allCars = this.allCars.filter(car => car.id !== id)
    this.carsInPage.forEach(car => car.id === id ? car.carNode.remove() : 0)
  }

  getCar(id: number): Car | undefined {
    return this.allCars.find(car => car.id === id)
  }

  setCurrentPage(page: number, counter: 1 | -1) {
    const newPage = page + counter
    this.currentPage.textContent = `${newPage}`
    if (counter === +1) {
      this.carsInPage = this.allCars.slice(page * 7, newPage * 7)
    } else {
      this.carsInPage = this.allCars.slice((newPage -1) * 7, newPage * 7)
    }
    this.container.innerHTML = ''

    this.carsInPage.forEach(car => this.container.append(car.carNode))
  }

}