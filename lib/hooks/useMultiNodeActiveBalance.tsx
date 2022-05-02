import { BlockchainType } from '../types';
import { numberWithCommas } from '../utils/formatNumbers';
import { parseMCCAmount } from '../utils/parseBalance';
import useContract from './useContract';
import useKeepSWRDataLiveAsBlocksArrive from './useKeepSWRDataLiveAsBlocksArrive';
import useSWR from 'swr';

function getNodeBalance(contract: any) {
  return async (...args: any[]) => {
    const nodeId = args?.[0]?.[1];
    const callType = args?.[0]?.[2];

    if (!nodeId) {
      return null;
    }

    if (callType === 'unclaimed') {
      const claimable = await contract.getUnpaidEarnings(parseInt(nodeId));
      return claimable;
    }

    if (callType === 'totalEarnings') {
      const paid = await contract.getTotalEarnings(parseInt(nodeId));
      return paid;
    }

    return null;
  };
}

export default function useMultiNodeActiveBalance(
  contractAddress: string,
  abi: any,
  balanceType: 'unclaimed' | 'totalEarnings',
  chainId?: BlockchainType,
  nodeId?: string,
  suspense = false
) {
  const contract = useContract(contractAddress, abi);

  const shouldFetch =
    typeof contractAddress === 'string' && !!contract && !!nodeId && !!chainId;

  const result = useSWR(
    shouldFetch
      ? [
          `DividendBalance-${chainId}-${nodeId}-${balanceType}`,
          nodeId,
          balanceType,
        ]
      : null,
    getNodeBalance(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return numberWithCommas(parseMCCAmount(result?.data ?? 0, 18, 2));
}
