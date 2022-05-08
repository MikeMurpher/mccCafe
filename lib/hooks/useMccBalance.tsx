import { numberWithCommas } from '../utils/formatNumbers';
import { parseMCCAmount } from '../utils/parseBalance';
import { useContract } from './useContract';
import useKeepSWRDataLiveAsBlocksArrive from './useKeepSWRDataLiveAsBlocksArrive';
import { useWeb3 } from './useWeb3';
import useSWR from 'swr';

function getMCCBalance(contract: any, chainId: any) {
  return async (...args: any[]) => {
    try {
      return await contract.balanceOf(args?.[0]?.[1]);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}

interface BalanceProps {
  contractAddress: string;
  abi: any;
}

export function useMccBalance(props: BalanceProps) {
  const { contractAddress, abi } = props;

  const { address, chainId } = useWeb3();
  const contract = useContract(contractAddress, abi);

  const shouldFetch = !!contractAddress && !!contract && !!chainId;

  const { data, mutate } = useSWR(
    shouldFetch
      ? [`MccBalance-${chainId}-${address}-${contractAddress}`, address]
      : null,
    getMCCBalance(contract, chainId)
  );

  useKeepSWRDataLiveAsBlocksArrive(mutate);

  return numberWithCommas(parseMCCAmount(data ?? 0, 18, 2));
}
