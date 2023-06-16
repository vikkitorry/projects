export type ILevelOptions = {
  level: number;
  solution: string;
  prompt: ElementParams;
  description: ElementParams;
  boardMarkup: Array<ElementParams>;
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