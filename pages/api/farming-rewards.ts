import { getFarmingBalances } from '../../lib/api/getFarmingBalance';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const address = req?.query?.address as string;
    const chain = req?.query?.chainId as any;
    const symbol = req?.query?.symbol as string;
    const farmcontract = req?.query?.farmcontract as any
    const fetchcontract = req?.query?.fetchcontract as any

    const data = await getFarmingBalances(chain, symbol, farmcontract, fetchcontract, address);

    res.status(200).json({
      data,
    });
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};