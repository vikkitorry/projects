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
}
