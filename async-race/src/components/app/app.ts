import { AppView } from '../view/appView'
import { Button } from '../controllers/button'
import { Input } from '../controllers/input'
import { EngineApi } from '../api/engine'
import { GarageApi } from '../api/garage'
import { WinnersApi } from '../api/winners'
import { getRandomHexColor, getRandomCarFullName } from '../helpers/randomizers'
import { IMainButtons, IInputs } from '../../types/types'
import { EngineStatus } from '../api/serverTypes'
//import { CarListener } from './carListener'

export class App {
  private view : AppView
  private garage : GarageApi
  private winners : WinnersApi
  private engine : EngineApi
  private buttons : IMainButtons
  private inputs : IInputs

  constructor() {
    this.view = new AppView
    this.garage = new GarageApi
    this.engine = new EngineApi
    this.winners = new WinnersApi
    this.buttons = this.createMainButtons()
    this.inputs = this.createInputElements()
    this.addMainButtons()
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

  const buttons = {raceButton, resetButton, generateButton, createButton, updateButton}
  return buttons
  }

  createInputElements() {
    const inputColorCreateContainer = new Input(['rgb', 'create-color'], 'color').getInputElement()
    const inputColorUpdateContainer = new Input(['rgb', 'update-color'], 'color').getInputElement()
    const inputTextUpdateContainer = new Input(['input'], 'text').getInputElement()
    const inputTextCreateContainer = new Input(['input'], 'text').getInputElement()
    const inputs = {inputColorCreateContainer, inputColorUpdateContainer, inputTextUpdateContainer, inputTextCreateContainer}
    return inputs
  }

  addMainButtons() {
    document.querySelector('.menu-buttons-container')?.append(this.buttons.raceButton, this.buttons.resetButton, this.buttons.generateButton)
    document.querySelector('.create-container')?.append(this.inputs.inputTextCreateContainer, this.inputs.inputColorCreateContainer, this.buttons.createButton)
    document.querySelector('.update-container')?.append(this.inputs.inputTextUpdateContainer, this.inputs.inputColorUpdateContainer, this.buttons.updateButton)
  }

  async addCars() {
    const allCars = await this.garage.getCars()
    const carArray = Object.values(allCars)
    carArray.forEach(car => {
      this.view.addCar(car)
    })
    this.view.renderFirsPage()
    this.view.setCarAmount(carArray.length)
  }

  async createCar(name:string, color: string) {
    const newCar = await this.garage.createCar({name, color})
    this.view.addCar(newCar)
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
    const name = this.inputs.inputTextCreateContainer.value
    if (name) {
      const color = this.inputs.inputColorCreateContainer.value
      this.createCar(name, color)
    }
  }

  handleUpdateButtonClick() {
    console.log('Update')
  }

  

}
