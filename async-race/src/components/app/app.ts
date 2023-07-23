import { AppView } from '../view/appView'
import { Button } from '../controllers/button'
import { Input } from '../controllers/input'
import { EngineApi } from '../api/engine'
import { GarageApi } from '../api/garage'
import { WinnersApi } from '../api/winners'
import { getRandomHexColor, getRandomCarFullName } from '../helpers/randomizers'
import { IMainButtons, IInputs } from '../../types/types'
import { EngineStatus } from '../api/serverTypes'
import { Car } from '../view/garage/car/car'

export class App {
  private view : AppView
  private garage : GarageApi
  private winners : WinnersApi
  private engine : EngineApi
  private buttons : IMainButtons
  private inputs : IInputs
  private selectedCar : Car | null

  constructor() {
    this.view = new AppView
    this.garage = new GarageApi
    this.engine = new EngineApi
    this.winners = new WinnersApi
    this.buttons = this.createMainButtons()
    this.inputs = this.createInputElements()
    this.createGarage()
    this.selectedCar = null
  }

  createMainButtons() {
    const raceButton = new Button({
      tag: 'button',
      classNames: ['race', 'btn-menu'],
      textContent: 'Race'},
    () => this.handleRaceButtonClick()).getButton()

    const resetButton = new Button({
      tag: 'button',
      classNames: ['reset', 'btn-menu'],
      textContent: 'Reset'},
    () => this.handleResetButtonClick()).getButton()

    const generateButton = new Button({
      tag: 'button',
      classNames: ['generate-cars', 'btn-menu'],
      textContent: 'Generate'},
    () => this.handleGenerateButtonClick()).getButton()

    const createButton = new Button({
      tag: 'button',
      classNames: ['create'],
      textContent: 'Create'},
    () => this.handleCreateButtonClick()).getButton()

    const updateButton = new Button({
      tag: 'button',
      classNames: ['update'],
      textContent: 'Update'},
      () => this.handleUpdateButtonClick()).getButton()

  return {raceButton, resetButton, generateButton, createButton, updateButton}
  }

  createInputElements() {
    const inputColorCreate = new Input(['rgb', 'create-color'], 'color').getInputElement()
    const inputColorUpdate = new Input(['rgb', 'update-color'], 'color').getInputElement()
    const inputTextUpdate = new Input(['input'], 'text').getInputElement()
    const inputTextCreate = new Input(['input'], 'text').getInputElement()

    return {inputColorCreate, inputColorUpdate, inputTextUpdate, inputTextCreate}
  }

  async createGarage() {
    const allCars = await this.garage.getCars()
    const carArray = Object.values(allCars)
    carArray.forEach(car => {
      this.view.addCar(car, (e) => this.handleCarButtons(e))
    })
    this.view.renderFirsPage(this.buttons, this.inputs)
    this.view.setCarAmount(carArray.length)
  }

  async createCar(name:string, color: string) {
    const newCar = await this.garage.createCar({name, color})
    this.view.addCar(newCar, (e) => this.handleCarButtons(e))
    const allCars = await this.garage.getCars()
    this.view.setCarAmount(Object.values(allCars).length)
  }

  async handleRaceButtonClick() {
    const allCars = this.view.garageView.carsInPage
    const carArray = Object.values(allCars)
    //const disableElements = Object.values(this.buttons).concat(Object.values(this.inputs))
    //disableElements.forEach(btn => btn.disabled = true)
    carArray.forEach(async car => {
      const raceParams = await this.engine.startStopEngine(car.id, EngineStatus.start)
      this.view.addDriveEffect(car, raceParams)
    })
    //надо дождаться победителя
    //disableElements.forEach(btn => btn.disabled = false)
  }

  handleResetButtonClick() {
    const allCars = this.view.garageView.carsInPage
    const carArray = Object.values(allCars)
    carArray.forEach(async car => {
      await this.engine.startStopEngine(car.id, EngineStatus.stop)
      this.view.removeDriveEffect(car)
    })
  }

  handleGenerateButtonClick() {
    new Array(100).fill(1).map( () => this.createCar(getRandomCarFullName(), getRandomHexColor()))
  }

  handleCreateButtonClick() {
    const name = this.inputs.inputTextCreate.value
    if (name) {
      const color = this.inputs.inputColorCreate.value
      this.createCar(name, color)
    }
  }

  async handleUpdateButtonClick() {
    if (this.selectedCar) {
      this.selectedCar.setNewParams(
        this.inputs.inputTextUpdate.value,
        this.inputs.inputColorUpdate.value)
      await this.garage.updateCar(this.selectedCar.getParams())
      this.view.changeCarView(this.selectedCar)
      this.inputs.inputTextUpdate.value = ''
      this.selectedCar = null
    }
  }

  async handleCarButtons(e: Event) {
    if (e?.target instanceof HTMLButtonElement) {
      const classNames = e.target.className
      const car = this.view.garageView.getCar(+e.target.id)
      if (car) {
        if (classNames.includes('remove')) {
          this.view.removeCar(+e.target.id)
          this.garage.deleteCar(+e.target.id)
        } else if (classNames.includes('select')) {
          this.selectedCar = car
          this.inputs.inputTextUpdate.value = car.carName.textContent || ''
          this.inputs.inputColorUpdate.value = car.getParams().color
        } else if (classNames.includes('start')) {
          const raceParams = await this.engine.startStopEngine(+e.target.id, EngineStatus.start)
          car.animation.setAnimation(raceParams.distance, raceParams.velocity, car.carNode.clientWidth)
        } else if (classNames.includes('stop')) {
          await this.engine.startStopEngine(+e.target.id, EngineStatus.stop)
          car.animation.stopAnimation()
        }
      }
    }
  }

}
