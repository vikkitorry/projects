export interface ICar {
  name: string;
  color: string;
  id: number;
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
