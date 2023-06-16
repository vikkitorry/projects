import { ElementParams } from '../../types/types';


export class ElementCreator {

  constructor(params: ElementParams, parent: Element) {
    this.createAndAddElement(params, parent);
  }

  createAndAddElement(params: ElementParams, parent: Element) {
    const element: HTMLElement = document.createElement(params.tag);
    element.textContent = params.textContent;
    params.classNames.map((cssClass) => element.classList.add(cssClass));
    parent.append(element);
  }

}
