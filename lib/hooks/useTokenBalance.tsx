import { BlockchainType, ChainEnum } from '../types';
import { numberWithCommas } from '../utils/formatNumbers';
import request from '../utils/request';
import { useWeb3 } from './useWeb3';
import useSWR from 'swr';

interface BalanceProps {
  address?: string;
}

export function useTokenBalance(props: BalanceProps) {
  const { address } = props;
  const { chainId } = useWeb3();

  const { data } = useSWR(
    address ? `/api/holdings?address=${address}` : ``,
    (url: string) => request(url)
  );

  const chainBalance = getChainBalance(data, chainId);

  return numberWithCommas(chainBalance ?? 0);
}

function getChainBalance(data: any, chain?: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return data?.erc?.supply;
    case ChainEnum.bsc:
      return data?.bsc?.supply;
    case ChainEnum.ftm:
      return data?.ftm?.supply;
    default:
      return data?.erc?.supply;
  }
}
