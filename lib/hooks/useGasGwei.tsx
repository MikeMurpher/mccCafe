import { useWeb3 } from './useWeb3';
import type { Web3Provider } from '@ethersproject/providers';
import { formatUnits } from '@ethersproject/units';
import useSWR from 'swr';

const ONE_BILLION = 1000000000;

function getGas(provider: Web3Provider) {
  return async () => {
    return provider.getGasPrice();
  };
}

export function useGasGwei() {
  const { provider } = useWeb3();

  const { data } = useSWR(provider ? ['gas'] : null, getGas(provider), {
    refreshInterval: 10 * 1000,
  });

  return Number(formatUnits(data ?? 0, 18)) * ONE_BILLION;
}
