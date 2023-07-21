export const SERVER = "http://127.0.0.1:3000"
export const LOCAL_SERVER = "http://localhost:3000"

export enum URL {
  garage = `${LOCAL_SERVER}/garage`,
  engine = `${LOCAL_SERVER}/engine`,
  winners = `${LOCAL_SERVER}/winners`,
}

export enum Method {
  post = 'POST',
  put = 'PUT',
  get = 'GET',
  delete = 'DELETE',
  patch = 'PATCH',
}

export enum StatusCodes {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER_ERROR = 500,
}

export enum EngineStatus {
  start = 'started',
  stop = 'stopped',
  drive = 'drive'
}