import { useWeb3 } from './useWeb3';
import { Contract } from '@ethersproject/contracts';
import { useMemo } from 'react';

export default function useContract<T extends Contract = Contract>(
  address: string,
  ABI: any
): T | null {
  const { chainId, address: signer, provider } = useWeb3();

  return useMemo(() => {
    if (!address || !ABI || !provider || !chainId) {
      return null;
    }

    try {
      return new Contract(address, ABI, provider.getSigner(signer));
    } catch (error) {
      console.error('Failed To Get Contract', error);

      return null;
    }
  }, [address, ABI, provider, signer]) as T;
}
