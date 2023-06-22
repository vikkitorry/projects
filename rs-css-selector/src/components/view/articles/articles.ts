import { ElementParams, IlocalStorage, LevelState, NumberOfLevels } from '../../../types/types';
import { ElementCreator } from '../elementCreator'
import { LocalStorage }  from '../../app/localStorage'

export class Articles {

  localStorageMethod: LocalStorage

  constructor () {
    this.localStorageMethod = new LocalStorage
    this.createArticlesArray()
  }

  createArticlesArray() {
    const localData: IlocalStorage | null = this.localStorageMethod.getDataFromLocalStorage()
    if (localData !== null) {
      const levelProgressData = localData.levels
      const articlesArr: Array<ElementParams> = [...Array(NumberOfLevels.number)]
      .map((element: ElementParams, i: number) => {
        return element = {
          tag: 'div',
          classNames: ['level', `${levelProgressData[i]}`],
          textContent: `Level ${i + 1}`
        }
      })
    this.draw(articlesArr)
    }
  }

  draw(data: Array<ElementParams>): void {
    const articlesContainer: Element | null = document.querySelector('.levels')
    data.forEach((elmOptions) => {
      if (articlesContainer) {
        new ElementCreator(elmOptions, articlesContainer)
      }
    })
  }

  highlightLevel(level: number) {
    const levelsArticles: NodeListOf<HTMLElement> = document.querySelectorAll('.level')
    const previousLevel: HTMLElement | null = document.querySelector('.active')
    this.localStorageMethod.changeLocalStorage(level, LevelState.active)
    if (previousLevel) {
      previousLevel.classList.remove('active')
      //this.localStorageMethod.changeLocalStorage(level, LevelState.available)
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
