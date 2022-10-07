import { getIncubatorTokenBalances  } from '../../lib/api/getIncubatorTokenBalances';
import { generateBitqueryChainName } from '../../lib/utils/chainFormatters';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const address = req?.query?.address as string   
      const chainName = generateBitqueryChainName(
        parseInt(req?.query?.chainId as any)
      );

  
      const myTokens = await getIncubatorTokenBalances(chainName,address);

      
  
      res.status(200).json({
        myTokens:myTokens?.data?.ethereum?.address
      });
      res.end();
    } catch (error) {
      console.error(error);
      res.status(500);
    }
  };