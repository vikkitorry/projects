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
    const levelOnLoad = this.localStorageOpt.getLevelOnLoad()
    this.view.drawGameOnLoad(levelOnLoad, localData)
    this.addListeners()
  }

  addListeners() {
    const levelsArticles: HTMLElement | null = document.querySelector('.levels');
    const inputWindow: HTMLInputElement | null = document.querySelector('.input');
    const enterButton: HTMLInputElement | null  = document.querySelector('.enter');
    const helpButton: HTMLInputElement | null  = document.querySelector('.help');
    const promptBlock: HTMLInputElement | null  = document.querySelector('.prompt');
    const userSolution: HTMLInputElement | null  = document.querySelector('.highlight-input');
    const resetGameButton: HTMLInputElement | null  = document.querySelector('.reset');

    resetGameButton?.addEventListener('click', () => {
      this.localStorageOpt.setNewLocalStorage()
      if (levelsArticles) {
        levelsArticles.innerHTML = ''
      }
      const localData = this.localStorageOpt.getDataFromLocalStorage()
      this.view.drawGameOnLoad(this.localStorageOpt.getLevelOnLoad(), localData )
    })

    inputWindow?.addEventListener('input', () => {
      if (userSolution) {
        userSolution.innerHTML = `${hljs.highlight(inputWindow.value, {language: 'css'}).value}`
      }
    })

    levelsArticles?.addEventListener('click', (e) => {
      promptBlock?.classList.remove('prompt-active')
      this.view.drawGame(e)
      if (inputWindow && userSolution) {
        inputWindow.value = ''
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
      const [isSolutionCorrect, level] = controller.checkInputValue(inputWindow)
      if (isSolutionCorrect) {
        localStorageOpt.changeLocalStorage(level, LevelState.done)
        if (inputWindow && promptBlock && userSolution) {
          promptBlock.classList.contains('prompt-active')? promptBlock.classList.remove('prompt-active') : 0
          inputWindow.value = ''
          userSolution.innerHTML = ''
        }
      }
      view.addVisualEffects(isSolutionCorrect, level)
    }
  }
}


export default App;