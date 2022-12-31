import { getPriceQuote } from '../../lib/api/getPriceQuote';
import { MCC_CONTRACT } from '../../lib/constants';
import { ChainNameEnum } from '../../lib/types';
import type { NextApiRequest, NextApiResponse } from 'next';

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
      [ChainNameEnum.ftm]: ftmPrice?.usdPrice?.toFixed(10),
      [ChainNameEnum.bsc]: bscPrice.usdPrice?.toFixed(10),
      [ChainNameEnum.erc]: ercPrice.usdPrice?.toFixed(10),
    });
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};
