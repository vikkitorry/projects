import { ElementParams } from '../../types/types';


export class ElementCreator {

  constructor(params: ElementParams, parent: Element, isNeedClue: boolean) {
    //this.element = document.createElement(params.tag)
    this.createAndAddElement(params, parent, isNeedClue);
  }

  createAndAddElement(params: ElementParams, parent: Element, isNeedClue: boolean) {
    const element = document.createElement(params.tag)
    element.textContent = params.textContent;
    params.classNames.map((cssClass) => element.classList.add(cssClass));
    params.id ? element.id = params.id : ''
    parent.append(element)

    if (isNeedClue) {
      this.createClueForItem(params)
    }

    if (params.child) {
      params.child.forEach((child) => this.createAndAddElement(child, element, isNeedClue))
    }
  }

  createClueForItem(params: ElementParams): void {
    const clueContainer = document.querySelector('.html-clue')
    if (clueContainer) {
      const clue = document.createElement('div')
      clue.textContent = `<${params.tag}> <${params.tag}/>`;
      clue.classList.add('tooltip');
      clue.classList.add(params.classNames[0]);
      clueContainer.append(clue);
    }
  }
}
