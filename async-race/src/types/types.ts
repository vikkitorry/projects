export interface ICar {
  name: string;
  color: string;
  id?: number;
}

export interface IWinner {
  id: number;
  wins: number;
  time: string;
}

export interface IEngine {
  velocity: number;
  distance: number;
}

export interface IElement {
  tag: string;
  classNames: string[];
  textContent?: string;
  id?: number;
}

export interface IMainButtons {
  raceButton: HTMLButtonElement;
  resetButton: HTMLButtonElement;
  generateButton: HTMLButtonElement;
  createButton: HTMLButtonElement;
  updateButton: HTMLButtonElement
}

export interface IInputs {
  inputColorCreate: HTMLInputElement;
  inputColorUpdate: HTMLInputElement;
  inputTextUpdate: HTMLInputElement;
  inputTextCreate: HTMLInputElement;
}

export const winnersLimit = 7

export const numberOfCars = 100