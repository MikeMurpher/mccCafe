interface BasicChainInformation {
  urls: string[];
  name: string;
}

export const CHAINS: {
  [chainId: number]: BasicChainInformation;
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
