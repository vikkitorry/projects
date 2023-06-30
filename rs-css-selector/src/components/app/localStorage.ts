import { LevelState, IlocalStorage, LocalStorageName } from '../../types/types'

export class LocalStorage {

  getLevelOnLoad() {
    const data = this.getDataFromLocalStorage()
    return data.currentLevel
  }

  getDataFromLocalStorage(): IlocalStorage {
    const getLocalStorage = localStorage.getItem(LocalStorageName.name)
    if (getLocalStorage) {
      return JSON.parse(localStorage.getItem(LocalStorageName.name) || "")
    } else {
      this.setNewLocalStorage()
      return JSON.parse(localStorage.getItem(LocalStorageName.name) || "")
    }
  }

  changeLocalStorage(level: number, status: string ) {
    const getLocalStorage = JSON.parse(localStorage.getItem(LocalStorageName.name) || "")
    if (status === LevelState.active) {
      getLocalStorage.currentLevel = level
    } else {
      getLocalStorage.levels[level - 1] = status
    }
    localStorage.setItem(LocalStorageName.name, JSON.stringify(getLocalStorage))
  }

  checkIsAllLevelsDone(): boolean {
    const getLocalStorage = JSON.parse(localStorage.getItem(LocalStorageName.name) || "")
    return !Object.values(getLocalStorage.levels).includes(LevelState.available)
  }

  setNewLocalStorage() {
    const LocalStorageData: IlocalStorage = {
      levels: [
        LevelState.available,
        LevelState.available,
        LevelState.available,
        LevelState.available,
        LevelState.available,
        LevelState.available,
        LevelState.available,
        LevelState.available,
        LevelState.available,
        LevelState.available,
        LevelState.available,
        LevelState.available,
      ],
      currentLevel: 0
    }
    localStorage.setItem(LocalStorageName.name, JSON.stringify(LocalStorageData))
  }
}