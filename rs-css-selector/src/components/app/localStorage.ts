import { LevelState, IlocalStorage, LocalStorageName } from '../../types/types'

export class LocalStorage {

  getLevelOnLoad() {
    const data = this.getDataFromLocalStorage()
    return data.levels.indexOf(LevelState.active)
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
      const previousActiveLevel = getLocalStorage.levels.indexOf(LevelState.active)
      getLocalStorage.levels[previousActiveLevel] = LevelState.available
    }
    getLocalStorage.levels[level] = status
    localStorage.setItem(LocalStorageName.name, JSON.stringify(getLocalStorage))
  }

  setNewLocalStorage() {
    const LocalStorageData: IlocalStorage = {
      levels: [
        LevelState.active,
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
    }
    localStorage.setItem(LocalStorageName.name, JSON.stringify(LocalStorageData))
  }
}