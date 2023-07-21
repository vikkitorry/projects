import { URL, Method, EngineStatus } from './serverTypes'
import { IEngine } from '../../types/types'

export class EngineApi {

  async startStopEngine(id: number, status: EngineStatus.start | EngineStatus.stop): Promise<IEngine> {
    const response = await fetch(`${URL.engine}?id=${id}&status=${status}`, {
      method: Method.patch,
    })
    return response.json()
  }
//добавить для драйв (по докам запускается только после статус старт, падает в любой момент)
}

