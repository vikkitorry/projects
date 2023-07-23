import { URL, Method } from './serverTypes'
import { ICar } from '../../types/types'

export class GarageApi {

  async createCar(carData: ICar): Promise<ICar> {
    const response = await fetch(URL.garage, {
      method: Method.post,
      body: JSON.stringify(carData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const car = await response.json()

    return car
  }

  async getCar(id: number): Promise<ICar> {
    return (await fetch(`${URL.garage}/${id}`)).json();
  }

  async getCars(): Promise<ICar> {
    return (await fetch(`${URL.garage}`)).json();
  }

  async deleteCar(id: number): Promise<void> {
    await fetch(`${URL.garage}/${id}`, {
      method: Method.delete,
    });
  }

  async updateCar(carData: ICar): Promise<void> {
    await fetch(`${URL.garage}/${carData.id}`, {
      method: Method.put,
      body: JSON.stringify(carData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
