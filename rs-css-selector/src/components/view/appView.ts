import {GameLevel}  from './level/level'
import {Articles}  from './articles/articles'
import {levelsArticles, levelsData }  from '../data/data'

export class AppView {

  articles: Articles

  constructor() {
    this.articles = new Articles(levelsArticles)
  }

  drawGame(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const level: string | undefined = target.textContent?.replace(/[^0-9]/g,"")

    if (level) {
      const levelAsNumber = Number(level);
      new GameLevel(levelsData[levelAsNumber - 1])
      this.articles.highlightLevel(levelAsNumber - 1)
    }
  }

  addVisualEffects(isSolutionCorrect: boolean) {
    const gameContainer: HTMLElement | null = document.querySelector('.game')
    if (!isSolutionCorrect) {
      if (gameContainer) {
        gameContainer.classList.add('shake');
        gameContainer.addEventListener('animationend', () => {
          gameContainer.classList.remove('shake');
        });
      }
    }
    if (isSolutionCorrect) {
      if (gameContainer) {
        this.articles.passLevelEffect()
      }
    }
  }
}
