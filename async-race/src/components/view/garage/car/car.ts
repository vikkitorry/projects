import { ICar } from '../../../../types/types'
import { getCarImage } from '../../../data/carSVG'
import { getFlagImage } from '../../../data/flagSVG'
import { createHtmlElement } from '../../../helpers/createHtmlElement'
import { EngineApi } from '../../../api/engine'
import { GarageApi } from '../../../api/garage'
import { Button } from '../../../controllers/button'

export class Car {
  private garage : GarageApi
  private engine : EngineApi

  public carNode: Element
  public carName: Element
  private raceContainer: Element
  private garageContainer: HTMLElement
  private selectButton: HTMLButtonElement
  private removeButton: HTMLButtonElement
  private startButton: HTMLButtonElement
  private stopButton: HTMLButtonElement

  constructor(garageContainer: HTMLElement, newCar: ICar) {
    this.garage = new GarageApi
    this.engine = new EngineApi
    this.garageContainer = garageContainer
    this.raceContainer = createHtmlElement({tag: 'div', classNames: ['race-container']})
    this.carNode = createHtmlElement({tag: 'div', classNames: ['item-container'], id: newCar.id})
    this.carName = createHtmlElement({tag: 'div', classNames: ['item-name'], textContent: newCar.name})
    this.selectButton = new Button({
      tag: 'button',
      classNames: ['select', 'btn'],
      textContent: 'Select',
      id: newCar.id}).getButton()
    this.removeButton = new Button({
      tag: 'button',
      classNames: ['remove', 'btn'],
      textContent: 'Remove',
      id: newCar.id}).getButton()
    this.startButton = new Button({
      tag: 'button',
      classNames: ['item-start'],
      textContent: 'A',
      id: newCar.id}).getButton()
    this.stopButton = new Button({
      tag: 'button',
        classNames: ['item-stop'],
        textContent: 'B',
        id: newCar.id}).getButton()
    this.createCarContainer(newCar)
    this.addListener()
  }

  private createCarContainer(carData: ICar) {
    const mainButtonsContainer = createHtmlElement({tag: 'div', classNames: ['item-buttons-container']})
    const moveButtonsContainer = createHtmlElement({tag: 'div', classNames: ['item-move-buttons-container']})
    mainButtonsContainer.append(this.selectButton, this.removeButton)
    moveButtonsContainer.append(this.startButton, this.stopButton, this.carName)
    this.raceContainer.insertAdjacentHTML('afterbegin', getFlagImage())

    this.setCarColor(carData)
    this.carNode.append(mainButtonsContainer, moveButtonsContainer, this.raceContainer)
    this.garageContainer.prepend(this.carNode)
  }

  setCarColor(carData: ICar) {
    const car = getCarImage(carData.color, carData.id)
    this.raceContainer.insertAdjacentHTML('afterbegin', car)
  }

  getCarNode() {
    return this.carNode
  }

  private addListener() {
    this.carNode.addEventListener('click', (e: Event) => {
      if (e?.target instanceof HTMLButtonElement) {
        const classNames = e.target.className
        if (classNames.includes('remove')) {
          this.carNode.remove()
          this.garage.deleteCar(+e.target.id)
        } else if (classNames.includes('select')) {
          console.log('select')
        } else if (classNames.includes('start') || classNames.includes('stop')) {
          //const enjineStatus = classNames.includes('start')? EngineStatus.start : EngineStatus.stop
          //this.startStopCar(+e.target.id, enjineStatus)
        }
      }
    })
  }

}
