// import { AppController } from '../controller/controller'
// import { AppView } from '../view/appView'
// import { LocalStorage } from './localStorage'

export class Button {
  private button: HTMLButtonElement;
  //public allButtons: Array<HTMLButtonElement>

  constructor(classNames: string[], text: string, buttonAction: (e: Event) => void) {
    this.button = this.createButton(classNames, text)
    this.button.addEventListener("click", buttonAction)
    //this.allButtons = []
  }

  createButton(classNames: string[], text: string): HTMLButtonElement {
    const button: HTMLButtonElement = document.createElement('button')
    button.textContent = text
    classNames.forEach((className) => {
      button.classList.add(className)
    });
    return button
  }

  setButtonId(id: string): void {
    this.button.id = id
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

