import { Router } from 'express';
import getProductFrameList from './getProductFrameList';

const router = Router();
//
router.get('/productFrame', getProductFrameList);
//

export default router;
