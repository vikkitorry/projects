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

export interface Element {
  tag: string;
  classNames: string[];
  textContent?: string;
  id?: number;
}
