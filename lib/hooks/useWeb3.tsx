import { MyWalletState, useWalletStore } from '../stores/wallet';
import useENSName from './useENSName';
import useMetaMaskOnboarding from './useMetaMaskOnboarding';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { useWeb3React } from '@web3-react/core';
import { providers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import WalletLink from 'walletlink';
import Web3Modal from 'web3modal';

type Web3Client = MyWalletState & {
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  ENSName: string;
};

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_ID, // required
    },
  },
  'custom-walletlink': {
    display: {
      logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
      name: 'Coinbase',
      description: 'Connect to Coinbase Wallet (not Coinbase App)',
    },
    options: {
      appName: 'Coinbase', // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
      chainId: 1,
    },
    package: WalletLink,
    connector: async (_: any, options: any) => {
      const { appName, networkUrl, chainId } = options;
      const walletLink = new WalletLink({
        appName,
      });
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
      await provider.enable();
      return provider;
    },
  },
};

let web3Modal: any;

if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions,
    theme: 'dark',
  });
}

export function useWeb3() {
  const { active, error, account } = useWeb3React();

  const { stopOnboarding } = useMetaMaskOnboarding();

  const { address, connecting, resetProvider, updateWeb3Provider, chainId } =
    useWalletStore((state) => state);

  const [provider, setProvider] = useState<any>(null);

  const disconnect = useCallback(async () => {
    if (web3Modal) {
      web3Modal.clearCachedProvider();
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect();
      }
      resetProvider();
      setProvider(null);
    } else {
      console.error('No Web3Modal');
    }
  }, [provider]);

  const connect = useCallback(async function () {
    try {
      // This is the initial `provider` that is returned when
      // using web3Modal to connect. Can be MetaMask or WalletConnect.
      const provider = await web3Modal.connect();

      // We plug the initial `provider` into ethers.js and get back
      // a Web3Provider. This will add on methods from ethers.js and
      // event listeners such as `.on()` will be different.
      const web3Provider = new providers.Web3Provider(provider);

      const signer = web3Provider.getSigner();
      const address = await signer.getAddress();
      const network = await web3Provider.getNetwork();

      updateWeb3Provider({
        connecting: false,
        address,
        chainId: network.chainId,
      });
      setProvider(web3Provider);
    } catch (error) {
      updateWeb3Provider({
        connecting: false,
      });
      console.error(error);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (active || error) {
      stopOnboarding();
    }
  }, [active, error, stopOnboarding]);

  const ENSName = useENSName(`${account}`);

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal?.cachedProvider) {
      connect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connect]);

  // EIP-1193 events
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        updateWeb3Provider({
          address: accounts[0],
        });
      };

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId: string) => {
        if (typeof window !== 'undefined') {
          updateWeb3Provider({
            chainId: _hexChainId,
          });
          window.location.reload();
        } else {
          console.log('window is undefined');
        }
      };

      const handleDisconnect = (error: { code: number; message: string }) => {
        // eslint-disable-next-line no-console
        disconnect();
      };

      provider.on('accountsChanged', handleAccountsChanged);
      provider.on('chainChanged', handleChainChanged);
      provider.on('disconnect', handleDisconnect);

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged);
          provider.removeListener('chainChanged', handleChainChanged);
          provider.removeListener('disconnect', handleDisconnect);
        }
      };
    }
  }, [provider, disconnect]);

  return {
    provider,
    ENSName,
    address,
    connecting,
    chainId,
    connect,
    disconnect,
  } as Web3Client;
}
