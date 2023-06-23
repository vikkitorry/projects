import { AppController } from '../controller/controller'
import { AppView } from '../view/appView'
import { LocalStorage } from './localStorage'
import { LevelState } from '../../types/types'

class App {
  private controller : AppController
  private view : AppView
  private localStorageOpt: LocalStorage

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
    this.localStorageOpt = new LocalStorage()
  }

  start() {
    const localData = this.localStorageOpt.getDataFromLocalStorage()
    this.view.drawGameOnLoad(this.localStorageOpt.getLevelOnLoad(), localData )
    console.log(this.localStorageOpt.getLevelOnLoad())
    this.addListeners()
  }

  addListeners() {
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

    enterButton?.addEventListener('click', () => {

      const [isSolutionCorrect, level] = this.controller.checkInput(solutionInput)
      if (isSolutionCorrect) {
        this.localStorageOpt.changeLocalStorage(level, LevelState.done)
        if (solutionInput && promptBlock) {
          promptBlock.classList.contains('prompt-active')? promptBlock.classList.remove('prompt-active') : 0
          solutionInput.value = ''
        }
      }

      this.view.addVisualEffects(isSolutionCorrect, level)
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {


        const [isSolutionCorrect, level] = this.controller.checkInput(solutionInput)
        if (isSolutionCorrect) {
          this.localStorageOpt.changeLocalStorage(level, LevelState.done)
          if (solutionInput && promptBlock) {
            promptBlock.classList.contains('prompt-active')? promptBlock.classList.remove('prompt-active') : 0
            solutionInput.value = ''
          }
        }


        this.view.addVisualEffects(isSolutionCorrect, level)
      }
    });
  }
}


export default App;