import { Request } from 'express';
import httpWrapper from '~lib/httpWrapper';

interface Payload {
  page?: string | number;
  size?: string | number;
}

const type = 'getProductStatusList';

export default httpWrapper(
  async (req: Request): Promise<object> => {
    try {
      const { cote, query } = req;
      const data: Payload = { ...query } as Payload;
      const [list, count] = await cote.send({ type, data });
      return { list, count };
    } catch (error) {
      throw error;
    }
  },
);
