import { ethers } from 'ethers';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const address = req?.query?.address as string;
    const chain = req?.query?.chainId as any;
    const symbol = req?.query?.symbol as string;
    const farmcontract = req?.query?.farmcontract as any;
    const fetchcontract = req?.query?.fetchcontract as any;

    const data = await getFarmingBalances(
      chain,
      symbol,
      farmcontract,
      fetchcontract,
      address
    );

    res.status(200).json({
      data,
    });
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

const contractABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_externalChefAddress',
        type: 'address',
      },
      { internalType: 'address', name: '_userAddress', type: 'address' },
    ],
    name: 'pendingRewardsMasterChef',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_externalChefAddress',
        type: 'address',
      },
      { internalType: 'address', name: '_userAddress', type: 'address' },
    ],
    name: 'pendingRewardsReflectorChef',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
];

async function getFarmingBalances(
  chain: any,
  symbol: string,
  farmcontract: string,
  fetchcontract: string,
  address: any
) {
  let contractInterface = new ethers.utils.Interface(contractABI);

  const functionSignature =
    symbol === 'MPRINT'
      ? contractInterface.encodeFunctionData('pendingRewardsMasterChef', [
          `${farmcontract}`,
          `${address}`,
        ])
      : contractInterface.encodeFunctionData('pendingRewardsReflectorChef', [
          `${farmcontract}`,
          `${address}`,
        ]);

  return await fetch(
    `https://${generateChainBaseLink(
      chain
    )}/api?module=proxy&action=eth_call&to=${fetchcontract}&data=${functionSignature}&tag=latest&apikey=${generateApiKey(
      chain
    )}`,
    {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }
  ).then((res) => res.json());
}

function generateChainBaseLink(chain: any) {
  switch (chain) {
    case 1:
      return 'api.etherscan.com';
    case 56:
      return 'api.bscscan.com';
    case 250:
      return 'api.ftmscan.com';
    default:
      return 'api.etherscan.com';
  }
}

function generateApiKey(chain: any) {
  switch (chain) {
    case 1:
      return process.env.ETHERSCAN_API_KEY;
    case 56:
      return process.env.BSCSCAN_API_KEY;
    case 250:
      return process.env.FTMSCAN_API_KEY;
    default:
      return process.env.ETHERSCAN_API_KEY;
  }
}
