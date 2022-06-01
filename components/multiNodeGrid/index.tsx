import MultiNodeContractAbi from '../../contracts/MultiNode.json';
import {
  MULTINODE_CLAIM_CONTRACT,
  RECOMMENDED_MULTI_GAS,
} from '../../lib/constants';
import * as gtag from '../../lib/gtag';
import { useContract } from '../../lib/hooks/useContract';
import { useWeb3 } from '../../lib/hooks/useWeb3';
import { MultiNodeType, useWalletStore } from '../../lib/stores/wallet';
import { BlockchainType, ChainEnum } from '../../lib/types';
import request from '../../lib/utils/request';
import { Loading } from '../loading';
import { generateChainBase, MultiNode } from '../multiNode';
import toast from 'react-hot-toast';
import useSWR from 'swr';

export function MulitNodeGrid() {
  const { address, chainId } = useWeb3();
  const { claimableNodes } = useWalletStore((state) => state);

  const contract = useContract(MULTINODE_CLAIM_CONTRACT, MultiNodeContractAbi);

  async function claimAllRewards(multiNodes?: MultiNodeType[]) {
    try {
      if (!multiNodes?.length) {
        return toast.error('No Multi Nodes are available to claim rewards');
      }

      const nodeIds = multiNodes
        ?.filter((n) => n.chainId === chainId)
        .map((i) => i.nodeId);

      const confirmingToast = toast.success(
        `Confirming Transaction In Wallet`,
        {
          style: {
            background: '#3F88C5',
            color: 'white',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#3F88C5',
          },
        }
      );

      const gasLimit = RECOMMENDED_MULTI_GAS * nodeIds?.length;

      const mccClaimTxt = await contract?.claimDividendsMulti(nodeIds, {
        gasLimit,
      });

      toast.remove(confirmingToast);
      const loadingToast = toast.loading(
        <div>
          <div>Your transaction is processing on chain</div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${generateChainBase(chainId)}/tx/${mccClaimTxt.hash}`}
            className="font-bold underline cursor-pointer"
          >
            Transaction Link
          </a>
        </div>
      );

      const tx = await mccClaimTxt.wait();

      toast.remove(loadingToast);
      toast.success(
        <div>
          <div>
            Your MCC Multi Node Dividends have been processed to your wallet
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${generateChainBase(chainId)}/tx/${mccClaimTxt.hash}`}
            className="font-bold underline cursor-pointer"
          >
            Transaction Link
          </a>
        </div>
      );

      gtag.event({
        action: 'claim_dividend_multi',
        category: 'MCC',
        label: 'Dividend',
        value: `${tx}`,
      });
    } catch (error: any) {
      toast.dismiss();

      if (error?.code === 4001) {
        return toast.error('User denied transaction signature');
      }
      toast.error(error?.message);

      console.error(error);
    }
  }

  const { data, isLoading } = useSWR(
    address
      ? `https://deep-index.moralis.io/api/v2/${address}/nft/0xF9b899E6E84f6383f99b262edA36C9bDdD5fc080?chain=${generateChainName(
          chainId
        )}&format=decimal&limit=99`
      : ``,
    (url: string) =>
      request(url, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': `${process.env.NEXT_PUBLIC_MORALIS_API_KEY}`,
        },
      })
  );

  if (!address) {
    return <div className="py-36" />;
  }

  if (isLoading) {
    return (
      <div className="py-10">
        <Loading size={24} fill="#FFF" />;
      </div>
    );
  }

  return (
    <div className="py-10">
      <header>
        {data?.result?.length ? (
          <div className="mt-2 mb-8 md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-100 sm:truncate sm:text-3xl">
                Your Multi Nodes
              </h2>
            </div>
            <div className="flex flex-shrink-0 mt-4 md:mt-0 md:ml-4">
              <button
                type="button"
                onClick={() => claimAllRewards(claimableNodes)}
                className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-100 border rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:to-green-900 focus:ring-green-500 focus:ring-offset-2"
              >
                Claim All Rewards
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-2 mb-8 md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-100 sm:truncate sm:text-3xl">
                You don't own any Multi Nodes on this chain
              </h2>
            </div>
          </div>
        )}
      </header>

      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {data?.result?.map((n: any) => (
          <MultiNode key={`multi-node-${n.token_id}`} {...n} />
        ))}
      </ul>
    </div>
  );
}

function generateChainName(chain?: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return `eth`;
    case ChainEnum.bsc:
      return `bsc`;
    case ChainEnum.ftm:
      return `ftm`;
    default:
      ``;
  }
}
