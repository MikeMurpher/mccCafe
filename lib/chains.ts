import { BlockchainType, ChainEnum, ChainNameEnum } from './types';
import type { AddEthereumChainParameter } from '@web3-react/types';

interface BasicChainInformation {
  urls: string[];
  name: string;
}

interface ExtendedChainInformation extends BasicChainInformation {
  nativeCurrency: AddEthereumChainParameter['nativeCurrency'];
  blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls'];
}

function isExtendedChainInformation(
  chainInformation: BasicChainInformation | ExtendedChainInformation
): chainInformation is ExtendedChainInformation {
  return !!(chainInformation as ExtendedChainInformation).nativeCurrency;
}

export function getAddChainParameters(
  chainId: number
): AddEthereumChainParameter | number {
  const chainInformation = CHAINS[chainId];
  if (isExtendedChainInformation(chainInformation)) {
    return {
      chainId,
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    };
  } else {
    return chainId;
  }
}

export const CHAINS: {
  [chainId: number]: BasicChainInformation | ExtendedChainInformation;
} = {
  1: {
    urls: [
      `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
      'https://cloudflare-eth.com',
    ].filter((url) => url !== undefined),
    name: 'Ethereum',
  },
  56: {
    urls: [`https://bsc-dataseed.binance.org`].filter(
      (url) => url !== undefined
    ),
    name: 'Binance Smart Chain',
  },
  250: {
    urls: [`https://polygon-rpc.com`].filter((url) => url !== undefined),
    name: 'Fantom (Matic)',
  },

  // '-1': {
  //   urls: [],
  //   name: 'Offline',
  // },
};

export const URLS: { [chainId: number]: string[] } = Object.keys(
  CHAINS
).reduce<{ [chainId: number]: string[] }>((accumulator, chainId) => {
  const validURLs: string[] = CHAINS[Number(chainId)].urls;

  if (validURLs.length) {
    accumulator[Number(chainId)] = validURLs;
  }

  return accumulator;
}, {});

export function generateChainName(chain?: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return `eth`;
    case ChainEnum.bsc:
      return `bsc`;
    case ChainEnum.ftm:
      return `ftm`;
    default:
      return `eth`;
  }
}

export function generateChainNameIdentifier(chain?: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return ChainNameEnum.erc;
    case ChainEnum.bsc:
      return ChainNameEnum.bsc;
    case ChainEnum.ftm:
      return ChainNameEnum.ftm;
    default:
      return ChainNameEnum.erc;
  }
}
