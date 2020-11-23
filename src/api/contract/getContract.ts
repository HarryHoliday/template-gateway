import { Request } from 'express';
import httpWrapper from '~lib/httpWrapper';

interface Payload {
  contractId?: string | number;
}

const type = 'getContract';

export default httpWrapper(
  async (req: Request): Promise<object> => {
    try {
      const { cote, params } = req;
      const data: Payload = { ...params } as Payload;
      return await cote.send({ type, data });
    } catch (error) {
      throw error;
    }
  },
);
