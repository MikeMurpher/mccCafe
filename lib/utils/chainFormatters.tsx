import { SignalSlashIcon } from '@heroicons/react/20/solid';
import { BSCIcon } from '../../components/svgs/bsc';
import { ErcIcon } from '../../components/svgs/erc';
import { FtmIcon } from '../../components/svgs/ftm';
import { BSCSCAN_URL, ETHERSCAN_URL, FTMSCAN_URL } from '../constants';
import { BlockchainType, ChainEnum, ChainNameEnum } from '../types';

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

export function generateNativeQueryCommands(chainId?: BlockchainType) {
  switch (chainId) {
    case ChainEnum.erc:
      return { nativeCurrency: 'ethereum' };
    case ChainEnum.bsc:
      return { nativeCurrency: 'binancecoin' };
    case ChainEnum.ftm:
      return { nativeCurrency: 'fantom' };
    default:
      return { nativeCurrency: 'ethereum' };
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
        <SignalSlashIcon className="w-5 h-5 text-gray-900" aria-hidden="true" />
      );
    default:
      return (
        <SignalSlashIcon className="w-5 h-5 text-black" aria-hidden="true" />
      );
  }
}

export function generateChainGasMultiple(chainId?: BlockchainType): number {
  switch (chainId) {
    case ChainEnum.erc:
      return 1;
    case ChainEnum.bsc:
      return 1.675;
    case ChainEnum.ftm:
      return 1;
    default:
      return 1;
  }
}
