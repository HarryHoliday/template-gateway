import { Router } from 'express';
import pinoHttp from 'pino-http';
import logger from '~lib/logger';
import notFound from './notFound';
//
import routeList from './routeList';

const router = Router();
//
router.use(pinoHttp({ useLevel: 'trace', logger }));
// api
routeList(router);
// must be at last line
router.use(notFound);
//
export default router;
