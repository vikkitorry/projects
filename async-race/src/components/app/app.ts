import { AppView } from '../view/appView'
import { Button } from '../controllers/button'
import { Input } from '../controllers/input'
import { EngineApi } from '../api/engine'
import { GarageApi } from '../api/garage'
import { WinnersApi } from '../api/winners'

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
    this.raceButton = new Button(['race', 'btn-menu'], 'Race', () => this.handleRaceButtonClick()).getButton()
    this.resetButton = new Button(['reset', 'btn-menu'], 'Reset', () => this.handleResetButtonClick()).getButton()
    this.generateButton = new Button(['generate-cars', 'btn-menu'], 'Generate', () => this.handleGenerateButtonClick()).getButton()
    this.createButton = new Button(['create'], 'Create', () => this.handleCreateButtonClick()).getButton()
    this.updateButton = new Button(['update'], 'Update', () => this.handleUpdateButtonClick()).getButton()
    this.inputColorCreateContainer = new Input(['rgb'], 'color', () => this.handleInputUserSelectedColor()).getInputElement()
    this.inputColorUpdateContainer = new Input(['rgb'], 'color', () => this.handleInputUserSelectedColor()).getInputElement()
    this.inputTextUpdateContainer = new Input(['input'], 'text', () => this.handleInputUserSelectedColor()).getInputElement()
    this.inputTextCreateContainer = new Input(['input'], 'text', () => this.handleInputUserSelectedColor()).getInputElement()
  }

  addMainButtons() {
    document.querySelector('.menu-buttons-container')?.append(this.raceButton, this.resetButton, this.generateButton)
    document.querySelector('.create-container')?.append(this.inputTextCreateContainer, this.inputColorCreateContainer, this.createButton)
    document.querySelector('.update-container')?.append(this.inputTextUpdateContainer, this.inputColorUpdateContainer, this.updateButton)
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
    console.log('Generate')
  }

  async handleCreateButtonClick() {
    const name = this.inputTextCreateContainer.value
    if (name) {
      const color = this.inputColorCreateContainer.value
      const newCar = await this.garage.createCar({name, color})
      this.view.addCar(newCar)
    }
  }

  handleUpdateButtonClick() {
    console.log('Update')
  }

}
