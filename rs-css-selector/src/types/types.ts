export type ILevelOptions = {
  level: number;
  solution: string;
  prompt: ElementParams;
  description: ElementParams;
  boardMarkup: Array<ElementParams>;
  codeNode: string;
}
/*
export type LevelArticle = {
  levelName: string;
  done: boolean;
}*/

export interface ElementParams {
  tag: string,
  classNames: Array<string>,
  textContent: string,
  id?: string,
  child?: ElementParams,
}
/*
export enum Description {
  tag = 'p',
  classNames = ['task-desc'],
  textContent = "Select the moving object.",
}*/

export type GetLevelDataHandler = (data?: ILevelOptions) => void;