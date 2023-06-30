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
      this.createClueForItem(params.tag, element)
    }

    if (params.child) {
      params.child.forEach((child) => this.createAndAddElement(child, element, isNeedClue))
    }
  }

  createClueForItem(tagName: string, parent: Element): void {
    const clue = document.createElement('div')
    clue.textContent = `<${tagName}> <${tagName}/>`;
    clue.classList.add('tooltip');
    parent.append(clue);
  }
}
