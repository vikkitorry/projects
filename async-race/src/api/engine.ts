import { URL, Method, EngineStatus, Status } from './serverTypes'
import { IEngine } from '../types/types'

export class EngineApi {

  async switchEngineMode(id: number, status: EngineStatus.start | EngineStatus.stop): Promise<IEngine> {
    const response = await fetch(`${URL.engine}?id=${id}&status=${status}`, {
      method: Method.patch,
    })
    return response.json()
  }

  async drive( id: number) {
    const response = await fetch(`${URL.engine}?id=${id}&status=${EngineStatus.drive}`, {
      method: "PATCH",
    }).catch()
    return  response.status !== Status.OK? { success: false } : { ...(await response.json()) };
  }
}

