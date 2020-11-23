import { Request, Response, NextFunction } from 'express';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';

const SALT = process.env.APP_SALT || '';

export const checkToken = async (authorization?: string): Promise<object | string> => {
  try {
    if (!authorization) {
      throw new JsonWebTokenError('not authorization');
    }
    const [bearer, token] = authorization.split(' ');
    if (bearer !== 'Bearer') {
      throw new JsonWebTokenError('not Bearer');
    }
    const decoded = await jwt.verify(token, SALT);
    return decoded;
  } catch (error) {
    throw error;
  }
};

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { authorization } = req.headers || ' ';
    const result = await checkToken(authorization);
    req.userInfo = result;
    next();
  } catch (error) {
    next(error);
  }
};
