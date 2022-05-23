import {
  BUSD,
  ERC_USDC,
  FTM_USDC,
  MCC_CONTRACT,
  WBNB,
  WETH,
  WFTM,
} from '../../lib/constants';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const [ftmPrice, bscPrice, ercPrice] = await Promise.all([
      getUSDMccPrice({
        network: 'fantom',
        quoteCurrency: WFTM,
        usdCurrency: FTM_USDC,
      }),
      getUSDMccPrice({
        network: 'bsc',
        quoteCurrency: WBNB,
        usdCurrency: BUSD,
      }),
      getUSDMccPrice({
        network: 'ethereum',
        quoteCurrency: WETH,
        usdCurrency: ERC_USDC,
      }),
    ]);

    res.setHeader('Cache-Control', 's-maxage=600');
    res.status(200).json({ ftmPrice, bscPrice, ercPrice });
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

async function getUSDMccPrice({ network, quoteCurrency, usdCurrency }: any) {
  try {
    const mccData = await getPriceQuote({
      network,
      baseCurrency: MCC_CONTRACT,
      quoteCurrency,
    });

    const mccPrice = mccData?.data?.ethereum?.dexTrades?.[0]?.quotePrice;

    const usdPrice = await getPriceQuote({
      network,
      baseCurrency: quoteCurrency,
      quoteCurrency: usdCurrency,
    });

    const usdMultiple =
      1 / usdPrice?.data?.ethereum?.dexTrades?.[0]?.quotePrice;

    return Number(mccPrice / usdMultiple).toFixed(10);
  } catch (error) {
    console.error(error);
  }
}

async function getPriceQuote({ network, baseCurrency, quoteCurrency }: any) {
  return await fetch('https://graphql.bitquery.io/', {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'x-api-key': `${process.env.BIT_QUERY_API_KEY}`,
    },
    body: JSON.stringify({
      query: `
        query ($network: EthereumNetwork!, $baseCurrency: String!, $quoteCurrency: String!) {
          ethereum(network: $network) {
            dexTrades(
              baseCurrency: {is: $baseCurrency}
              quoteCurrency: {is: $quoteCurrency}
              options: {desc: ["block.height", "transaction.index"], limit: 1}
            ) {
              block {
                height
                timestamp {
                  time(format: "%Y-%m-%d %H:%M:%S")
                }
              }
              transaction {
                index
              }
              baseCurrency {
                symbol
              }
              quoteCurrency {
                symbol
              }
              quotePrice
            }
          }
          
        }
      `,
      variables: {
        network,
        baseCurrency,
        quoteCurrency,
      },
    }),
    method: 'POST',
  }).then((res) => res.json());
}
