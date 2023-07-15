import { GameLevel } from './level/level'
import { Articles } from './articles/articles'
import { levelsData } from '../data/data'
import { IlocalStorage } from '../../types/types'
import 'highlight.js/styles/default.css';
import './input/input.css'

export class AppView {

  articles: Articles
  game: GameLevel

  constructor() {
    this.articles = new Articles()
    this.game = new GameLevel()
  }

  drawGameOnLoad(loadedLevel: number, loadedData: IlocalStorage) {
    this.articles.createArticlesArray(loadedData)
    this.game.draw(levelsData[loadedLevel])
  }

  drawGame(e: MouseEvent) {
    const levelButton = e.target as HTMLElement;
    const level: string | undefined = levelButton.textContent?.replace(/[^0-9]/g,"")
    if (level) {
      const levelAsNumber = Number(level);
      this.game.draw(levelsData[levelAsNumber - 1])
      this.articles.highlightLevel(levelAsNumber - 1)
    }
  }

  addVisualEffects(isSolutionCorrect: boolean, level: number, isClueUsed?: boolean): void {
    if (!isSolutionCorrect) {
      this.game.wrongAnswerEffect()
    }else {
        this.articles.passLevelEffect(isClueUsed)
        this.game.passLevelEffect()
        setTimeout(() => {
          this.game.draw(levelsData[level])
          this.articles.highlightLevel(level)
        }, 1000)
    }
  }

  removePreviousLevel(inputWindow: HTMLInputElement| null, promptBlock: HTMLElement| null, userSolution: HTMLElement| null) {
    const htmlClue = document.querySelector('.html-clue')
    if (inputWindow && promptBlock && userSolution && htmlClue) {
      promptBlock.classList.contains('prompt-active')? promptBlock.classList.remove('prompt-active') : 0
      inputWindow.value = ''
      userSolution.innerHTML = ''
      htmlClue.innerHTML = ''
    }
  }

  async addWinEffects() {
    const overlayElement = document.querySelector('.overlay')
    await overlayElement?.classList.add('win')
    const closeButton = document.querySelector('.close')
    closeButton?.addEventListener('click', ()=> {
      overlayElement?.classList.remove('win')
    })
  }
}
