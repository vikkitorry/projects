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

export interface ICar {
  name: string;
  color: string;
  id?: number;
}

export interface IWinner {
  id: number;
  wins: number;
  time: string;
}

export interface IEngine {
  velocity: number;
  distance: number;
}

export enum StatusCodes {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER_ERROR = 500,
}
