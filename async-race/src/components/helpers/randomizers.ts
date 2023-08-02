import { carBrand, carModel } from '../../data/carsNamesData'

export function getRandomElements(arr: Array<string>): string {
  const index: number = Math.floor(Math.random() * arr.length);
  return arr[index]
}

export function getRandomHexColor(): string {
  return  '#' + Math.random().toString(16).slice(3, 9);
}

export function getRandomCarFullName(): string {
  return `${getRandomElements(carBrand)} ${getRandomElements(carModel)}`;
}
