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
  levels: string[]
}

export enum NumberOfLevels {
  number = 12
}

export interface ElementParams {
  tag: string,
  classNames: Array<string>,
  textContent: string,
  id?: string,
  child?: ElementParams,
}

export type GetLevelDataHandler = (data?: ILevelOptions) => void;