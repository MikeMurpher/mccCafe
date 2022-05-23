import { MCC_CONTRACT, MULTINODE_CLAIM_CONTRACT } from '../../lib/constants';
import request from '../../lib/utils/request';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const [ftmSupply, bscSupply, ercSupply] = await Promise.all([
      getTokenBalance({
        network: 'fantom',
        address: MULTINODE_CLAIM_CONTRACT,
        currency: MCC_CONTRACT,
      }),
      getTokenBalance({
        network: 'bsc',
        address: MULTINODE_CLAIM_CONTRACT,
        currency: MCC_CONTRACT,
      }),
      getTokenBalance({
        network: 'ethereum',
        address: MULTINODE_CLAIM_CONTRACT,
        currency: MCC_CONTRACT,
      }),
    ]);

    const { ftmPrice, bscPrice, ercPrice } = await request(
      `${process.env.BASE_URL}/api/mcc-price`
    );

    const totalFtmSupply =
      ftmSupply?.data?.ethereum?.address?.[0]?.balances?.[0]?.value;
    const totalBscSupply =
      bscSupply?.data?.ethereum?.address?.[0]?.balances?.[0]?.value;
    const totalErcSupply = ercSupply?.data?.eth;

    res.setHeader('Cache-Control', 's-maxage=600');
    res.status(200).json({
      ftm: {
        supply: totalFtmSupply,
        price: ftmPrice,
        usdValue: totalFtmSupply * ftmPrice,
      },
      bsc: {
        supply: totalBscSupply,
        price: bscPrice,
        usdValue: totalBscSupply * bscPrice,
      },
      erc: {
        supply: totalErcSupply,
        price: ercPrice,
        usdValue: totalErcSupply * ercPrice,
      },
    });

    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

async function getTokenBalance({ network, address, currency }: any) {
  return await fetch('https://graphql.bitquery.io/', {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'x-api-key': `${process.env.BIT_QUERY_API_KEY}`,
    },
    body: JSON.stringify({
      query: `
        query ($network: EthereumNetwork!, $address: String!, $currency: String!) {
          ethereum(network: $network) {
            address(address: {is: $address}) {
              balances(currency: {is: $currency}) {
                value
              }
            }
          }
        }
      `,
      variables: {
        network,
        address,
        currency,
      },
    }),
    method: 'POST',
  }).then((res) => res.json());
}
