//import {GameLevel}  from '../view/gameLevel/level'
//import {Articles}  from '../view/levelArticles/levelArticles'
//import { Input }  from './input/input'
import './input/input.css'

export class AppController {

  checkSolution(value : string): boolean {
    const gameWindow: HTMLElement | null = document.querySelector('.game__window')
    const userSolutionElements: NodeListOf<Element> | undefined = gameWindow?.querySelectorAll(value)
    const correctSolutionElements: NodeListOf<Element> | undefined = gameWindow?.querySelectorAll('.animate')
    let isCorrect = false

    try {
      if(correctSolutionElements && userSolutionElements) {
        isCorrect = this.isNodeListsEqual(
          correctSolutionElements,
          userSolutionElements
        );
        console.log(isCorrect)
      }
    } catch {
      isCorrect = false
    }
    return isCorrect
  }

  private isNodeListsEqual(list1: NodeListOf<Element>, list2: NodeListOf<Element>) {
    if (list1.length !== list2.length) return false;
    return Array.from(list1)
      .every((node, index) => node === list2[index]);
  }

}