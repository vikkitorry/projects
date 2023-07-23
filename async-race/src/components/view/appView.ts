import { header } from '../view/header/header'
import { winners } from '../view/winners/winners'
import { ICar, IEngine } from '../../types/types'
import { GarageView } from './garage/garageView'
import {setAnimation} from '../helpers/animation'

export class AppView {

  public body: HTMLElement
  public garageView: GarageView

  constructor() {
    this.body = document.querySelector('body') as HTMLElement;
    this.garageView = new GarageView()
    this.render()
    this.toggleView()
    this.handleChangePageButtons()
  }

  render() {
    this.body.classList.add('garage-active')
    this.body.insertAdjacentHTML('beforeend', header)
    this.body.append(this.garageView.main)
    this.body.insertAdjacentHTML('beforeend', winners)
  }

  renderFirsPage() {
    this.garageView.createFirstPage()
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

  handleChangePageButtons() {
    this.garageView.nextPageButton.addEventListener('click', () => {
      const page = this.garageView.currentPage.textContent
      if (page && Math.ceil(this.garageView.allCars.length / 7) > +page) {
        this.garageView.setCurrentPage(+page, 1)
      }
    })
    this.garageView.previousPageButton.addEventListener('click', () => {
      const page = this.garageView.currentPage.textContent
      if (page && +page > 1) {
        this.garageView.setCurrentPage(+page, -1)
      }
    })
  }

  addCar(newCar: ICar) {
    this.garageView.addNewCar(newCar)
  }

  setCarAmount(amount: number) {
    this.garageView.carsAmount.textContent = `(${amount})`
  }

  addDriveEffect(id: number, raceParams: IEngine) {
    const carImg = this.garageView.container.querySelector(`[data-car="${id}"]`)
    const way = this.garageView.main.clientWidth
    if (carImg) {
      setAnimation(id, raceParams.distance, raceParams.velocity, way, carImg)
    }
  }

}
