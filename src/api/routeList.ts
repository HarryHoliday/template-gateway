import { Router } from 'express';
import contract from './contract';
import productFrame from './productFrame';
import productType from './productType';
import productStatus from './productStatus';

const list = [contract, productFrame, productType, productStatus];

export default (router: Router): void => {
  list.forEach(item => {
    router.use(item);
  });
};
