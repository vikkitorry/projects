import { createHtmlElement } from '../helpers/createHtmlElement'
import { IElement } from '../../types/types'

export class Button {
  private button: HTMLButtonElement;

  constructor(elementParams: IElement, buttonAction?: (e: Event) => void) {
    this.button = createHtmlElement({
      tag: elementParams.tag,
      classNames: elementParams.classNames,
      textContent: elementParams.textContent,
      id: elementParams.id}) as HTMLButtonElement
    if (buttonAction) {
      this.button.addEventListener("click", buttonAction)
    }
  }

  getButton() {
    return this.button
  }
}

