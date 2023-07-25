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
  private buttons : IMainButtons
  private inputs : IInputs

  private isRace: boolean
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
    this.view.renderButtons(this.buttons, this.inputs)
    this.view.winnersView.addWinners()
    this.view.setCarAmount(carArray.length)
    this.buttons.resetButton.disabled = true
  }

  async createCar(name:string, color: string) {
    const newCar = await this.garage.createCar({name, color})
    this.view.addCar(newCar, (e) => this.handleCarButtons(e))
  }

  async setNewWinner(id: number, time: number) {
    let winsNum = (await this.winners.getWinner(id)).wins
    if (!winsNum) {
      winsNum = 1
      await this.winners.setWinner({id: id, wins: winsNum, time: time})
    } else {
      winsNum += 1
      await this.winners.updateWinner({id: id, wins: winsNum, time: time})
    }
    this.view.winnersView.addWinners()
  }

  async handleRaceButtonClick() {
      const allCars = this.view.garageView.carsInPage
      const carArray = Object.values(allCars)
      const disableElements = Object.values(this.buttons).concat(Object.values(this.inputs))
      disableElements.forEach(btn => {
        if (!btn.className.includes('reset')) {
          btn.disabled = true
        } else {
          btn.disabled = false
        }
      })
      let winner: IWinnerForModal | null = null

  //запуск двигателя
      const timeArr = await Promise.all(
      carArray.map(async car => {
        this.isRace = true
        car.removeButton.disabled = true
        car.startButton.disabled = true
        car.stopButton.disabled = true
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
      await Promise.all(carArray.map(async (car, i) => {
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
          }
        }
        return 1
      }))
  }

  handleResetButtonClick() {
    const allCars = this.view.garageView.carsInPage
    const carArray = Object.values(allCars)
    Promise.all(carArray.map(async car => {
      car.animation.stopAnimation()
      await this.engine.startStopEngine(car.id, EngineStatus.stop)
      car.removeButton.disabled = false
      car.startButton.disabled = false
      this.view.removeDriveEffect(car)
    }))
    const disableElements = Object.values(this.buttons).concat(Object.values(this.inputs))
    disableElements.forEach(btn => btn.disabled = false)
    this.isRace = false
    this.buttons.resetButton.disabled = true
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
      const id = +e.target.id
      if (car) {
        if (classNames.includes('remove')) {
          this.view.removeCar(id)
          await this.garage.deleteCar(id)
          await this.winners.deleteWinner(id)
        } else if (classNames.includes('select')) {
          this.selectedCar = car
          this.inputs.inputTextUpdate.value = car.carName.textContent || ''
          this.inputs.inputColorUpdate.value = car.getParams().color
        } else if (classNames.includes('start')) {
          car.startButton.disabled = true
          car.stopButton.disabled = false
          const raceParams = await this.engine.startStopEngine(id, EngineStatus.start)
          car.animation.setAnimation(raceParams.distance, raceParams.velocity, car.carNode.clientWidth)
          const driveParams = await this.engine.drive(id)
          if (!driveParams.success) {
            car.animation.stopAnimation()
            setTimeout(() => {
              car.animation.removeAnimation()
              car.startButton.disabled = false
              car.stopButton.disabled = true
            }, 1000);
          } else {
            if ((await car.animation.animation.finished).playState === 'finished') {
              car.animation.removeAnimation()
              car.startButton.disabled = false
              car.stopButton.disabled = true
            }
          }
        } else if (classNames.includes('stop')) {
          car.animation.stopAnimation()
          car.startButton.disabled = false
          if(!this.isRace) {
            await this.engine.startStopEngine(id, EngineStatus.stop)
            car.animation.removeAnimation()
            car.stopButton.disabled = true
          }
        }
      }
    }
  }

}
