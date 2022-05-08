import { BlockchainType } from '../types';
import { numberWithCommas } from '../utils/formatNumbers';
import { parseMCCAmount } from '../utils/parseBalance';
import { useContract } from './useContract';
import useKeepSWRDataLiveAsBlocksArrive from './useKeepSWRDataLiveAsBlocksArrive';
import { useWeb3 } from './useWeb3';
import useSWR from 'swr';

function getNodeBalance(contract: any) {
  return async (...args: any[]) => {
    const nodeId = args?.[0]?.[1];
    const callType = args?.[0]?.[2];

    if (!nodeId) {
      return null;
    }

    if (callType === 'unclaimed') {
      return await contract.getUnpaidEarnings(parseInt(nodeId));
    }

    if (callType === 'totalEarnings') {
      return await contract.getTotalEarnings(parseInt(nodeId));
    }

    return null;
  };
}

interface Props {
  contractAddress: string;
  abi: any;
  balanceType: 'unclaimed' | 'totalEarnings';
  chainId?: BlockchainType;
  nodeId?: string;
  address?: string;
}

export default function useMultiNodeActiveBalance(props: Props) {
  const { contractAddress, abi, balanceType, nodeId } = props;

  const { address, chainId } = useWeb3();
  const contract = useContract(contractAddress, abi);

  const shouldFetch = !!contractAddress && !!contract && !!nodeId && !!chainId;

  const result = useSWR(
    shouldFetch
      ? [
          `DividendBalance-${chainId}-${nodeId}-${balanceType}-${address}`,
          nodeId,
          balanceType,
        ]
      : null,
    getNodeBalance(contract)
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return numberWithCommas(parseMCCAmount(result?.data ?? 0, 18, 2));
}
