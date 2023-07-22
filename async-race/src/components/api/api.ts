import { EngineApi } from '../api/engine'
import { GarageApi } from '../api/garage'
import { WinnersApi } from '../api/winners'

export class Api {
  private garage : GarageApi
  private winners : WinnersApi
  private engine : EngineApi

  constructor() {
    this.garage = new GarageApi
    this.engine = new EngineApi
    this.winners = new WinnersApi
  }

  async getCars() {
    return await this.garage.getCars()
  }
  
}