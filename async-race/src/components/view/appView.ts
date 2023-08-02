import { header } from '../view/header/header'
import { WinnersView } from '../view/winners/winners'
import { ICar, IEngine, IMainButtons, IInputs, winnersLimit } from '../../types/types'
import { GarageView } from './garage/garageView'
import { Car } from './garage/car/car'
import { ModalWindow } from './modalWindow/modal'

export class AppView {

  private garageView: GarageView
  private modalWindow: ModalWindow
  private winnersView: WinnersView
  private body: HTMLElement
  private totalCars: number
  private isRaceMode:boolean

  constructor() {
    this.totalCars = 0
    this.isRaceMode = false
    this.body = document.querySelector('body') as HTMLElement;
    this.modalWindow = new ModalWindow(this.body)
    this.garageView = new GarageView()
    this.winnersView = new WinnersView()
    this.render()
    this.toggleView()
    this.handleChangePageButtons()
  }

  private render() {
    this.body.classList.add('garage-active')
    this.body.insertAdjacentHTML('beforeend', header)
    this.body.append(this.garageView.main)
    this.body.append(this.winnersView.main)
  }

  renderButtons(buttons: IMainButtons, inputs: IInputs) {
    document.querySelector('.menu-buttons-container')?.append(buttons.raceButton, buttons.resetButton, buttons.generateButton)
    document.querySelector('.create-container')?.append(inputs.inputTextCreate, inputs.inputColorCreate, buttons.createButton)
    document.querySelector('.update-container')?.append(inputs.inputTextUpdate, inputs.inputColorUpdate, buttons.updateButton)
    this.garageView.createFirstPage()
  }

  private toggleView() {
    this.body.addEventListener('click', (e) => {
      if (e.target instanceof HTMLElement) {
        if (e.target?.className.includes('to-garage')) {
          this.body.classList.remove('winners-active')
          this.body.classList.add('garage-active')
        }
        if (e.target?.className.includes('to-winners')) {
          this.body.classList.remove('garage-active')
          this.body.classList.add('winners-active')
        }
      }
    })
  }

  private handleChangePageButtons() {
    this.garageView.nextPageButton.addEventListener('click', () => {
      const page = Number(this.garageView.currentPage.textContent)
      if (page && Math.ceil(this.garageView.allCars.length / winnersLimit) > page && !this.isRaceMode) {
        this.garageView.setCurrentPage(page, 1)
      }
    })
    this.garageView.previousPageButton.addEventListener('click', () => {
      const page = Number(this.garageView.currentPage.textContent)
      if (page && page > 1 && !this.isRaceMode) {
        this.garageView.setCurrentPage(page, -1)
      }
    })
  }

  getCar(id: number): Car | undefined {
    return this.garageView.allCars.find(car => car.id === id)
  }

  addCar(newCar: ICar, listenner: (e: Event) => void) {
    this.totalCars = ++this.totalCars
    this.setCarAmount()
    this.garageView.addNewCar(newCar, listenner)
  }

  setCarAmount(amount?: number) {
    if (amount) {
      this.totalCars = amount
    }else {
      amount = this.totalCars
    }
    this.garageView.carsAmount.textContent = `(${amount})`
  }

  addDriveEffect(car: Car, raceParams: IEngine) {
    const way = this.garageView.main.clientWidth || this.winnersView.main.clientWidth
    car.animation.setAnimation(raceParams.distance, raceParams.velocity, way)
  }

  removeDriveEffect(car: Car) {
    car.animation.removeAnimation()
  }

  removeCar(id: number) {
    this.totalCars = --this.totalCars
    this.setCarAmount()
    this.garageView.removeCar(id)
    this.winnersView.removeWinner(id)
  }

  changeCarView(car: Car) {
    car.setNewCarColor(car.getParams().color)
    car.carName.textContent = car.getParams().name
  }

  switchRaceMode(isRace: boolean) {
    this.isRaceMode = isRace
  }

  setWinners() {
    this.winnersView.addWinners()
  }

  setModalError(err: string) {
    this.modalWindow.showError(err)
  }

  setModalWinner(name: string, time: number) {
    this.modalWindow.showWinner(name, time)
  }

  getCarsInPage() {
    return this.garageView.carsInPage
  }
}
