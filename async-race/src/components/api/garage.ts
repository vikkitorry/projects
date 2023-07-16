import { ICar, URL, Method } from '../../types/types'

export class GarageApi {

  async createCar(carData: ICar): Promise<void> {
    await fetch(URL.garage, {
      method: Method.post,
      body: JSON.stringify(carData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
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

  async updateCar(id: number, carData: ICar): Promise<void> {
    await fetch(`${URL.garage}/${id}`, {
      method: Method.put,
      body: JSON.stringify(carData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
