import { Request } from 'express';
import httpWrapper from '~lib/httpWrapper';

interface Payload {
  type: string;
  text: string;
  comment: string;
}

const type = 'initProductStatus';

export default httpWrapper(
  async (req: Request): Promise<object> => {
    try {
      const { cote, body } = req;
      const data: Array<Payload> = [...body] as Array<Payload>;
      return await cote.send({ type, data });
    } catch (error) {
      throw error;
    }
  },
);
