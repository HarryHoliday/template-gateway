import { Request, Response, NextFunction } from 'express';
import cote, { Requester } from 'cote';

export type CoteRequester = Requester;

const name = process.env.APP_COTE_NAME || 'GATEWAY_P2P';
const key = process.env.APP_COTE_KEY || 'p2p';

const requester: Requester = new cote.Requester({ name, key });

const returnTypeList: { [key: string]: string } = {
  json: 'json',
  string: 'send',
};

export default (cb: Function, returnType = 'json') => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.cote = requester;
      const result = await cb(req);
      res[returnTypeList[returnType]](result);
    } catch (error) {
      next(error);
    }
  };
};
