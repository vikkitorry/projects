export class AppController {

  checkInputValue(inputElement: HTMLInputElement | null): [boolean, number] {
    const level = this.getActualLevel()
    const trimmedValue = inputElement?.value.split(/\s+/).join('').trim()
    const valueWithWhiteSpace = inputElement?.value.replace(/\s+/g, ' ').trim()
    if (trimmedValue && valueWithWhiteSpace && inputElement) {
      const isSolutionCorrect = this.isValueCorrect(trimmedValue) || this.isValueCorrect(valueWithWhiteSpace)
      return [isSolutionCorrect, level]
    }
    return [false, level]
  }

  isValueCorrect(value : string): boolean {
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

  isNodeListsEqual(list1: NodeListOf<Element>, list2: NodeListOf<Element>): boolean {
    return list1.length === list2.length && Array.from(list1).every((node, index) => node === list2[index]);
  }

  getActualLevel(): number {
    const levelElement: HTMLElement | null = document.querySelector('.active')
    const level = levelElement?.textContent?.replace(/[^0-9]/g,"")
    const levelAsNumber = Number(level)
    return levelAsNumber
  }

}