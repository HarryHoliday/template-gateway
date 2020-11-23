import { Request } from 'express';
import httpWrapper from '~lib/httpWrapper';
import { Contract } from './contract';

const type = 'updateContract';

export default httpWrapper(
  async (req: Request): Promise<object> => {
    try {
      const { cote, body } = req;
      const data: Contract = { ...body } as Contract;
      return await cote.send({ type, data });
    } catch (error) {
      throw error;
    }
  },
);
