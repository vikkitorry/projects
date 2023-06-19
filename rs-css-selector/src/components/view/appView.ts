import {GameLevel}  from './level/level'
import {Articles}  from '../view/levelArticles/levelArticles'
import {levelsArticles, levelsData }  from '../data/data'

export class AppView {

  constructor() {
    this.start()
  }

  start() {
    new Articles(levelsArticles)
  }

  drawGame(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const level: string | undefined = target.textContent?.replace(/[^0-9]/g,"")

    if (level) {
      const levelAsNumber = Number(level);
      new GameLevel(levelsData[levelAsNumber - 1])
    }
  }
}
