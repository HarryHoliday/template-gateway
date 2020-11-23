import { Request, Response, NextFunction } from 'express';
import './processErrorHandler';
import logger from './logger';

interface HttpError extends Error {
  status?: number;
  sqlState?: boolean;
  code: string;
}

const badRequestErrorList = ['ValidationError', 'ERROR_GENERAL'];

const unauthorizedErrorList = ['TokenExpiredError', 'JsonWebTokenError', 'NotBeforeError'];

const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
): void => {
  logger.error(err);
  if (!res.headersSent) {
    let status = 500;
    if (err.sqlState) {
      const errorCodeByClient = ['ER_NO_DEFAULT_FOR_FIELD', 'ER_DUP_ENTRY', 'WARN_DATA_TRUNCATED'];
      if (errorCodeByClient.includes(err.code)) {
        status = 400;
      }
      res.status(status);
      res.json({ code: err.code, message: err.message, name: err.name });
      return;
    }
    if (err.name && badRequestErrorList.includes(err.name)) {
      status = 400;
    }
    if (err.name && unauthorizedErrorList.includes(err.name)) {
      status = 401;
    }
    if (err.status) {
      status = err.status;
    }
    res.status(status);
    res.json(err);
  }
};

export default errorHandler;
