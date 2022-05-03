import { BlockchainType, ChainEnum } from '../types';
import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

export type MyWalletState = {
  provider?: any;
  web3Provider?: any;
  address?: string;
  chainId?: BlockchainType;
  isDisconnect?: boolean;
  connecting?: boolean;
  claimableNodes?: MultiNodeType[];
  resetProvider: () => void;
  updateWeb3Provider: (params: any) => void;
  addClaimableNode: (params: MultiNodeType) => void;
};

export interface MultiNodeType {
  nodeId: string;
  chainId: ChainEnum;
}

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
      addClaimableNode: (n) => {
        set((state) => {
          const currentNodes = state?.claimableNodes ?? [];
          const allNodes = [...currentNodes, n];
          const claimableNodes = new Map(
            allNodes?.map((i) => {
              return [i.nodeId, i];
            })
          );

          return {
            ...state,
            // @ts-expect-error
            claimableNodes: [...claimableNodes.values()],
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
