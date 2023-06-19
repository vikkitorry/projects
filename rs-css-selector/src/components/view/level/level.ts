import './level.css';
import { ILevelOptions } from '../../../types/types';
import { ElementCreator } from '../elementCreator'

export class GameLevel {

  constructor (data: ILevelOptions) {
    this.draw(data)
  }

  draw(levelData: ILevelOptions): void {
    console.log(document.querySelector('.html-window'))
    const taskDescription: Element | null = document.querySelector('.task-desc-container')
    const gethtmlWindow: Element | null = document.querySelector('.html-window')
    const getGameWindow: Element | null = document.querySelector('.game__window')
    console.log()
    if (taskDescription && gethtmlWindow && levelData && getGameWindow) {
      gethtmlWindow.innerHTML = ''
      taskDescription.innerHTML = ''
      getGameWindow.innerHTML = ''
      new ElementCreator(levelData.description, taskDescription)
      levelData.boardMarkup.forEach((tags) => {
        new ElementCreator(tags, gethtmlWindow)
      })
        //проверка из локал на то, пройден и уровень, добавление эффектов
        const element = document.createElement('cat')
        getGameWindow.append(element );

    }

  }
}