export const ETHERSCAN_URL = 'https://etherscan.io/';
export const BSCSCAN_URL = 'https://bscscan.com';
export const FTMSCAN_URL = 'https://ftmscan.com';

export const RECOMMENDED_MULTI_GAS = 300000;
export const RECOMMENDED_SINGLE_GAS = 250000;

export const MCC_CONTRACT = '0xC146B7CdBaff065090077151d391f4c96Aa09e0C';
// prettier-ignore
export const MULTINODE_CLAIM_CONTRACT = '0x4fd61669334f6fedf5741bfb56fe673bd53a730f';
export const MULTINODE_CONTRACT = '0xf9b899e6e84f6383f99b262eda36c9bddd5fc080';

export const WFTM = '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83';
export const FTM_USDC = '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75';

export const WBNB = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
export const BUSD = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';

export const WETH = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
export const ERC_USDC = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';

export const ONE_BILLION = 1000000000;

export const mainContracts = [
  {
    name: 'mcc token',
    img: '/logos/mcc-black.png',
    alt: 'multichaincapital.eth image',
    contract: '0xc146b7cdbaff065090077151d391f4c96aa09e0c',
    subItems: [
      {
        link: 'https://etherscan.io/token/0xc146b7cdbaff065090077151d391f4c96aa09e0c',
        img: '/networks/eth.png',
        title: 'etherscan',
      },
      {
        link: 'https://bscscan.com/token/0xc146b7cdbaff065090077151d391f4c96aa09e0c',
        img: '/networks/bsc.png',
        title: 'Binance Smart Chain',
      },
      {
        link: 'https://polygonscan.com/token/0xc146b7cdbaff065090077151d391f4c96aa09e0c',
        img: '/networks/polygon.png',
        title: 'Polygon',
      },
      {
        link: 'https://andromeda-explorer.metis.io/address/0xC146B7CdBaff065090077151d391f4c96Aa09e0C/transactions',
        img: '/networks/metis.png',
        title: 'Metis',
      },
      {
        link: 'https://ftmscan.com/token/0xc146b7cdbaff065090077151d391f4c96aa09e0c',
        img: '/networks/ftm.png',
        title: 'Fantom',
      },
    ],
  },
  {
    name: 'multichaincapital.eth',
    img: '/logos/mcc-black.png',
    alt: 'multichaincapital.eth',
    contract: '0xfbf335f8224a102e22abe78d78cc52dc95e074fa',
    subItems: [
      {
        link: 'https://etherscan.io/address/0xfbf335f8224a102e22abe78d78cc52dc95e074fa',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0xfbf335f8224a102e22abe78d78cc52dc95e074fa',
        img: '/networks/bsc.png',
        title: 'Binance Smart Chain',
      },
      {
        link: 'https://polygonscan.com/address/0xfbf335f8224a102e22abe78d78cc52dc95e074fa',
        img: '/networks/polygon.png',
        title: 'Polygon',
      },
      {
        link: 'https://ftmscan.com/address/0xfbf335f8224a102e22abe78d78cc52dc95e074fa',
        img: '/networks/ftm.png',
        title: 'Fantom',
      },
    ],
  },
  {
    name: 'ens.multichaincapital',
    img: '/logos/mcc-black.png',
    alt: 'ens.multichaincapital',
    contract: '0xfef02f8b3fb7546e362a58442e45cd1c9604ea01',
    subItems: [
      {
        link: 'https://etherscan.io/address/0xfef02f8b3fb7546e362a58442e45cd1c9604ea01',
        img: '/networks/eth.png',
        title: 'etherscan',
      },
    ],
  },
  {
    name: 'farming.multichaincapital',
    img: '/logos/mcc-black.png',
    alt: 'farming.multichaincapital',
    contract: '0x6f71fc3925605f06672409c71844ead4b700af5f',
    subItems: [
      {
        link: 'https://etherscan.io/address/0x6f71fc3925605f06672409c71844ead4b700af5f',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0x6f71fc3925605f06672409c71844ead4b700af5f',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0x6f71fc3925605f06672409c71844ead4b700af5f',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'lowrisk.multichaincapital',
    img: '/logos/mcc-black.png',
    alt: 'lowrisk.multichaincapital',
    contract: '0xa24b84ee685501bb1d269e9efd5ee81806e63b5e',
    subItems: [
      {
        link: 'https://etherscan.io/address/0xa24b84ee685501bb1d269e9efd5ee81806e63b5e',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0xa24b84ee685501bb1d269e9efd5ee81806e63b5e',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0xa24b84ee685501bb1d269e9efd5ee81806e63b5e',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'highrisk.multichaincapital',
    img: '/logos/mcc-black.png',
    alt: 'highrisk.multichaincapital',
    contract: '0x73a5DBA52DF247A66798575f4E2bB3747f8C16d3',
    subItems: [
      {
        link: 'https://etherscan.io/address/0x73a5DBA52DF247A66798575f4E2bB3747f8C16d3',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0x73a5DBA52DF247A66798575f4E2bB3747f8C16d3',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0x73a5DBA52DF247A66798575f4E2bB3747f8C16d3',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'airdrop wallet',
    img: '/logos/mcc-black.png',
    alt: 'airdrop wallet',
    contract: '0x43853a1999f1dc727f407e22283b16bc0fe7b49b',
    subItems: [
      {
        link: 'https://etherscan.io/address/0x43853a1999f1dc727f407e22283b16bc0fe7b49b',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0x43853a1999f1dc727f407e22283b16bc0fe7b49b',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://polygonscan.com/address/0x43853a1999f1dc727f407e22283b16bc0fe7b49b',
        img: '/networks/polygon.png',
        title: 'polygon',
      },
      {
        link: 'https://ftmscan.com/address/0x43853a1999f1dc727f407e22283b16bc0fe7b49b',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'incubation.multichaincapital',
    img: '/logos/chef.png',
    alt: 'incubation.multichaincapital',
    contract: '0x73a5DBA52DF247A66798575f4E2bB3747f8C16d3',
    subItems: [
      {
        link: 'https://etherscan.io/address/0x73a5DBA52DF247A66798575f4E2bB3747f8C16d3',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0x73a5DBA52DF247A66798575f4E2bB3747f8C16d3',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0x73a5DBA52DF247A66798575f4E2bB3747f8C16d3',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'multinodes deployer',
    img: '/logos/mcc-multinodes.png',
    alt: 'multinodes deployer',
    contract: '0x9dbf7788c6c0c6e9b2f34d9f118ba6750c71271c',
    subItems: [
      {
        link: 'https://etherscan.io/address/0x9dbf7788c6c0c6e9b2f34d9f118ba6750c71271c',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0x9dbf7788c6c0c6e9b2f34d9f118ba6750c71271c',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0x9dbf7788c6c0c6e9b2f34d9f118ba6750c71271c',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'multinodes multichaincapital',
    img: '/logos/mcc-multinodes.png',
    alt: 'multinodes multichaincapital',
    contract: '0xf9b899e6e84f6383f99b262eda36c9bddd5fc080',
    subItems: [
      {
        link: 'https://etherscan.io/address/0xf9b899e6e84f6383f99b262eda36c9bddd5fc080',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0xf9b899e6e84f6383f99b262eda36c9bddd5fc080',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0xf9b899e6e84f6383f99b262eda36c9bddd5fc080',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'node rewards multichaincapital',
    img: '/logos/mcc-multinodes.png',
    alt: 'node rewards multichaincapital',
    contract: '0x4fd61669334f6fedf5741bfb56fe673bd53a730f',
    subItems: [
      {
        link: 'https://etherscan.io/address/0x4fd61669334f6fedf5741bfb56fe673bd53a730f',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0x4fd61669334f6fedf5741bfb56fe673bd53a730f',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0x4fd61669334f6fedf5741bfb56fe673bd53a730f',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'multiprint deployer',
    img: '/incubators/multiprint.png',
    alt: 'multiprint deployer',
    contract: '0x6c96997d0fe3ea4e67af1f48f23d1f9c265ee401',
    subItems: [
      {
        link: 'https://etherscan.io/address/0x6c96997d0fe3ea4e67af1f48f23d1f9c265ee401',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0x6c96997d0fe3ea4e67af1f48f23d1f9c265ee401',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0x6c96997d0fe3ea4e67af1f48f23d1f9c265ee401',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'reflector collector deployer',
    img: '/incubators/rc.png',
    alt: 'reflector collector deployer',
    contract: '0x9d5b051685d9272d20af3c94134cb7ac41db5648',
    subItems: [
      {
        link: 'https://etherscan.io/address/0x9d5b051685d9272d20af3c94134cb7ac41db5648',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0x9d5b051685d9272d20af3c94134cb7ac41db5648',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://polygonscan.com/address/0x9d5b051685d9272d20af3c94134cb7ac41db5648',
        img: '/networks/polygon.png',
        title: 'polygon',
      },
      {
        link: 'https://ftmscan.com/address/0x9d5b051685d9272d20af3c94134cb7ac41db5648',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'humanonlyart.eth',
    img: '/incubators/art.png',
    alt: 'human only art image',
    contract: '0x9707cbbcfd356c37a69f938cedfc211ea3b548e6',
    subItems: [
      {
        link: 'https://etherscan.io/address/0x9707cbbcfd356c37a69f938cedfc211ea3b548e6',
        img: '/networks/eth.png',
        title: 'etherscan',
      },
    ],
  },
];

export const treasuryContracts = [
  {
    name: 'treasury.multichaincapital',
    img: '/logos/mcc-black.png',
    alt: 'treasury.multichaincapital',
    contract: '0xed528fc31f2575312ec3336e0f6ec9812b534937',
    subItems: [
      {
        link: 'https://etherscan.io/address/0xed528fc31f2575312ec3336e0f6ec9812b534937',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0xed528fc31f2575312ec3336e0f6ec9812b534937',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0xed528fc31f2575312ec3336e0f6ec9812b534937',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'Gnosis Safes',
    img: '/logos/gnosis.png',
    alt: 'Gnosis Safes',
    contract: '0x6c96997d0fe3ea4e67af1f48f23d1f9c265ee401',
    subItems: [
      {
        link: 'https://gnosis-safe.io/app/eth:0xed528FC31f2575312Ec3336E0F6ec9812B534937/balances',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://gnosis-safe.io/app/bnb:0x82b65df1b0ec5276c6dd9e44c1ecee2f3c9eb357/balances',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://safe.fantom.network/ftm:0xee0256f9bdbc01D68999C2614db31660d2c59fF7/balances',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
];
export const incubatorContracts = [
  {
    name: 'BlackHole',
    img: '/incubators/blackhole.png',
    alt: 'BlackHole',
    contract: '0x1d84e6F3C03c869b951d017a852f8464174b3FF4',
    subItems: [
      {
        link: 'https://etherscan.io/address/0x1d84e6F3C03c869b951d017a852f8464174b3FF4',
        img: '/networks/eth.png',
        title: 'etherscan',
      },
      {
        link: 'https://bscscan.com/address/0x1d84e6F3C03c869b951d017a852f8464174b3FF4',
        img: '/networks/bsc.png',
        title: 'ftmscan',
      },
      {
        link: 'https://ftmscan.com/address/0x1d84e6F3C03c869b951d017a852f8464174b3FF4',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'Cash Back',
    img: '/incubators/cashback.png',
    alt: 'Cash Back',
    contract: '0x6a1e94128a5065c6544d23ffa9b4e78b69015611',
    subItems: [
      {
        link: 'https://etherscan.io/address/0x6a1e94128a5065c6544d23ffa9b4e78b69015611',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0x6a1e94128a5065c6544d23ffa9b4e78b69015611',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0x6a1e94128a5065c6544d23ffa9b4e78b69015611',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'CZ Retirement',
    img: '/incubators/czr.png',
    alt: 'CZ Retirement',
    contract: '0xC5401F6EAb46cBa5a8151D1132c022a311d9AEAE',
    subItems: [
      {
        link: 'https://etherscan.io/address/0xC5401F6EAb46cBa5a8151D1132c022a311d9AEAE',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0xC5401F6EAb46cBa5a8151D1132c022a311d9AEAE',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0xC5401F6EAb46cBa5a8151D1132c022a311d9AEAE',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'Gold',
    img: '/incubators/gold.png',
    alt: 'Gold',
    contract: '0x7058664c822f4853c0afffc99bdd4eff27f6497b',
    subItems: [
      {
        link: 'https://ftmscan.com/address/0x7058664c822f4853c0afffc99bdd4eff27f6497b',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'Human Only Art',
    img: '/incubators/art.png',
    alt: 'Human Only Art',
    contract: '0x52b976bda3bc65b5b36234c29cda1a4f156e8ca4',
    subItems: [
      {
        link: 'https://etherscan.io/token/0x52b976bda3bc65b5b36234c29cda1a4f156e8ca4',
        img: '/networks/eth.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'Multiprint',
    img: '/incubators/multiprint.png',
    alt: 'Multiprint',
    contract: '0xc87cee866ebdfc4F0E07E80157f0f4cBb7Ad329e',
    subItems: [
      {
        link: 'https://etherscan.io/address/0xc87cee866ebdfc4F0E07E80157f0f4cBb7Ad329e',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0xc87cee866ebdfc4F0E07E80157f0f4cBb7Ad329e',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0xc87cee866ebdfc4F0E07E80157f0f4cBb7Ad329e',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'OG Kollective',
    img: '/incubators/ogkollective.png',
    alt: 'OG Kollective',
    contract: '0x3B9c214a501b2AE33AB1793B57b09879a754F2ef',
    subItems: [
      {
        link: 'https://etherscan.io/address/0x3B9c214a501b2AE33AB1793B57b09879a754F2ef',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0x3B9c214a501b2AE33AB1793B57b09879a754F2ef',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0x3B9c214a501b2AE33AB1793B57b09879a754F2ef',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'OG Tomb',
    img: '/incubators/ogtomb.png',
    alt: 'OG Tomb',
    contract: '0x318315ac34494caaec9028cbb63eff15c7b3b2e4',
    subItems: [
      {
        link: 'https://ftmscan.com/address/0x318315ac34494caaec9028cbb63eff15c7b3b2e4',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'OG T-Share',
    img: '/incubators/ogtshare.png',
    alt: 'OG T-Share',
    contract: '0x754c8232a9ad41cc305e7f7c5f5bc2a86b4b8437',
    subItems: [
      {
        link: 'https://ftmscan.com/address/0x754c8232a9ad41cc305e7f7c5f5bc2a86b4b8437',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'OG T-Bond',
    img: '/incubators/ogtbond.png',
    alt: 'OG T-Bond',
    contract: '0x6e3a003042380d559175cDb8d372B6a07eC511b1',
    subItems: [
      {
        link: 'https://ftmscan.com/address/0x6e3a003042380d559175cDb8d372B6a07eC511b1',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'Reflector Collector',
    img: '/incubators/rc.png',
    alt: 'Reflector Collector',
    contract: '0xF6ee08FA550E1cb08C0821a4DA8CEa57b8909D2e',
    subItems: [
      {
        link: 'https://etherscan.io/address/0xF6ee08FA550E1cb08C0821a4DA8CEa57b8909D2e',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0xF6ee08FA550E1cb08C0821a4DA8CEa57b8909D2e',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0xF6ee08FA550E1cb08C0821a4DA8CEa57b8909D2e',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'Sales Tax',
    img: '/incubators/sales.png',
    alt: 'Sales Tax',
    contract: '0xdd7788db6ff418c71e32e5cbf7205b6c1b2bb07f',
    subItems: [
      {
        link: 'https://bscscan.com/address/0xdd7788db6ff418c71e32e5cbf7205b6c1b2bb07f',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0xdd7788db6ff418c71e32e5cbf7205b6c1b2bb07f',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
      {
        link: 'https://andromeda-explorer.metis.io/token/0xdd7788db6ff418c71e32e5cbf7205b6c1b2bb07f/token-transfers',
        img: '/networks/metis.png',
        title: 'andromeda explorer',
      },
    ],
  },
  {
    name: 'Slvr',
    img: '/incubators/slvr.png',
    alt: 'Slvr',
    contract: '0xddcc5bd7581955c7df2f902423bfe53b47c1f935',
    subItems: [
      {
        link: 'https://ftmscan.com/address/0xddcc5bd7581955c7df2f902423bfe53b47c1f935',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'Unit Bias',
    img: '/incubators/ub.png',
    alt: 'Unit Bias',
    contract: '0x8c5b7f8e055afacdda801fc7bf8f8a1266661080',
    subItems: [
      {
        link: 'https://etherscan.io/address/0x8c5b7f8e055afacdda801fc7bf8f8a1266661080',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0x8c5b7f8e055afacdda801fc7bf8f8a1266661080',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0x8c5b7f8e055afacdda801fc7bf8f8a1266661080',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
      {
        link: 'https://andromeda-explorer.metis.io/token/0x8c5b7f8e055afacdda801fc7bf8f8a1266661080/token-transfers',
        img: '/networks/metis.png',
        title: 'andromeda explorer',
      },
    ],
  },
  {
    name: 'Ultra Unit Bias',
    img: '/incubators/uub.png',
    alt: 'Ultra Unit Bias',
    contract: '0xeeed1c46188a9dbe0460968bb036a69145e82273',
    subItems: [
      {
        link: 'https://etherscan.io/address/0xeeed1c46188a9dbe0460968bb036a69145e82273',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0xeeed1c46188a9dbe0460968bb036a69145e82273',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0xeeed1c46188a9dbe0460968bb036a69145e82273',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
];
export const farmingContracts = [
  {
    name: 'MultiPrint',
    img: '/incubators/multiprint.png',
    alt: 'MultiPrint',
    contract: '',
    subItems: [
      {
        link: 'https://mprint.mchain.capital/',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://multiprint.mchain.capital/',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://multiprint-ftm.mchain.capital/',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'Reflector Collector',
    img: '/incubators/rc.png',
    alt: 'Reflector Collector',
    contract: '',
    subItems: [
      {
        link: 'https://rc-eth.mchain.capital/',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://rc-bsc.mchain.capital/',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://rc-ftm.mchain.capital/',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
];
export const lendingContracts = [
  {
    name: 'Silver Protocol',
    img: '/incubators/slvr.png',
    alt: 'Silver Protocol',
    contract: '',
    subItems: [
      {
        link: 'https://app.silverprotocol.eth.limo/',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
];
export const marketplaceContracts = [
  {
    name: 'Human Only Art',
    img: '/incubators/art.png',
    alt: 'Human Only Art',
    contract: '',
    subItems: [
      {
        link: 'https://humanonlyart.eth.limo/',
        img: '/incubators/art.png',
        title: 'Human only art Image',
      },
      {
        link: 'https://twitter.com/HumanOnlyArtNFT',
        img: '/logos/twitter.png',
        title: 'twitter',
      },
      {
        link: 'https://opensea.io/HumanOnlyArt',
        img: '/logos/opensea.png',
        title: 'OpenSea',
      },
    ],
  },
  {
    name: 'MultiNodes Marketplace',
    img: '/nodes/presidential.png',
    alt: 'MultiNodes Marketplace',
    contract: '',
    subItems: [
      {
        link: 'https://opensea.io/collection/multinode',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://tofunft.com/collection/multi-chain-capital-multinodes/items',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://paintswap.finance/marketplace/collections/0xf9b899e6e84f6383f99b262eda36c9bddd5fc080',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
];
export const governanceContracts = [
  {
    name: 'OG TOMB',
    img: '/incubators/ogtomb.png',
    alt: 'OG Tomb image',
    contract: '',
    subItems: [
      {
        link: 'https://ogtomb.com/',
        img: '/incubators/ogtomb.png',
        title: 'OG Tomb Website',
      },
      {
        link: 'https://twitter.com/mccogtomb',
        img: '/logos/twitter.png',
        title: 'twitter',
      },
      {
        link: 'https://medium.com/@mikemurpher/ogtomb-help-guides-index-e404bf21a5a',
        img: '/logos/medium.png',
        title: 'Medium Help Guides',
      },
    ],
  },
];

export const retiredContracts = [
  {
    name: 'Andre Anonymous',
    img: '/incubators/aa.png',
    alt: 'Andre Anonymous',
    contract: '0x6c96997d0fe3ea4e67af1f48f23d1f9c265ee401',
    subItems: [
      {
        link: 'https://etherscan.io/address/0xb0918b73a7d8d53df8bd0d91d2821478db17da2b',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0xb0918b73a7d8d53df8bd0d91d2821478db17da2b',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0xb0918b73a7d8d53df8bd0d91d2821478db17da2b',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'Friday Night Degen',
    img: '/incubators/fnd.png',
    alt: 'Friday Night Degen',
    contract: '0x86904a5ce54b397bf8a0041cbb9725980d5d6b7b',
    subItems: [
      {
        link: 'https://bscscan.com/address/0x86904a5ce54b397bf8a0041cbb9725980d5d6b7b',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0x86904a5ce54b397bf8a0041cbb9725980d5d6b7b',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'Reflective EURO',
    img: '/incubators/reuro.png',
    alt: 'Reflective EURO',
    contract: '0xb9681e6e064f2f36de3e1bc614b83d306fc2d461',
    subItems: [
      {
        link: 'https://etherscan.io/address/0xb9681e6e064f2f36de3e1bc614b83d306fc2d461',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
    ],
  },
  {
    name: 'TheMerge.Tech',
    img: '/incubators/merge.png',
    alt: 'TheMerge.Tech',
    contract: '0x0a533badc3d59014c761674c1962e2d3aaef1035',
    subItems: [
      {
        link: 'https://etherscan.io/address/0x0a533badc3d59014c761674c1962e2d3aaef1035',
        img: '/networks/eth.png',
        title: 'Ethereum',
      },
      {
        link: 'https://bscscan.com/address/0x0a533badc3d59014c761674c1962e2d3aaef1035',
        img: '/networks/bsc.png',
        title: 'bscscan',
      },
      {
        link: 'https://ftmscan.com/address/0x0a533badc3d59014c761674c1962e2d3aaef1035',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
];

export const miscellaneousContracts = [
  {
    name: 'ABC Protocol',
    img: '/incubators/abc.png',
    alt: 'ABC Protocol',
    contract: '0xebde95c46e429ecd284d04bffcfd9b4cb9861dfc',
    subItems: [
      {
        link: 'https://ftmscan.com/address/0xebde95c46e429ecd284d04bffcfd9b4cb9861dfc',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'Greenlight',
    img: '/incubators/green.png',
    alt: 'Greenlight Image',
    contract: '0xe5c8e7a3be1d6b24b41e4418ba46e31b35b86f0c',
    subItems: [
      {
        link: 'https://ftmscan.com/address/0xe5c8e7a3be1d6b24b41e4418ba46e31b35b86f0c',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'Just Test',
    img: '/incubators/justtest.png',
    alt: 'Just Test',
    contract: '0xACACab474461877B90E6fDca44A2F8d1B5941BAf',
    subItems: [
      {
        link: 'https://ftmscan.com/address/0xACACab474461877B90E6fDca44A2F8d1B5941BAf',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'Multi-Chain Mirror',
    img: '/incubators/mirror.png',
    alt: 'Multi-Chain Mirror',
    contract: '0xfb0a20b546aa5c5cdbc9e2dcbc472282f2dc28c8',
    subItems: [
      {
        link: 'https://ftmscan.com/address/0xfb0a20b546aa5c5cdbc9e2dcbc472282f2dc28c8',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
  {
    name: 'RMPL',
    img: '/incubators/rmpl.png',
    alt: 'RMPL',
    contract: '0x137c1b5974a514965021b9c728a5551b4985dac5',
    subItems: [
      {
        link: 'https://ftmscan.com/address/0x137c1b5974a514965021b9c728a5551b4985dac5',
        img: '/networks/ftm.png',
        title: 'ftmscan',
      },
    ],
  },
];

export const farmingPlatforms = [
  {
    chainId: 56,
    farms: [
      {
        name: 'Multiprint',
        symbol: 'MPRINT',
        decimals: 18,
        farmcontract: '0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C',
        fetchcontract: '0x53f791BAd9f03942d299A9A215128b6a62BBaa04',
        contractfunction: 'pendingRewardsMasterChef',
      },
      {
        name: 'Reflector Collector',
        symbol: 'RC',
        decimals: 18,
        farmcontract: '0x796a21b01b13696164bcF6BD733cFE36890c54CB',
        fetchcontract: '0x53f791BAd9f03942d299A9A215128b6a62BBaa04',
        contractfunction: 'pendingRewardsReflectorChef',
      },
    ],
  },
  {
    chainId: 250,
    farms: [
      {
        name: 'Multiprint',
        symbol: 'MPRINT',
        decimals: 18,
        farmcontract: '0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C',
        fetchcontract: '0x4e81a6ee816bDA3798E7A1D3597c172Adc07668b',
        contractfunction: 'pendingRewardsMasterChef',
      },
      {
        name: 'Reflector Collector',
        symbol: 'RC',
        decimals: 18,
        farmcontract: '0x796a21b01b13696164bcF6BD733cFE36890c54CB',
        fetchcontract: '0x4e81a6ee816bDA3798E7A1D3597c172Adc07668b',
        contractfunction: 'pendingRewardsReflectorChef',
      },
    ],
  },
];
