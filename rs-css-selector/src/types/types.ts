export const LOCAL_STORAGE_GAME_STATE_KEY = 'vikkiTorry'

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
  available = 'available',
  withClue = 'clue'
}

//переделать массив из объектов (айдишник уровня и стейт уровня)
export interface IlocalStorage {
  levels: LevelState[],
  currentLevel: number
}

export const LEVELS_COUNT = 12

export interface ElementParams {
  tag: string,
  classNames: Array<string>,
  textContent: string,
  id?: string,
  child?: Array<ElementParams>,
}

export type GetLevelDataHandler = (data?: ILevelOptions) => void;