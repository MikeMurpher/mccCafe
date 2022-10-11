import type { NextApiRequest, NextApiResponse } from 'next';
import { getPriceQuote } from '../../lib/api/getPriceQuote';
import { MCC_CONTRACT } from '../../lib/constants';
import { ChainNameEnum } from '../../lib/types';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const [ftmPrice, bscPrice, ercPrice] = await Promise.all([
      getPriceQuote({
        chain: ChainNameEnum.ftm,
        token: MCC_CONTRACT,
      }),
      getPriceQuote({
        chain: ChainNameEnum.bsc,
        token: MCC_CONTRACT,
      }),
      getPriceQuote({
        chain: 'eth',
        token: MCC_CONTRACT,
      }),
    ]);

    res.status(200).json({
      ftmPrice: ftmPrice?.usdPrice,
      bscPrice: bscPrice.usdPrice,
      ercPrice: ercPrice.usdPrice,
    });
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};
