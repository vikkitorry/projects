import { ElementParams } from '../../types/types';


export class ElementCreator {

  //element: HTMLElement

  constructor(params: ElementParams, parent: Element) {
    //this.element = document.createElement(params.tag)
    this.createAndAddElement(params, parent);
  }

  createAndAddElement(params: ElementParams, parent: Element) {
    const element = document.createElement(params.tag)
    element.textContent = params.textContent;
    params.classNames.map((cssClass) => element.classList.add(cssClass));
    params.id ? element.id = params.id : ''
    parent.append(element);
    if (params.child) {
      this.createAndAddElement(params.child, element)
    }
  }
/*
  addChild(params: ElementParams, parent: Element) {
    console.log(params.tag)
    const child: HTMLElement = document.createElement(params.tag)
    child.textContent = params.textContent;
    parent.append(child);
  }
*/
}
