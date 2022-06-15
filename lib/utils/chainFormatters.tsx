import { BSCIcon } from '../../components/svgs/bsc';
import { ErcIcon } from '../../components/svgs/erc';
import { FtmIcon } from '../../components/svgs/ftm';
import {
  BSCSCAN_URL,
  BUSD,
  ERC_USDC,
  ETHERSCAN_URL,
  FTMSCAN_URL,
  FTM_USDC,
  WBNB,
  WETH,
  WFTM,
} from '../constants';
import { BlockchainType, ChainEnum, ChainNameEnum } from '../types';
import { StatusOfflineIcon } from '@heroicons/react/solid';

export function generateChainBase(chain?: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return ETHERSCAN_URL;
    case ChainEnum.bsc:
      return BSCSCAN_URL;
    case ChainEnum.ftm:
      return FTMSCAN_URL;
    default:
      ``;
  }
}

export function generateChainName(chain?: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return `eth`;
    case ChainEnum.bsc:
      return ChainNameEnum.bsc;
    case ChainEnum.ftm:
      return ChainNameEnum.ftm;
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

export function generateChainAbbreviation(chain?: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return 'Ξ';
    case ChainEnum.bsc:
      return 'BNB ';
    case ChainEnum.ftm:
      return 'FTM ';
    default:
      return 'Ξ';
  }
}

export function generateBitqueryChainData(chainId?: BlockchainType) {
  switch (chainId) {
    case ChainEnum.erc:
      return { network: 'ethereum', usdc: ERC_USDC, nativeCurrency: WETH };
    case ChainEnum.bsc:
      return { network: ChainNameEnum.bsc, usdc: BUSD, nativeCurrency: WBNB };
    case ChainEnum.ftm:
      return { network: 'fantom', usdc: FTM_USDC, nativeCurrency: WFTM };
    default:
      return { network: 'ethereum', usdc: ERC_USDC, nativeCurrency: WETH };
  }
}

export function renderConnectedChain(chain?: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return <ErcIcon />;
    case ChainEnum.bsc:
      return <BSCIcon />;
    case ChainEnum.ftm:
      return <FtmIcon />;
    case ChainEnum.offline:
      return (
        <StatusOfflineIcon
          className="w-5 h-5 text-gray-900"
          aria-hidden="true"
        />
      );
    default:
      return (
        <StatusOfflineIcon className="w-5 h-5 text-black" aria-hidden="true" />
      );
  }
}
