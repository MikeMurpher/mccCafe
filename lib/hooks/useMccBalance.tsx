import { BlockchainType } from '../types';
import { numberWithCommas } from '../utils/formatNumbers';
import { parseMCCAmount } from '../utils/parseBalance';
import useContract from './useContract';
import useKeepSWRDataLiveAsBlocksArrive from './useKeepSWRDataLiveAsBlocksArrive';
import useSWR from 'swr';

function getMCCBalance(contract: any) {
  return async (...args: any[]) => {
    return await contract.balanceOf(args?.[0]?.[1]);
  };
}

interface BalanceProps {
  contractAddress: string;
  abi: any;
  type: 'balance';
  chainId?: BlockchainType;
  address?: string;
}

export function useMccBalance(props: BalanceProps) {
  const { contractAddress, abi, type, chainId, address } = props;
  const contract = useContract(contractAddress, abi);

  const shouldFetch =
    typeof contractAddress === 'string' && !!contract && !!chainId && !!address;

  const result = useSWR(
    shouldFetch ? [`MccBalance-${chainId}-${type}-${address}`, address] : null,
    getMCCBalance(contract)
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return numberWithCommas(parseMCCAmount(result?.data ?? 0, 18, 2));
}
