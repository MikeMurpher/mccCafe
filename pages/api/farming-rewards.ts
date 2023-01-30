import { ethers } from 'ethers';
import type { NextApiRequest, NextApiResponse } from 'next';

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

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { address, chainId, symbol, farmcontract, fetchcontract }: any =
      req.query;

    const data = await getFarmingBalances(
      `${chainId}`,
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

async function getFarmingBalances(
  chainId: any,
  symbol: string,
  farmContract: string,
  fetchContract: string,
  address: any
) {
  let contractInterface = new ethers.utils.Interface(contractABI);

  const functionSignature =
    symbol === 'MPRINT'
      ? contractInterface.encodeFunctionData('pendingRewardsMasterChef', [
          `${farmContract}`,
          `${address}`,
        ])
      : contractInterface.encodeFunctionData('pendingRewardsReflectorChef', [
          `${farmContract}`,
          `${address}`,
        ]);

  return await fetch(
    `https://${generateChainBaseLink(
      chainId
    )}/api?module=proxy&action=eth_call&to=${fetchContract}&data=${functionSignature}&tag=latest&apikey=${generateApiKey(
      chainId
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

function generateChainBaseLink(chain: string) {
  switch (chain) {
    case '1':
      return 'api.etherscan.com';
    case '56':
      return 'api.bscscan.com';
    case '250':
      return 'api.ftmscan.com';
    default:
      return 'api.etherscan.com';
  }
}

function generateApiKey(chain: string) {
  switch (chain) {
    case '1':
      return `${process.env.ETHERSCAN_API_KEY}`;
    case '56':
      return `${process.env.BSCSCAN_API_KEY}`;
    case '250':
      return `${process.env.FTMSCAN_API_KEY}`;
    default:
      return `${process.env.ETHERSCAN_API_KEY}`;
  }
}
