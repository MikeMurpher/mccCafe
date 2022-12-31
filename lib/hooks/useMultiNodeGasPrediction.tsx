import { ONE_BILLION } from '../constants';
import { BlockchainType, ChainEnum } from '../types';
import request from '../utils/request';
import useSWR from 'swr';
import { useFeeData, useNetwork } from 'wagmi';

export const ETH_MULTINODE_EXACT_GAS_PREDICTION = 85000;
export const BSC_MULTINODE_EXACT_GAS_PREDICTION = 250000;
export const FTM_MULTINODE_EXACT_GAS_PREDICTION = 140000;

export function useMultiNodeGasPrediction(multiNodes: number) {
  const { chain } = useNetwork();

  const { data, isLoading } = useSWR(
    chain?.id ? `/api/gas-quote?chainId=${chain?.id}` : ``,
    (url: string) => request(url)
  );

  const { data: gasData, isLoading: gweiLoading } = useFeeData({
    formatUnits: 'gwei',
  });

  const prediction =
    (generateChainGasPrediction(chain?.id) *
      parseInt(gasData?.formatted?.gasPrice ?? '')) /
    ONE_BILLION;

  return {
    isLoading: isLoading || gweiLoading,
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
