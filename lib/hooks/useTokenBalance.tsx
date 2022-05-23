import { numberWithCommas } from '../utils/formatNumbers';
import { parseBalance } from '../utils/parseBalance';
import { useContract } from './useContract';
import useKeepSWRDataLiveAsBlocksArrive from './useKeepSWRDataLiveAsBlocksArrive';
import { useWeb3 } from './useWeb3';
import useSWR from 'swr';

function getContractBalance(contract: any, chainId: any) {
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

export function useTokenBalance(props: BalanceProps) {
  const { contractAddress, abi } = props;

  const { address, chainId } = useWeb3();
  const contract = useContract(contractAddress, abi);

  const shouldFetch = !!contractAddress && !!contract && !!chainId;

  const { data, mutate } = useSWR(
    shouldFetch
      ? [`balance-${chainId}-${address}-${contractAddress}`, address]
      : null,
    getContractBalance(contract, chainId)
  );

  useKeepSWRDataLiveAsBlocksArrive(mutate);

  return numberWithCommas(parseBalance(data ?? 0, 18, 2));
}
