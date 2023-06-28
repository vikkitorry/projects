import { AppController } from '../controller/controller'
import { AppView } from '../view/appView'
import { LocalStorage } from './localStorage'
import { LevelState } from '../../types/types'
import hljs from 'highlight.js';


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

   const userSolution: HTMLInputElement | null  = document.querySelector('.highlight-input');

//добавить слушателя на инпут и на каждое введенное валие кидать в userSolution

    solutionInput?.addEventListener('input', () => {
      if (userSolution) {
        userSolution.innerHTML = `${hljs.highlight(solutionInput.value, {language: 'css'}).value}`
      }
    })

    levelsArticles?.addEventListener('click', (e) => {
      promptBlock?.classList.remove('prompt-active')
      this.view.drawGame(e)
      if (solutionInput && userSolution) {
        solutionInput.value = ''
        userSolution.innerHTML = ''
      }
    })

    helpButton?.addEventListener('click', () => {
        promptBlock?.classList.add('prompt-active')
    });

    enterButton?.addEventListener('click', () => {
      inputActionsAfterEnter(this.controller, this.localStorageOpt, this.view)
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        inputActionsAfterEnter(this.controller, this.localStorageOpt, this.view)
      }
    });

    function inputActionsAfterEnter(controller: AppController, localStorageOpt: LocalStorage, view: AppView) {
      const [isSolutionCorrect, level] = controller.checkInputValue(solutionInput)
      if (isSolutionCorrect) {
        localStorageOpt.changeLocalStorage(level, LevelState.done)
        if (solutionInput && promptBlock && userSolution) {
          promptBlock.classList.contains('prompt-active')? promptBlock.classList.remove('prompt-active') : 0
          solutionInput.value = ''
          userSolution.innerHTML = ''
        }
      }
      view.addVisualEffects(isSolutionCorrect, level)
    }
  }
}


export default App;