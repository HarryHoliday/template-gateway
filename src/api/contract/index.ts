import { Router } from 'express';
import getContract from './getContract';
import getContractList from './getContractList';
import createContract from './createContract';
import deleteContract from './deleteContract';
import updateContract from './updateContract';

const router = Router();
//
router.get('/contract/:contractId', getContract);
router.get('/contract', getContractList);
//
router.post('/contract', createContract);
router.delete('/contract', deleteContract);
router.put('/contract', updateContract);

export default router;
