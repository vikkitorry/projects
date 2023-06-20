import { ElementParams } from '../../../types/types';
import { ElementCreator } from '../elementCreator'

export class Articles {

  constructor (data: Array<ElementParams>) {
    this.draw(data)
  }

  draw(data: Array<ElementParams>): void {

    const articlesContainer: Element | null = document.querySelector('.levels')

    data.forEach((elmOptions) => {
      if (articlesContainer) {
        new ElementCreator(elmOptions, articlesContainer)
        //проверка из локал на то, пройден и уровень, добавление эффектов
      }
    })
  }

  highlightLevel(level: number) {
    const levelsArticles: NodeListOf<HTMLElement> = document.querySelectorAll('.level')
    const previousLevel: HTMLElement | null = document.querySelector('.active')
    if (previousLevel) {
      previousLevel.classList.remove('active')
    }
    if (levelsArticles[level] instanceof HTMLElement) {
      levelsArticles[level].classList.add('active')
    }
  }

  passLevelEffect() {
    const actualLevel: HTMLElement | null = document.querySelector('.active')
    if (actualLevel) {
      actualLevel.classList.add('completed')
    }
  }
}
