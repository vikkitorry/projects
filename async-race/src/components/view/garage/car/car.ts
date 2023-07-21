import { ICar } from '../../../../types/types'
import { getCarImage } from '../../../data/carSVG'
import { getFlagImage } from '../../../data/flagSVG'
import { Button } from '../../../controllers/button'

export class Car {
  private carNode: Element
  private garageContainer: HTMLElement

  constructor(garageContainer: HTMLElement, newCar: ICar) {
    this.garageContainer = garageContainer
    this.carNode = document.createElement('div')
    this.createCarContainer(newCar)
    this.addCarListenner()
  }

  createCarContainer(carData: ICar) {
    this.carNode.classList.add('item-container')
    this.carNode.id = `${carData.id}`
    this.carNode.innerHTML = `
    <div class="item-buttons-container">
      <button class="select btn" id ="${carData.id}">Select</button>
      <button class="remove btn" id ="${carData.id}">Remove</button>
    </div>
    <div class="item-move-buttons-container">
      <button class="item-start" id ="${carData.id}">A</button>
      <button class="item-stop" id ="${carData.id}">B</button>
      <div class="item-name">${carData.name}</div>
    </div>
    <div class="race-container">
      ${getCarImage(carData.color)}
      ${getFlagImage()}
      </div>`
    this.garageContainer.append(this.carNode)
  }

  addCarListenner() {
    this.carNode.addEventListener('click', (e: Event) => {
      console.log(555555555555)
      console.log(e.target)
    })
  }


}
