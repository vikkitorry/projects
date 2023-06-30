export enum LocalStorageName {
  name = 'aqww00044q'
}

export type ILevelOptions = {
  level: number;
  solution: string;
  description: ElementParams;
  boardMarkup: Array<ElementParams>;
  codeNode: string;
}

export enum LevelState {
  active = 'active',
  done = 'done',
  available = 'available'
}

export interface IlocalStorage {
  levels: LevelState[],
  currentLevel: number
}

export enum NumberOfLevels {
  number = 12
}

export interface ElementParams {
  tag: string,
  classNames: Array<string>,
  textContent: string,
  id?: string,
  child?: Array<ElementParams>,
}

export type GetLevelDataHandler = (data?: ILevelOptions) => void;