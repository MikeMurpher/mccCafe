import { fetchPriceQuote } from '../../lib/api/fetchPriceQuote';
import { generateBitqueryChainData } from '../../lib/utils/chainFormatters';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!req?.query?.chainId) {
      return res.status(400).send({ ok: false, message: 'Missing Chain Id' });
    }

    const { network, nativeCurrency, usdc } = generateBitqueryChainData(
      parseInt(req?.query?.chainId as any)
    );

    const price = await fetchPriceQuote({
      // @ts-expect-error
      network,
      quoteCurrency: nativeCurrency,
      usdc,
    });

    res.status(200).json({
      price: price?.data?.ethereum?.dexTrades?.[0]?.quotePrice,
    });
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};
