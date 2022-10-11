import type { NextApiRequest, NextApiResponse } from 'next';
import { getTokenBalances } from '../../lib/api/getTokenBalances';
import { IncubatorTokenAddressEnum } from '../../lib/types';
import { generateChainName } from '../../lib/utils/chainFormatters';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const address = req?.query?.address as string;
    const chainName = generateChainName(parseInt(req?.query?.chainId as any));

    const myTokens: any = await getTokenBalances({
      chain: chainName,
      account: address,
      tokenAddress: Object.values(IncubatorTokenAddressEnum),
    });

    res.status(200).json({
      myTokens,
    });
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};
