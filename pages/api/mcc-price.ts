import { MCC_CONTRACT } from '../../lib/constants';
import { ChainNameEnum } from '../../lib/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const [ftmPrice, bscPrice, ercPrice] = await Promise.all([
      getPriceQuote({
        chain: ChainNameEnum.ftm,
      }),
      getPriceQuote({
        chain: ChainNameEnum.bsc,
      }),
      getPriceQuote({
        chain: 'eth',
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

async function getPriceQuote({ chain }: any) {
  try {
    return await fetch(
      `https://deep-index.moralis.io/api/v2/erc20/${MCC_CONTRACT}/price?chain=${chain}`,
      {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': `${process.env.NEXT_PUBLIC_MORALIS_API_KEY}`,
        },
        method: 'GET',
      }
    ).then((res) => res.json());
  } catch (error) {
    console.error(error);
  }
}
