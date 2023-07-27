import { header } from '../view/header/header'
import { WinnersView } from '../view/winners/winners'
import { ICar, IEngine, IMainButtons, IInputs } from '../../types/types'
import { GarageView } from './garage/garageView'
import { Car } from './garage/car/car'
import { ModalWindow } from './modalWindow/modal'

export class AppView {

  body: HTMLElement
  garageView: GarageView
  winnersView: WinnersView
  modalWindow: ModalWindow
  totalCars: number
  isRaceMode:boolean

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

  render() {
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

  toggleView() {
    //переписать с боди на нав
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

  handleChangePageButtons() {
    this.garageView.nextPageButton.addEventListener('click', () => {
      const page = this.garageView.currentPage.textContent
      if (page && Math.ceil(this.garageView.allCars.length / 7) > +page && !this.isRaceMode) {
        this.garageView.setCurrentPage(+page, 1)
      }
    })
    this.garageView.previousPageButton.addEventListener('click', () => {
      const page = this.garageView.currentPage.textContent
      if (page && +page > 1 && !this.isRaceMode) {
        this.garageView.setCurrentPage(+page, -1)
      }
    })
  }

  addCar(newCar: ICar, listenner: (e: Event) => void) {
    this.totalCars = ++this.totalCars
    this.setCarAmount()
    this.garageView.addNewCar(newCar, listenner)
  }

  setCarAmount(amount?: number) {
    amount ? this.totalCars = amount : amount = this.totalCars
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

}
