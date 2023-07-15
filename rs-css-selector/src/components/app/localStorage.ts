import { LevelState, IlocalStorage, LOCAL_STORAGE_GAME_STATE_KEY } from '../../types/types'
import { levelsData } from '../../components/data/data'

export class LocalStorage {

  getLevelOnLoad() {
    const data = this.getDataFromLocalStorage()
    return data.currentLevel
  }

  getDataFromLocalStorage(): IlocalStorage {
    const getLocalStorage = localStorage.getItem(LOCAL_STORAGE_GAME_STATE_KEY)
    if (!getLocalStorage) {
      this.setNewLocalStorage()
    }
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_GAME_STATE_KEY) || "")
  }

  updateLocalStorage(level: number, status: string ) {
    const getLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_GAME_STATE_KEY) || "")
    if (status === LevelState.active) {
      getLocalStorage.currentLevel = level
    } else {
      getLocalStorage.levels[level - 1] = status
    }
    localStorage.setItem(LOCAL_STORAGE_GAME_STATE_KEY, JSON.stringify(getLocalStorage))
  }

  checkIsAllLevelsDone(): boolean {
    const getLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_GAME_STATE_KEY) || "")
    return !Object.values(getLocalStorage.levels).includes(LevelState.available)
  }

  setNewLocalStorage() {
    const initialGameState: IlocalStorage = {
      levels: new Array(levelsData.length).fill(LevelState.available),
      currentLevel: 0
    }
    localStorage.setItem(LOCAL_STORAGE_GAME_STATE_KEY, JSON.stringify(initialGameState))
  }
}