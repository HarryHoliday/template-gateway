// declare module 'express-pino-logger';

declare namespace Express {
  export interface Request {
    cote: { [key: string]: T };
    userInfo?: { [key: string]: T } | string;
  }
  export interface Response {
    [key: string]: T;
  }
}
