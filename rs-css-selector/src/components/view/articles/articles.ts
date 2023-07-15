import { ElementParams, IlocalStorage, LevelState, LEVELS_COUNT } from '../../../types/types';
import { ElementCreator } from '../elementCreator'
import { LocalStorage }  from '../../app/localStorage'

export class Articles {

  localStorageMethod: LocalStorage

  constructor () {
    this.localStorageMethod = new LocalStorage
  }

  createArticlesArray(localData: IlocalStorage) {
    const levelProgressData = localData.levels
    const activeLevel = localData.currentLevel
    const articlesArr: Array<ElementParams> = [...Array(LEVELS_COUNT)]
      .map((element: ElementParams, i: number) => {
        return element = {
          tag: 'div',
          classNames: [
            'level',
            `${levelProgressData[i]}`,
            `${activeLevel === i ? LevelState.active : levelProgressData[i]}`],
          textContent: `Level ${i + 1}`
        }
      })
    this.draw(articlesArr)
  }

  draw(data: Array<ElementParams>): void {
    const articlesContainer: Element | null = document.querySelector('.levels')
    data.forEach((elmOptions) => {
      if (articlesContainer) {
        new ElementCreator(elmOptions, articlesContainer, false)
      }
    })
  }

  highlightLevel(level: number) {
    const levelsArticles: NodeListOf<HTMLElement> = document.querySelectorAll('.level')
    const previousLevel: HTMLElement | null = document.querySelector('.active')
    this.localStorageMethod.updateLocalStorage(level, LevelState.active)
    if (previousLevel) {
      previousLevel.classList.remove('active')
    }
    if (levelsArticles[level] instanceof HTMLElement) {
      levelsArticles[level].classList.add('active')
    }
  }

  passLevelEffect(isClueUsed?: boolean) {
    const actualLevel: HTMLElement | null = document.querySelector('.active')
    if (actualLevel) {
      const addedClassName = isClueUsed ? 'clue' :' done'
      actualLevel.classList.add(addedClassName)
    }
  }
}
