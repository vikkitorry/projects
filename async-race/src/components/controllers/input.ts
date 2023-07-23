export class Input {
  private input: HTMLInputElement;

  constructor(classNames: string[], type: string) {
    this.input = this.createInput(classNames, type);
    // if (inputAction) {
    //   this.input.addEventListener("change", inputAction);
    // }
  }

  createInput(classNames: string[], type: string): HTMLInputElement {
    const input: HTMLInputElement = document.createElement('input')
    input.type = type
    classNames.forEach((className) => {
      input.classList.add(className)
    });
    return input
  }

  getInputElement() {
    return this.input
  }
}