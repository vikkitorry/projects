export class WinnersApi {

}

/*
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

  public raceButton: Button
  private resetButton: Button
  private generateButton: Button
  private createButton: Button
  private updateButton: Button
  private inputColorCreateContainer: Input
  private inputColorUpdateContainer: Input
  private inputTextUpdateContainer: Input
  private inputTextCreateContainer: Input

  constructor() {
    this.view = new AppView
    this.garage = new GarageApi
    this.engine = new EngineApi
    this.winners = new WinnersApi
    this.raceButton = new Button(['race', 'btn-menu'], 'Race', () => this.handleRaceButtonClick())
    this.resetButton = new Button(['reset', 'btn-menu'], 'Reset', () => this.handleResetButtonClick())
    this.generateButton = new Button(['generate-cars', 'btn-menu'], 'Generate', () => this.handleGenerateButtonClick())
    this.createButton = new Button(['create'], 'Create', () => this.handleCreateButtonClick())
    this.updateButton = new Button(['update'], 'Update', () => this.handleUpdateButtonClick())
    this.inputColorCreateContainer = new Input(['rgb'], 'color', () => this.handleInputUserSelectedColor())
    this.inputColorUpdateContainer = new Input(['rgb'], 'color', () => this.handleInputUserSelectedColor())
    this.inputTextUpdateContainer = new Input(['input'], 'text', () => this.handleInputUserSelectedColor())
    this.inputTextCreateContainer = new Input(['input'], 'text', () => this.handleInputUserSelectedColor())
  }

  addMainButtons() {
    document.querySelector('.menu-buttons-container')?.append(
      this.raceButton.getButton(),
      this.resetButton.getButton(),
      this.generateButton.getButton())
    document.querySelector('.create-container')?.append(
      this.inputTextCreateContainer.getInputElement(),
      this.inputColorCreateContainer.getInputElement(),
      this.createButton.getButton())
    document.querySelector('.update-container')?.append(
      this.inputTextUpdateContainer.getInputElement(),
      this.inputColorUpdateContainer.getInputElement(),
      this.updateButton.getButton())
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

  handleCreateButtonClick() {
    //this.garage.createCar()
    console.log('Create', this.inputColorCreateContainer)
  }

  handleUpdateButtonClick() {
    console.log('Update')
  }

}
*/