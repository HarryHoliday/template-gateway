import { Router } from 'express';
import checkHealth from './checkHealth';

const router = Router();

router.get('/health', checkHealth);

export default router;
