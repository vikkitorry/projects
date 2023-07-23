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
  inputColorCreateContainer: HTMLInputElement;
  inputColorUpdateContainer: HTMLInputElement;
  inputTextUpdateContainer: HTMLInputElement;
  inputTextCreateContainer: HTMLInputElement;
}