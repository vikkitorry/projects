import './level.css';
import { ILevelOptions } from '../../../types/types';
import { ElementCreator } from '../elementCreator'

export class GameLevel {

  constructor (data: ILevelOptions) {
    this.draw(data)
  }

  draw(levelData: ILevelOptions): void {

    const taskDescription: Element | null = document.querySelector('.task-desc-container')
    const gethtmlWindow: Element | null = document.querySelector('.html-window')
    const getGameWindow: Element | null = document.querySelector('.game__window')
    const promptText: Element | null = document.querySelector('.prompt-text')

    if (taskDescription && gethtmlWindow && levelData && getGameWindow && promptText ) {
      gethtmlWindow.innerHTML = ''
      taskDescription.innerHTML = ''
      getGameWindow.innerHTML = ''
      promptText.textContent = levelData.solution
      new ElementCreator(levelData.description, taskDescription)

      levelData.boardMarkup.forEach((element) => {
        new ElementCreator(element, getGameWindow)
      })
        //проверка из локал на то, пройден и уровень, добавление эффектов
        gethtmlWindow.innerHTML = levelData.codeNode;


    }
  }
}