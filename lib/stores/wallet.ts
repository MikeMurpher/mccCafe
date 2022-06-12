import { BlockchainType, ChainEnum, WalletType } from '../types';
import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

export type MyWalletState = {
  manualAddress?: string;
  manualChaindId?: BlockchainType;
  isDisconnected: WalletType[];
  previousConnections: WalletType[];
  claimableNodes?: MultiNodeType[];
  multiNodes?: any[];
  walletNodeStats: {
    available: number;
    producing: number;
  };
  resetMultiNodeStats: () => void;
  addClaimableNode: (params: MultiNodeType) => void;
  addDisconnectAction: (params: WalletType) => void;
  addPreviousConnectionAction: (params: WalletType) => void;
  removeDisconnectAction: (params: WalletType) => void;
  addNodeStats: (params: any) => void;
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
  manualAddress: undefined,
  manualChaindId: undefined,
  isDisconnected: [],
  claimableNodes: [],
  previousConnections: [],
  multiNodes: [],
  walletNodeStats: {
    available: 0,
    producing: 0,
  },
};

export const useWalletStore = create<MyWalletState>(
  (persist as unknown as MyPersist)(
    (set, get) => ({
      manualAddress: undefined,
      manualChaindId: undefined,
      isDisconnected: [],
      claimableNodes: [],
      previousConnections: [],
      multiNodes: [],
      walletNodeStats: {
        available: 0,
        producing: 0,
      },
      addNodeStats: (n) => {
        set((state) => {
          const currentNodeStats = state?.multiNodes ?? [];
          const allNodes = [...currentNodeStats, n].filter(Boolean);
          const builtNodeStats = new Map(
            allNodes?.map((i) => {
              return [i.nodeId, i];
            })
          );

          // @ts-expect-error
          const multiNodes = [...builtNodeStats.values()];

          return {
            ...state,
            multiNodes,
            walletNodeStats: {
              ...multiNodes.reduce(
                (acc, cur) => {
                  if (!cur?.mccClaimable && !cur?.mccPerDay) {
                    return acc;
                  }

                  return {
                    available:
                      acc?.available +
                      parseInt(cur?.mccClaimable?.replaceAll(',', '')),
                    producing: acc?.producing + parseInt(cur?.mccPerDay),
                  };
                },
                {
                  available: 0,
                  producing: 0,
                }
              ),
            },
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
      removeDisconnectAction: (params) => {
        set((state) => ({
          ...state,
          isDisconnected: [],
        }));
      },
      addDisconnectAction: (params) => {
        set((state) => ({
          ...state,
          isDisconnected: [...state.isDisconnected, params],
        }));
      },
      removePreviousConnectionAction: () => {
        set((state) => ({
          ...state,
          previousConnections: [],
        }));
      },
      addPreviousConnectionAction: (params) => {
        set((state) => ({
          ...state,
          previousConnections: [...state.previousConnections, params],
        }));
      },
      resetMultiNodeStats: () => {
        set((state) => ({
          ...state,
          multiNodes: [],
          claimableNodes: [],
          walletNodeStats: {
            available: 0,
            producing: 0,
          },
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
