import './level.css';
import { ILevelOptions } from '../../../types/types';
import { ElementCreator} from '../elementCreator'

export class GameLevel {

  draw(levelData: ILevelOptions): void {
    const taskDescription: Element | null = document.querySelector('.task-desc-container')
    const htmlWindow: Element | null = document.querySelector('.html-window')
    const gameWindow: Element | null = document.querySelector('.game__window')
    const promptText: Element | null = document.querySelector('.prompt-text')

    if (taskDescription && htmlWindow && levelData && gameWindow && promptText ) {
      htmlWindow.innerHTML = ''
      taskDescription.innerHTML = ''
      gameWindow.innerHTML = ''
      promptText.textContent = levelData.solution
      new ElementCreator(levelData.description, taskDescription, false)
      levelData.boardMarkup.forEach((element) => {
        new ElementCreator(element, gameWindow, true)
      })
      htmlWindow.innerHTML = levelData.codeNode;
    }
  }

  passLevelEffect() {
    const gameWindow: NodeListOf<HTMLElement> = document.querySelectorAll('.game__window *')
    gameWindow.forEach((el) => el.classList.add('fly'))
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