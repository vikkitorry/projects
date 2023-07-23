import { ICar } from '../../../../types/types'
import { getCarImage } from '../../../data/carSVG'
import { getFlagImage } from '../../../data/flagSVG'
import { createHtmlElement } from '../../../helpers/createHtmlElement'
import { EngineApi } from '../../../api/engine'
import { GarageApi } from '../../../api/garage'
import { Button } from '../../../controllers/button'
import {CarAnimation} from '../../../helpers/animation'
import {EngineStatus} from '../../../api/serverTypes'


export class Car  {
  private garage : GarageApi
  private engine : EngineApi
  public id: number
  public animation: CarAnimation

  public carNode: Element
  public carName: Element
  private raceContainer: HTMLElement
  private selectButton: HTMLButtonElement
  private removeButton: HTMLButtonElement
  private startButton: HTMLButtonElement
  private stopButton: HTMLButtonElement

  constructor( newCar: ICar) {
    this.id = newCar.id || 0
    this.garage = new GarageApi
    this.engine = new EngineApi
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
    this.handleCarButtons()
    this.animation = new CarAnimation(this.raceContainer, this.id)
  }

  private createCarContainer(carData: ICar) {
    const mainButtonsContainer = createHtmlElement({tag: 'div', classNames: ['item-buttons-container']})
    const moveButtonsContainer = createHtmlElement({tag: 'div', classNames: ['item-move-buttons-container']})
    mainButtonsContainer.append(this.selectButton, this.removeButton)
    moveButtonsContainer.append(this.startButton, this.stopButton, this.carName)
    this.raceContainer.insertAdjacentHTML('afterbegin', getFlagImage())

    this.setCarColor(carData)
    this.carNode.append(mainButtonsContainer, moveButtonsContainer, this.raceContainer)
  }

  setCarColor(carData: ICar) {
    const carImg = getCarImage(carData.color, carData.id)
    this.raceContainer.insertAdjacentHTML('afterbegin', carImg)
  }

  getCarNode() {
    return this.carNode
  }

  private handleCarButtons() {
    this.carNode.addEventListener('click', async (e: Event) => {
      if (e?.target instanceof HTMLButtonElement) {
        const classNames = e.target.className
        if (classNames.includes('remove')) {
          this.carNode.remove()
          this.garage.deleteCar(+e.target.id)
        } else if (classNames.includes('select')) {
          //console.log('select')
        } else if (classNames.includes('start')) {
          const a = await this.engine.startStopEngine(+e.target.id, EngineStatus.start)
          console.log(a)
        } else if (classNames.includes('stop')) {
          this.animation.stopAnimation()
          const a = await this.engine.startStopEngine(+e.target.id, EngineStatus.stop)
          console.log(a)
        }
      }
    })
  }



}
