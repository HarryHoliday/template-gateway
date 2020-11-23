import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send("I'm gateway-p2p, good");
  } catch (error) {
    next(error);
  }
};
