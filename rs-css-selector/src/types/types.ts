export type ILevelOptions = {
  level: number;
  prompt: string;
  descriptiom: string;
  boardMarkup: Array<HTMLElement>;
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
}


export type GetLevelDataHandler = (data?: ILevelOptions) => void;