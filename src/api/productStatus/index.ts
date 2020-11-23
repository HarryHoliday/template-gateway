import { Router } from 'express';
import getProductStatusList from './getProductStatusList';
import initProductStatus from './initProductStatus';

const router = Router();

router.get('/productStatus', getProductStatusList);
router.post('/productStatus/init', initProductStatus);

export default router;
