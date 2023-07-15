import { AppController } from '../controller/controller'
import { AppView } from '../view/appView'
import { LocalStorage } from './localStorage'
import { LevelState } from '../../types/types'
import hljs from 'highlight.js';


class App {
  private controller : AppController
  private view : AppView
  private localStorageOptions: LocalStorage

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
    this.localStorageOptions = new LocalStorage()
  }

  start() {
    const localData = this.localStorageOptions.getDataFromLocalStorage()
    const levelOnLoad = this.localStorageOptions.getLevelOnLoad()
    this.view.drawGameOnLoad(levelOnLoad, localData)
    this.addListeners()
  }

  addListeners() {
    const levelsArticles: HTMLElement | null = document.querySelector('.levels');
    const inputWindow: HTMLInputElement | null = document.querySelector('.input');
    const enterButton: HTMLInputElement | null  = document.querySelector('.enter');
    const helpButton: HTMLInputElement | null  = document.querySelector('.help');
    const promptBlock: HTMLInputElement | null  = document.querySelector('.prompt');
    const answerInput: HTMLInputElement | null  = document.querySelector('.highlight-input');
    const resetGameButton: HTMLInputElement | null  = document.querySelector('.reset');

    resetGameButton?.addEventListener('click', () => {
      this.localStorageOptions.setNewLocalStorage()
      if (levelsArticles) {
        levelsArticles.innerHTML = ''
      }
      const localData = this.localStorageOptions.getDataFromLocalStorage()
      this.view.drawGameOnLoad(this.localStorageOptions.getLevelOnLoad(), localData )
    })

    inputWindow?.addEventListener('input', () => {
      if (answerInput) {
        answerInput.innerHTML = `${hljs.highlight(inputWindow.value, {language: 'css'}).value}`
      }
    })

    levelsArticles?.addEventListener('click', (e) => {
      promptBlock?.classList.remove('prompt-active')
      this.view.removePreviousLevel(inputWindow, promptBlock, answerInput)
      this.view.drawGame(e)
    })

    helpButton?.addEventListener('click', () => {
        promptBlock?.classList.add('prompt-active')
        const level = this.controller.getActualLevel()
        this.localStorageOptions.updateLocalStorage(level, LevelState.withClue)
        setTimeout(() => {
          this.view.addVisualEffects(true, level, true)
          this.view.removePreviousLevel(inputWindow, promptBlock, answerInput)
        }, 2000)
        this.localStorageOptions.checkIsAllLevelsDone() ? this.view.addWinEffects() : 0
    });

    enterButton?.addEventListener('click', () => {
      inputActionsAfterEnter(this.controller, this.localStorageOptions, this.view)
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        inputActionsAfterEnter(this.controller, this.localStorageOptions, this.view)
      }
    });

    function inputActionsAfterEnter(controller: AppController, localStorageOptions: LocalStorage, view: AppView) {
      const [isSolutionCorrect, level] = controller.checkInputValue(inputWindow)
      if (isSolutionCorrect) {
        localStorageOptions.updateLocalStorage(level, LevelState.done)
        view.removePreviousLevel(inputWindow, promptBlock, answerInput)
      }
      localStorageOptions.checkIsAllLevelsDone() ? view.addWinEffects() : 0
      view.addVisualEffects(isSolutionCorrect, level)
    }
  }
}


export default App;