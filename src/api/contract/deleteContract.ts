import { Request } from 'express';
import httpWrapper from '~lib/httpWrapper';

interface Payload {
  id: number;
}

const type = 'deleteContract';

export default httpWrapper(
  async (req: Request): Promise<object> => {
    try {
      const { cote, body } = req;
      const data: Payload = { ...body } as Payload;
      return await cote.send({ type, data });
    } catch (error) {
      throw error;
    }
  },
);
