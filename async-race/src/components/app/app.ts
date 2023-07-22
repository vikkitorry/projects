import { AppView } from '../view/appView'
import { Button } from '../controllers/button'
import { Input } from '../controllers/input'
import { EngineApi } from '../api/engine'
import { GarageApi } from '../api/garage'
import { WinnersApi } from '../api/winners'
import { getRandomHexColor, getRandomCarFullName } from '../helpers/randomizers'
import { IEngine } from '../../types/types'
import { EngineStatus } from '../api/serverTypes'
//import { CarListener } from './carListener'

export class App {
  private view : AppView
  private garage : GarageApi
  private winners : WinnersApi
  private engine : EngineApi

  public raceButton: HTMLButtonElement
  private resetButton: HTMLButtonElement
  private generateButton: HTMLButtonElement
  private createButton: HTMLButtonElement
  private updateButton: HTMLButtonElement
  private inputColorCreateContainer: HTMLInputElement
  private inputColorUpdateContainer: HTMLInputElement
  private inputTextUpdateContainer: HTMLInputElement
  private inputTextCreateContainer: HTMLInputElement

  constructor() {
    this.view = new AppView
    this.garage = new GarageApi
    this.engine = new EngineApi
    this.winners = new WinnersApi

    this.raceButton = new Button({
        tag: 'button',
        classNames: ['race', 'btn-menu'],
        textContent: 'Race'},
      () => this.handleRaceButtonClick()).getButton()

    this.resetButton = new Button({
        tag: 'button',
        classNames: ['reset', 'btn-menu'],
        textContent: 'Reset'},
      () => this.handleResetButtonClick()).getButton()

    this.generateButton = new Button({
        tag: 'button',
        classNames: ['generate-cars', 'btn-menu'],
        textContent: 'Generate'},
      () => this.handleGenerateButtonClick()).getButton()

    this.createButton = new Button({
        tag: 'button',
        classNames: ['create'],
        textContent: 'Create'},
      () => this.handleCreateButtonClick()).getButton()

    this.updateButton = new Button({
        tag: 'button',
        classNames: ['update'],
        textContent: 'Update'},
        () => this.handleUpdateButtonClick()).getButton()

    this.inputColorCreateContainer = new Input(['rgb', 'create-color'], 'color', () => this.handleInputUserSelectedColor()).getInputElement()
    this.inputColorUpdateContainer = new Input(['rgb', 'update-color'], 'color', () => this.handleInputUserSelectedColor()).getInputElement()
    this.inputTextUpdateContainer = new Input(['input'], 'text', () => this.handleInputUserSelectedColor()).getInputElement()
    this.inputTextCreateContainer = new Input(['input'], 'text', () => this.handleInputUserSelectedColor()).getInputElement()
  }

  addMainButtons() {
    document.querySelector('.menu-buttons-container')?.append(this.raceButton, this.resetButton, this.generateButton)
    document.querySelector('.create-container')?.append(this.inputTextCreateContainer, this.inputColorCreateContainer, this.createButton)
    document.querySelector('.update-container')?.append(this.inputTextUpdateContainer, this.inputColorUpdateContainer, this.updateButton)
  }

  async addCars() {
    const allCars = await this.garage.getCars()
    const carArray = Object.values(allCars)
    carArray.forEach(car => {
      this.view.addCar(car)
    })
    this.view.setCarAmount(carArray.length)
  }

  handleInputUserSelectedColor(){
    console.log(555)
  }

  handleRaceButtonClick() {
    console.log('Race')
  }

  handleResetButtonClick() {
    console.log('Reset')
  }

  handleGenerateButtonClick() {
    new Array(100).fill(1).map( () => this.createCar(getRandomCarFullName(), getRandomHexColor()))
  }

  handleCreateButtonClick() {
    const name = this.inputTextCreateContainer.value
    if (name) {
      const color = this.inputColorCreateContainer.value
      this.createCar(name, color)
    }
  }

  async createCar(name:string, color: string) {
    const newCar = await this.garage.createCar({name, color})
    this.view.addCar(newCar)
    const allCars = await this.garage.getCars()
    this.view.setCarAmount(Object.values(allCars).length)
  }

  handleUpdateButtonClick() {
    console.log('Update')
  }

  // async startStopCar(id: number, enjineStatus: EngineStatus.start | EngineStatus.stop) {
  //   const raceParams = await this.engine.startStopEngine(id, enjineStatus)
  //   //this.view.addDriveEffect([id])
  //   console.log(raceParams)
  // }


}
