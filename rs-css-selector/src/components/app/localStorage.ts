import { LevelState, IlocalStorage }  from '../../types/types'

export class LocalStorage {

  getLevelOnLoad() {
    const data = this.getDataFromLocalStorage()
    return data?.levels.indexOf(LevelState.active) || 1
  }

  getDataFromLocalStorage(): IlocalStorage | null{
    const getLocalStorage = localStorage.getItem("aaaBB")
    if (getLocalStorage) {
      return JSON.parse(localStorage.getItem("aaaBB") || "")
    }
    return null
  }

  changeLocalStorage(level: number, status: string ) {
    const getLocalStorage = JSON.parse(localStorage.getItem("aaaBB") || "")
    if (status === LevelState.active) {
      const previousActiveLevel = getLocalStorage.levels.indexOf(LevelState.active)
      getLocalStorage.levels[previousActiveLevel] = LevelState.available
    }
    getLocalStorage.levels[level] = status
    localStorage.setItem("aaaBB", JSON.stringify(getLocalStorage))
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
      ]
    }
    localStorage.setItem("aaaBB", JSON.stringify(LocalStorageData))
  }
}