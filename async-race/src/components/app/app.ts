import { AppView } from '../view/appView'
import { Button } from '../controllers/button'
import { Input } from '../controllers/input'
import { EngineApi } from '../api/engine'
import { GarageApi } from '../api/garage'
import { WinnersApi } from '../api/winners'
import { getRandomHexColor, getRandomCarFullName } from '../helpers/randomizers'
import { IMainButtons, IInputs } from '../../types/types'
import { EngineStatus, IWinnerForModal } from '../api/serverTypes'
import { Car } from '../view/garage/car/car'

export class App {
  private view : AppView
  private garage : GarageApi
  private winners : WinnersApi
  private engine : EngineApi
  private isRace: boolean
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
    this.isRace = false
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
  }

  async setNewWinner(id: number, time: number) {
    const wins = (await this.winners.getWinner(id)).wins
    await this.winners.setWinner({id: id, wins: wins, time: time})
  }

  async handleRaceButtonClick() {
    const allCars = this.view.garageView.carsInPage
    const carArray = Object.values(allCars)
    const disableElements = Object.values(this.buttons).concat(Object.values(this.inputs))
    disableElements.forEach(btn => {
      if (btn !== this.buttons.resetButton) {
        btn.disabled = true
      }
    })
    let winner: IWinnerForModal | null = null

//запуск двигателя
    const timeArr = await Promise.all(
    carArray.map(async car => {
      this.isRace = true
      car.removeButton.disabled = true
      car.startButton.disabled = true
      const raceParams = await this.engine.startStopEngine(car.id, EngineStatus.start)
      car.setRaceParams(raceParams)
      const time: number = Math.round(raceParams.distance / raceParams.velocity) / 1000
      return time
    }))
//добавление эффекта
    carArray.forEach(car => {
      this.view.addDriveEffect(car, car.getRaceParams())
    })
//состояние двигателя
    Promise.all(carArray.map(async (car, i) => {
      // переписать есть баги и повтор
      const isDrive = await this.engine.drive(car.id)
      if (!isDrive.success) {
        car.animation.stopAnimation()
      } else {
        if ((await car.animation.animation.finished).playState === 'finished') {
          const carParams = car.getParams()
          if(!winner && carParams.id) {
            winner = {id: carParams.id, name: carParams.name, time: timeArr[i]}
            this.view.modalWindow.showModal(winner.name, winner.time)
            this.handleResetButtonClick()
            this.setNewWinner(carParams.id, winner.time)
          }
        } else if (i === carArray.length - 1) {
            this.handleResetButtonClick()
        }
      }
      return 1
    }))
  }

  handleResetButtonClick() {

    const disableElements = Object.values(this.buttons).concat(Object.values(this.inputs))
    disableElements.forEach(btn => btn.disabled = false)

    const allCars = this.view.garageView.carsInPage
    const carArray = Object.values(allCars)
    Promise.all(carArray.map(async car => {
      await this.engine.startStopEngine(car.id, EngineStatus.stop)
      car.startButton.disabled = false
      this.view.removeDriveEffect(car)
    }))
    this.isRace = false
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
          const driveParams = await this.engine.drive(+e.target.id)
          if (!driveParams.success) {
            car.animation.stopAnimation()
          }
        } else if (classNames.includes('stop')) {
          car.animation.stopAnimation()
          if(!this.isRace) {
            await this.engine.startStopEngine(+e.target.id, EngineStatus.stop)
            car.animation.removeAnimation()
          }
        }
      }
    }
  }

}
