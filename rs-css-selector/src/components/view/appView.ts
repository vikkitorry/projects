import { GameLevel } from './level/level'
import { Articles } from './articles/articles'
import { levelsData } from '../data/data'
import { IlocalStorage } from '../../types/types'

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
    const target = e.target as HTMLElement;
    const level: string | undefined = target.textContent?.replace(/[^0-9]/g,"")
    if (level) {
      const levelAsNumber = Number(level);
      this.game.draw(levelsData[levelAsNumber - 1])
      this.articles.highlightLevel(levelAsNumber - 1)
    }
  }

  addVisualEffects(isSolutionCorrect: boolean, level: number) {
    if (!isSolutionCorrect) {
      this.game.wrongAnswerEffect()
    }
    if (isSolutionCorrect) {
        this.articles.passLevelEffect()
        this.game.passLevelEffect()
        setTimeout(() => {
          this.game.draw(levelsData[level])
          this.articles.highlightLevel(level)
        }, 1000)
    }
  }
}
