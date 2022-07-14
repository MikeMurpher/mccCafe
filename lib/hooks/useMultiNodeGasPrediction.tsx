import useSWR from 'swr';
import { ONE_BILLION } from '../constants';
import { BlockchainType, ChainEnum } from '../types';
import request from '../utils/request';
import { useGasGwei } from './useGasGwei';
import { useWeb3 } from './useWeb3';

export const ETH_MULTINODE_EXACT_GAS_PREDICTION = 85000;
export const BSC_MULTINODE_EXACT_GAS_PREDICTION = 250000;
export const FTM_MULTINODE_EXACT_GAS_PREDICTION = 140000;

export function useMultiNodeGasPrediction(multiNodes: number) {
  const { provider, chainId } = useWeb3();

  const { data, isLoading } = useSWR(
    chainId ? `/api/gas-quote?chainId=${chainId}` : ``,
    (url: string) => request(url)
  );

  const gwei = useGasGwei(provider);
  const prediction = (generateChainGasPrediction(chainId) * gwei) / ONE_BILLION;

  return {
    isLoading,
    nativePrice: prediction * multiNodes,
    cartPrediction: prediction * data?.price * multiNodes,
    perNodePrediction: prediction * data?.price,
  };
}

export function generateChainGasPrediction(chain?: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return ETH_MULTINODE_EXACT_GAS_PREDICTION;
    case ChainEnum.bsc:
      return BSC_MULTINODE_EXACT_GAS_PREDICTION;
    case ChainEnum.ftm:
      return FTM_MULTINODE_EXACT_GAS_PREDICTION;
    default:
      return ETH_MULTINODE_EXACT_GAS_PREDICTION;
  }
}
