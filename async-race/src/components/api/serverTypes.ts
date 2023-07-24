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

export enum Status {
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

export interface IWinner {
  id: number,
  wins: number,
  time: number,
}

export interface IWinnerForModal {
  id: number | undefined,
  time: number,
  name: string
}

export enum WinnersPages {
  page = 1,
  limit = 10
}

export interface IGetWinners {
  page: number;
  limit: number;
  sort: string;
  order: string;
}

export enum Sort {
  wins = 'wins',
  time = 'time',
}

export enum Order {
  up = 'ASC',
  down = 'DESC',
}