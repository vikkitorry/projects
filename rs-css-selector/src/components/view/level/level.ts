import './level.css';
import { ILevelOptions } from '../../../types/types';
import { ElementCreator} from '../elementCreator'

export class GameLevel {

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
      new ElementCreator(levelData.description, taskDescription, false)
      levelData.boardMarkup.forEach((element) => {
        new ElementCreator(element, getGameWindow, true)
      })
      gethtmlWindow.innerHTML = levelData.codeNode;
    }
  }

  passLevelEffect() {
    const getGameWindow: NodeListOf<HTMLElement> = document.querySelectorAll('.game__window *')
    getGameWindow.forEach((el) => el.classList.add('fly'))
  }

  wrongAnswerEffect() {
    const gameContainer: HTMLElement | null = document.querySelector('.game')
    if (gameContainer) {
      gameContainer.classList.add('shake');
      gameContainer.addEventListener('animationend', () => {
        gameContainer.classList.remove('shake');
      });
    }
  }
}