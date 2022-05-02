import { BlockchainType } from '../types';
import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

export type MyWalletState = {
  provider?: any;
  web3Provider?: any;
  address?: string;
  chainId?: BlockchainType;
  isDisconnect?: boolean;
  connecting?: boolean;
  claimableNodes?: string[];
  resetProvider: () => void;
  updateWeb3Provider: (params: any) => void;
  addClaimableNode: (params: { nodeId: string }) => void;
};

type MyPersist = (
  config: StateCreator<MyWalletState>,
  options: PersistOptions<MyWalletState>
) => StateCreator<MyWalletState>;

const initialState = {
  provider: null,
  web3Provider: null,
  address: undefined,
  chainId: undefined,
  isDisconnect: false,
  connecting: false,
  claimableNodes: [],
};

export const useWalletStore = create<MyWalletState>(
  (persist as unknown as MyPersist)(
    (set, get) => ({
      provider: null,
      web3Provider: null,
      address: undefined,
      chainId: undefined,
      isDisconnect: false,
      connecting: false,
      claimableNodes: [],
      updateWeb3Provider: (params) => {
        set((state) => {
          return {
            ...state,
            ...params,
          };
        });
      },
      addClaimableNode: ({ nodeId }) => {
        set((state) => {
          return {
            ...state,
            // @ts-expect-error
            claimableNodes: [...new Set([...state?.claimableNodes, nodeId])],
          };
        });
      },
      disconnectAction: () => {
        set((state) => ({
          ...state,
          isDisconnect: true,
        }));
      },
      resetProvider: () => {
        set(() => ({
          ...initialState,
        }));
      },
    }),
    { name: 'wallet' }
  )
);
