import 'highlight.js/styles/default.css';
import './input/input.css'

export class AppController {

  checkInputValue(inputElement: HTMLInputElement | null): [boolean, number] {
    const level = this.getActualLevel()
    const value1 = inputElement?.value.split(/\s+/).join('').trim()
    const value2 = inputElement?.value.replace(/\s+/g, ' ').trim()
    if (value1 && value2 && inputElement) {
      const isSolutionCorrect = this.checkSolution(value1) || this.checkSolution(value2)
      return [isSolutionCorrect, level]
    }
    return [false, level]
  }

  private checkSolution(value : string): boolean {
    const gameWindow: HTMLElement | null = document.querySelector('.game__window')
    const correctSolutionElements: NodeListOf<Element> | undefined = gameWindow?.querySelectorAll('.animate')
    let isCorrect = false
    try {
      const userSolutionElements: NodeListOf<Element> | undefined = gameWindow?.querySelectorAll(value)
      if(correctSolutionElements && userSolutionElements) {
        isCorrect = this.isNodeListsEqual(
          correctSolutionElements,
          userSolutionElements
        )
      }
    } catch{
      isCorrect = false
    }
    return isCorrect
  }

  private isNodeListsEqual(list1: NodeListOf<Element>, list2: NodeListOf<Element>): boolean {
    if (list1.length !== list2.length) return false;
    return Array.from(list1)
      .every((node, index) => node === list2[index]);
  }

  private getActualLevel(): number {
    const levelElement: HTMLElement | null = document.querySelector('.active')
    const level = levelElement?.textContent?.replace(/[^0-9]/g,"")
    const levelAsNumber = Number(level)
    return levelAsNumber
  }

}