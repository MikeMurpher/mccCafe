import { ONE_BILLION } from '../constants';
import type { Web3Provider } from '@ethersproject/providers';
import { formatUnits } from '@ethersproject/units';
import useSWR from 'swr';

function getGas(provider: Web3Provider) {
  return async () => {
    return provider.getGasPrice();
  };
}

export function useGasGwei(provider: any) {
  const { data } = useSWR(provider ? ['gas'] : null, getGas(provider), {
    refreshInterval: 10 * 1000,
  });

  return Number(formatUnits(data ?? 0, 18)) * ONE_BILLION;
}
