import { header } from '../view/header/header'
import { garage } from '../view/garage/garage'
import { winners } from '../view/winners/winners'
import { Car } from '../view/garage/car/car'
import { ICar } from '../../types/types'

export class AppView {

  public body: HTMLElement
  public garageContainer: HTMLElement

  constructor() {
    this.body = document.querySelector('body') as HTMLElement;
    this.render()
    this.garageContainer = document.querySelector('.garage-container') as HTMLElement;
    this.toggleView()
  }

  render() {
    this.body.classList.add('garage-active')
    this.body.insertAdjacentHTML('beforeend', header)
    this.body.insertAdjacentHTML('beforeend', garage)
    this.body.insertAdjacentHTML('beforeend', winners)
  }

  toggleView() {
    this.body.addEventListener('click', (e) => {
      if (e.target instanceof HTMLElement) {
        if (e.target?.className.includes('to-garage')) {
          this.body.classList.remove('winners-active')
          this.body.classList.add('garage-active')
        }
        if (e.target?.className.includes('to-winners')) {
          this.body.classList.remove('garage-active')
          this.body.classList.add('winners-active')
        }
      }
    })
  }

  addCar(newCar: ICar) {
    const car = new Car(this.garageContainer, newCar)
  }
}
