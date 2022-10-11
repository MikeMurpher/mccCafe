import type { NextApiRequest, NextApiResponse } from 'next';
import { getTokenBalances } from '../../lib/api/getTokenBalances';
import { MCC_CONTRACT, ONE_BILLION } from '../../lib/constants';
import { ChainNameEnum } from '../../lib/types';
import request from '../../lib/utils/request';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const [ftmSupply, bscSupply, ercSupply] = await Promise.all([
      getTokenBalances({
        chain: ChainNameEnum.ftm,
        account: req?.query?.address,
        tokenAddress: [MCC_CONTRACT],
      }),
      getTokenBalances({
        chain: ChainNameEnum.bsc,
        account: req?.query?.address,
        tokenAddress: [MCC_CONTRACT],
      }),
      getTokenBalances({
        chain: 'eth',
        account: req?.query?.address,
        tokenAddress: [MCC_CONTRACT],
      }),
    ]);

    const { ftmPrice, bscPrice, ercPrice } = await request(
      `${process.env.BASE_URL}/api/mcc-price`
    );

    const totalFtmSupply = ftmSupply[0]?.balance / ONE_BILLION;
    const totalBscSupply = bscSupply[0]?.balance / ONE_BILLION;
    const totalErcSupply = ercSupply[0]?.balance / ONE_BILLION;

    res.status(200).json({
      ftm: {
        supply: totalFtmSupply,
        price: ftmPrice?.toFixed(10),
        usdValue: totalFtmSupply * ftmPrice?.toFixed(10),
      },
      bsc: {
        supply: totalBscSupply,
        price: bscPrice?.toFixed(10),
        usdValue: totalBscSupply * bscPrice?.toFixed(10),
      },
      erc: {
        supply: totalErcSupply,
        price: ercPrice?.toFixed(10),
        usdValue: totalErcSupply * ercPrice?.toFixed(10),
      },
    });

    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};
