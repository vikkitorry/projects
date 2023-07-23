// import { AppController } from '../controller/controller'
// import { AppView } from '../view/appView'
import { createHtmlElement } from '../helpers/createHtmlElement'
import { IElement } from '../../types/types'


export class Button {
  private button: HTMLButtonElement;
  //public allButtons: Array<HTMLButtonElement>

  constructor(elementParams: IElement, buttonAction?: (e: Event) => void) {
    this.button = createHtmlElement({
      tag: elementParams.tag,
      classNames: elementParams.classNames,
      textContent: elementParams.textContent,
      id: elementParams.id}) as HTMLButtonElement
    if (buttonAction) {
      this.button.addEventListener("click", buttonAction)
    }
    //this.allButtons = []
  }

  setButtonCondition(isWork: boolean): void {
    this.button.disabled = isWork
  }

  getButton() {
    return this.button
  }

  /*selectButton(button: HTMLButtonElement) {
    this.allButtons = this.allButtons.push(button)
  }*/
}

