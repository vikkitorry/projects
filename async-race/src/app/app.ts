import { AppView } from '../components/view/appView'
import { Button } from '../components/controllers/button'
import { Input } from '../components/controllers/input'
import { EngineApi } from '../api/engine'
import { GarageApi } from '../api/garage'
import { WinnersApi } from '../api/winners'
import { getRandomHexColor, getRandomCarFullName } from '../components/helpers/randomizers'
import { IMainButtons, IInputs, numberOfCars} from '../types/types'
import { EngineStatus, IWinnerForModal } from '../api/serverTypes'
import { Car } from '../components/view/garage/car/car'

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

  private createMainButtons() {
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

  private createInputElements() {
    const inputColorCreate = new Input(['rgb', 'create-color'], 'color').getInputElement()
    const inputColorUpdate = new Input(['rgb', 'update-color'], 'color').getInputElement()
    const inputTextUpdate = new Input(['input'], 'text').getInputElement()
    const inputTextCreate = new Input(['input'], 'text').getInputElement()

    return {inputColorCreate, inputColorUpdate, inputTextUpdate, inputTextCreate}
  }

  private async createGarage() {
    try {
      const allCars = await this.garage.getCars()
      const carArray = Object.values(allCars)
      carArray.forEach(car => {
        this.view.addCar(car, (e) => this.handleCarButtons(e))
      })
      this.view.renderButtons(this.buttons, this.inputs)
      this.view.setWinners()
      this.view.setCarAmount(carArray.length)
      this.buttons.resetButton.disabled = true
    } catch(err) {
      this.view.setModalError('You need to start server :)')
    }
  }

  private async createCar(name:string, color: string) {
    try {
      const newCar = await this.garage.createCar({name, color})
      this.view.addCar(newCar, (e) => this.handleCarButtons(e))
    } catch(err) {
      this.view.setModalError('Unable to create car')
    }
  }

  private async updateWinnersData(id: number, time: number) {
    try {
      let winsNum = (await this.winners.getWinner(id)).wins
      if (!winsNum) {
        winsNum = 1
        await this.winners.setWinner({id: id, wins: winsNum, time: time})
      } else {
        winsNum += 1
        await this.winners.updateWinner({id: id, wins: winsNum, time: time})
      }
      this.view.setWinners()
    } catch(err) {
      this.view.setModalError('Unable to update winners')
    }
  }

  private async startEngineAndGetTimeParams(carsArray : Car[]): Promise<number[] | undefined>  {
    try {
      const timeArr = await Promise.all(
        carsArray.map(async car => {
          this.isRace = true
          car.removeButton.disabled = true
          car.setStartStopButtonsStatus(true, true)
          const raceParams = await this.engine.switchEngineMode(car.id, EngineStatus.start)
          car.setRaceParams(raceParams)
          const time = Math.round(raceParams.distance / raceParams.velocity) / 1000
          return time
        }))
      return timeArr
    } catch(err) {
      this.view.setModalError('All cars is broken')
    }
  }

  private async checkEngineStatus(carsArray : Car[], timeArr: number[]) {
    try {
      let winner: IWinnerForModal | null = null
      await Promise.all(carsArray.map(async (car, i) => {
        const isDrive = await this.engine.drive(car.id)
        if (!isDrive.success) {
          car.animation.stopAnimation()
        } else {
          if ((await car.animation.animation.finished).playState === 'finished') {
            const carParams = car.getParams()
            if(!winner && carParams.id) {
              winner = {id: carParams.id, name: carParams.name, time: timeArr[i]}
              this.view.setModalWinner(winner.name, winner.time)
              this.handleResetButtonClick()
              this.updateWinnersData(carParams.id, winner.time)
              this.view.switchRaceMode(false)
            }
          }
        }
      }))
    } catch(err) {
      this.view.setModalError('All cars is broken')
    }
  }

  async handleRaceButtonClick() {
    try {
      const allCars = this.view.getCarsInPage()
      this.view.switchRaceMode(true)
      const carArray = Object.values(allCars)
      const disableElements = [...Object.values(this.buttons), ...(Object.values(this.inputs))]
      disableElements.forEach(btn => {
        !btn.className.includes('reset') ? btn.disabled = true : btn.disabled = false
      })
      const timeArr = await this.startEngineAndGetTimeParams(carArray)
      carArray.forEach(car => {
        this.view.addDriveEffect(car, car.getRaceParams())
      })
      if (timeArr) {
        await this.checkEngineStatus(carArray, timeArr)
      }
    } catch(err) {
      this.view.setModalError('Cars unable to drive')
    }
  }

  handleResetButtonClick() {
    try {
      const allCars = this.view.getCarsInPage()
      const carArray = Object.values(allCars)
      Promise.all(carArray.map(async car => {
        car.animation.stopAnimation()
        await this.engine.switchEngineMode(car.id, EngineStatus.stop)
        car.removeButton.disabled = false
        car.setStartStopButtonsStatus(false, true)
        this.view.removeDriveEffect(car)
      }))
      const disableElements = [...Object.values(this.buttons), ...Object.values(this.inputs)]
      disableElements.forEach(btn => btn.disabled = false)
      this.isRace = false
      this.view.switchRaceMode(false)
      this.buttons.resetButton.disabled = true
    } catch(err) {
      //this.view.setModalError((err as Error).message)
      this.view.setModalError('Unable to reset race')
    }
  }

  handleGenerateButtonClick() {
    new Array(numberOfCars).fill(1).map( () => this.createCar(getRandomCarFullName(), getRandomHexColor()))
  }

  handleCreateButtonClick() {
    try {
      const name = this.inputs.inputTextCreate.value
      if (name) {
        const color = this.inputs.inputColorCreate.value
        this.createCar(name, color)
      }
    } catch(err) {
      this.view.setModalError('Unvalid input values')
    }
  }

  async handleUpdateButtonClick() {
    try {
      if (this.selectedCar) {
        this.selectedCar.setNewParams(
          this.inputs.inputTextUpdate.value,
          this.inputs.inputColorUpdate.value)
        await this.garage.updateCar(this.selectedCar.getParams())
        this.view.changeCarView(this.selectedCar)
        this.inputs.inputTextUpdate.value = ''
        this.selectedCar = null
      }
    } catch(err) {
      this.view.setModalError('Can not update car')
    }
  }

  async handleCarButtons(e: Event) {
    try {
      if (e?.target instanceof HTMLButtonElement) {
        const classNames = e.target.className
        const car = this.view.getCar(+e.target.id)
        const id = +e.target.id
        if (car) {
          if (classNames.includes('remove')) {
            await this.handleRemoveButton(id)
          } else if (classNames.includes('select')) {
            this.handleSelectButton(car)
          } else if (classNames.includes('start')) {
            await this.handleStartButton(car, id)
          } else if (classNames.includes('stop')) {
            await this.handleStoptButton(car, id)
          }
        }
      }
    } catch(err) {
      this.view.setModalError('Car has problem')
    }
  }

  private async handleRemoveButton(id: number) {
    try {
      this.view.removeCar(id)
      await this.garage.deleteCar(id)
      await this.winners.deleteWinner(id)
    } catch(err) {
      this.view.setModalError('Unable to remove Car')
    }
  }

  private handleSelectButton(car: Car) {
    try {
      this.selectedCar = car
      this.inputs.inputTextUpdate.value = car.carName.textContent || ''
      this.inputs.inputColorUpdate.value = car.getParams().color
    } catch(err) {
      this.view.setModalError('Unable to select Car')
    }
  }

  private async handleStartButton(car: Car, id: number) {
    try {
      car.setStartStopButtonsStatus(true, false)
      const raceParams = await this.engine.switchEngineMode(id, EngineStatus.start)
      car.animation.setAnimation(raceParams.distance, raceParams.velocity, car.carNode.clientWidth)
      const driveParams = await this.engine.drive(id)
      if (!driveParams.success) {
        car.animation.stopAnimation()
        setTimeout(() => {
          car.animation.removeAnimation()
        }, 1000);
      } else {
        if ((await car.animation.animation.finished).playState === 'finished') {
          car.animation.removeAnimation()
        }
      }
      car.setStartStopButtonsStatus(false, true)
    } catch(err) {
      this.view.setModalError('Unable to start move')
    }
  }

  private async handleStoptButton(car: Car, id: number) {
    try {
      car.animation.stopAnimation()
      car.setStartStopButtonsStatus(false, true)
      if(!this.isRace) {
        await this.engine.switchEngineMode(id, EngineStatus.stop)
        car.animation.removeAnimation()
      }
    } catch(err) {
    this.view.setModalError('Car has problem with stop')
    }
  }

}
