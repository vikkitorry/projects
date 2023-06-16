import { ElementParams } from '../../../types/types';
import { ElementCreator } from '../elementCreator'
import { levelsArticles } from '../../data/data'

export class Articles {

  constructor (data: Array<ElementParams>) {
    this.draw(data)
  }

  draw(data: Array<ElementParams>): void {

    const articlesContainer: Element | null = document.querySelector('.levels')

    data.forEach((elmOptions) => {
      if (articlesContainer) {
        const article = new ElementCreator(elmOptions, articlesContainer)
      }

    })
  }
}
