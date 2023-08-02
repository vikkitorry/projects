import { ICar, IEngine } from '../../../../types/types'
import { getCarImage } from '../../../../data/carSVG'
import { getFlagImage } from '../../../../data/flagSVG'
import { createHtmlElement } from '../../../helpers/createHtmlElement'
import { Button } from '../../../controllers/button'
import {CarAnimation} from './animation'
import './styles/styles.css'


export class Car  {

  id: number
  raceParams: IEngine
  animation: CarAnimation
  carNode: Element
  carName: Element
  removeButton: HTMLButtonElement
  startButton: HTMLButtonElement
  stopButton: HTMLButtonElement

  private params: ICar
  private raceContainer: HTMLElement
  private selectButton: HTMLButtonElement

  constructor( newCar: ICar, listenner: (e: Event) => void) {
    this.id = newCar.id || 0
    this.params = newCar
    this.raceParams = {velocity: 0, distance: 0}
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
    this.carNode.addEventListener('click', listenner)
    this.animation = new CarAnimation(this.raceContainer, this.id)
  }

  private createCarContainer(carData: ICar) {
    this.stopButton.disabled = true
    const mainButtonsContainer = createHtmlElement({tag: 'div', classNames: ['item-buttons-container']})
    const moveButtonsContainer = createHtmlElement({tag: 'div', classNames: ['item-move-buttons-container']})
    mainButtonsContainer.append(this.selectButton, this.removeButton)
    moveButtonsContainer.append(this.startButton, this.stopButton, this.carName)
    this.raceContainer.insertAdjacentHTML('afterbegin', getFlagImage())

    this.createCarImg(carData)
    this.carNode.append(mainButtonsContainer, moveButtonsContainer, this.raceContainer)
  }

  private createCarImg(carData: ICar) {
    const carImg = getCarImage(carData.color, carData.id)
    this.raceContainer.insertAdjacentHTML('afterbegin', carImg)
  }

  setNewCarColor(color: string) {
    const carCourpuse = this.raceContainer.querySelector('.car-courpuse')
    if (carCourpuse) {
      carCourpuse.setAttribute('fill', `${color}`)
    }
  }

  setNewParams(newName: string, newColor: string) {
    this.params.name = newName
    this.params.color = newColor
  }

  getParams() {
    return this.params
  }

  setRaceParams(params: IEngine) {
    this.raceParams = params
  }

  getRaceParams() {
    return this.raceParams
  }

  setStartStopButtonsStatus(isStartDisabled: boolean, IsStopDisabled: boolean) {
    this.startButton.disabled = isStartDisabled
    this.stopButton.disabled = IsStopDisabled
  }

}
