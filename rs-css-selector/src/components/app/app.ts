import { AppController }  from '../controller/controller'
import { AppView }  from '../view/appView'

class App {
  private controller : AppController
  private view : AppView

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }


  private getItemFromLocalStorage() {
    JSON.parse(localStorage.getItem("teeMeasuresAverages") || "")
  }

  private setItemToLocalStorage() {
    
    localStorage.setItem("teeMeasuresAverages", '1')
  }

  async start() {
    const levelsArticles: HTMLElement | null = document.querySelector('.levels');
    const solutionInput: HTMLInputElement | null = document.querySelector('.input');
    const enterButton: HTMLInputElement | null  = document.querySelector('.enter');
    const helpButton: HTMLInputElement | null  = document.querySelector('.help');
    const promptBlock: HTMLInputElement | null  = document.querySelector('.prompt');

    levelsArticles?.addEventListener('click', (e) => {
      if (promptBlock) {
        promptBlock.classList.remove('prompt-active')
      }
      this.view.drawGame(e)
      if (solutionInput) {
        solutionInput.value = ''
      }
    })

    helpButton?.addEventListener('click', () => {
      if (promptBlock) {
        promptBlock.classList.add('prompt-active')
      }
    });
//убрать дублирование кода
    enterButton?.addEventListener('click', () => {
      const value = solutionInput?.value.trim()
      if (value) {
        const isSolutionCorrect = this.controller.checkSolution(value)
        this.view.addVisualEffects(isSolutionCorrect)
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const value = solutionInput?.value.trim()
        if (value) {
          const isSolutionCorrect = this.controller.checkSolution(value)
          this.view.addVisualEffects(isSolutionCorrect)
        }
      }
    });
  }
}


export default App;