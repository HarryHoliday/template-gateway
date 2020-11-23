import { Router } from 'express';
import getProductTypeList from './getProductTypeList';
import initProductType from './initProductType';

const router = Router();

router.get('/productType', getProductTypeList);
router.post('/productType/init', initProductType);

export default router;
