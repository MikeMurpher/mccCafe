import {
  CheckCircleIcon,
  InformationCircleIcon,
  PlusCircleIcon,
  SparklesIcon,
} from '@heroicons/react/20/solid';
import classNames from 'classnames';
import error from 'next/error';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import useSWR from 'swr';
import MultiNodeContractAbi from '../../contracts/MultiNode.json';
import {
  MULTINODE_CLAIM_CONTRACT,
  MULTINODE_CONTRACT,
  RECOMMENDED_SINGLE_GAS,
} from '../../lib/constants';
import * as gtag from '../../lib/gtag';
import { useContract } from '../../lib/hooks/useContract';
import useMultiNodeActiveBalance from '../../lib/hooks/useMultiNodeActiveBalance';
import { useWeb3 } from '../../lib/hooks/useWeb3';
import { useWalletStore } from '../../lib/stores/wallet';
import { BlockchainType, ChainEnum } from '../../lib/types';
import {
  generateChainBase,
  generateChainGasMultiple,
  generateChainName,
  generateChainNameIdentifier,
} from '../../lib/utils/chainFormatters';
import {
  formatTotalRealized,
  numberWithCommas,
} from '../../lib/utils/formatNumbers';
import { isNumeric } from '../../lib/utils/isNumeric';
import request from '../../lib/utils/request';
import { Loading } from '../loading';

interface MultiNodeType {
  name: string;
  token_id: string;
  token_uri: string;
  isManualCheckEnabled: boolean;
}

export function MultiNode(props: MultiNodeType) {
  const { token_id, isManualCheckEnabled } = props;

  const { chainId, address } = useWeb3();
  const chainName = generateChainName(chainId);
  const { data } = useSWR(
    token_id
      ? `https://nftapi${
          chainName === 'ftm' ? '2' : ''
        }.mchain.capital/metadata/${chainName}/${token_id}.json`
      : ``,
    (url: string) => request(url, { method: 'GET' })
  );

  const {
    addClaimableNode,
    addNodeStats,
    addToCartClaim,
    walletNodeStats,
    removeFromCartClaim,
    cartClaimNodes,
  } = useWalletStore((state) => state);
  const contract = useContract(MULTINODE_CLAIM_CONTRACT, MultiNodeContractAbi);

  const isInCart = cartClaimNodes?.filter(
    (ccn) => ccn.nodeId === token_id
  )?.length;

  const mccClaimable = useMultiNodeActiveBalance({
    contractAddress: MULTINODE_CLAIM_CONTRACT,
    abi: MultiNodeContractAbi,
    balanceType: 'unclaimed',
    chainId: chainId,
    nodeId: token_id,
    address,
  });

  const totalEarnings = useMultiNodeActiveBalance({
    contractAddress: MULTINODE_CLAIM_CONTRACT,
    abi: MultiNodeContractAbi,
    balanceType: 'totalEarnings',
    chainId: chainId,
    nodeId: token_id,
    address,
  });

  const mccPerDay = parseFloat(
    data?.attributes?.[2].value?.replace(/,/g, '')
  ).toFixed(2);

  useEffect(() => {
    if (parseInt(mccClaimable) > 0 && chainId) {
      addClaimableNode({ chainId, nodeId: token_id });
    }
  }, [mccClaimable]);

  useEffect(() => {
    if (token_id && isNumeric(mccPerDay)) {
      addNodeStats({
        mccClaimable,
        totalEarnings,
        mccPerDay,
        nodeId: token_id,
      });
    }
  }, [token_id, mccClaimable, mccPerDay, totalEarnings]);

  const nothingClaimable = parseInt(mccClaimable) === 0;

  const isLoading = !error && !data;

  const nodePic = data?.attributes?.[0].value?.toLowerCase();

  const { data: rewardData } = useSWR(
    `/api/holdings?address=${MULTINODE_CLAIM_CONTRACT}`
  );

  async function claimRewards(nodeId: string) {
    try {
      if (!nodeId) {
        toast('No Node ID found');
        return;
      }
      const { ethereum } = window;

      let confirmedContinue = true;

      if (
        walletNodeStats?.available >
        rewardData[`${generateChainNameIdentifier(chainId)}`].supply
      ) {
        confirmedContinue = confirm(
          'There are not enough rewards in the MultiNode Treasury Wallet for you to claim ALL of your rewards - if you claiming an individual node amount - or specific nodes in the cart, please be sure you know what you are doing - are you sure you want to continue?'
        );
      }

      if (!confirmedContinue) {
        return;
      }

      if (ethereum) {
        toast.success(`Confirming Transaction In Wallet`, {
          style: {
            background: '#3F88C5',
            color: 'white',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#3F88C5',
          },
        });
        const mccClaimTxt = await contract?.claimDividend(nodeId, {
          gasLimit: RECOMMENDED_SINGLE_GAS * generateChainGasMultiple(chainId),
        });

        toast.loading(
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

        toast.success(
          <div>
            <div>Your MCC Multi Node Dividends have been processed</div>
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
          action: 'claim_dividend_single',
          category: 'MCC',
          label: 'Dividend',
          value: `${tx}`,
        });
      } else {
        toast.error('Ethereum is not enabled in your browser!');
      }
    } catch (error) {
      toast.dismiss();
      // @ts-expect-error
      if (error?.code === 4001) {
        toast.error('User denied transaction signature');
      }

      console.error(error);
    }
  }

  return (
    <li
      className={classNames(
        isInCart ? `border-green-600` : ` border-white`,
        `col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow`
      )}
    >
      {!isManualCheckEnabled && (
        <button
          onClick={() => {
            if (isInCart) {
              return removeFromCartClaim({
                nodeId: token_id,
              });
            }

            if (nothingClaimable) {
              return toast.error('Nothing claimable in this MultiNode');
            }

            return addToCartClaim({
              mccClaimable,
              totalEarnings,
              chainId,
              mccPerDay,
              type: data?.attributes?.[0].value?.toLowerCase(),
              nodeId: token_id,
            });
          }}
          className="group relative right-1.5 top-1.5 ml-auto h-0 rounded-full bg-gray-200"
        >
          <span className="p-0.25 flex items-center justify-center overflow-hidden rounded-full ">
            {isInCart ? (
              <CheckCircleIcon className="w-8 h-8 text-green-600 transition-colors duration-500 bg-gray-200 group-hover:text-red-500" />
            ) : (
              <PlusCircleIcon className="w-8 h-8 text-gray-600 transition-colors duration-500 bg-gray-200 group-hover:text-gray-500" />
            )}
          </span>
        </button>
      )}
      <div className="flex flex-col flex-1 px-8 py-6">
        {isLoading || !nodePic ? (
          <Loading size={64} fill="gray" />
        ) : (
          <img
            className="flex-shrink-0 w-auto h-64 mx-auto rounded-full"
            src={`/nodes/${nodePic}.png`}
            alt="Node Image"
          />
        )}
        <h3 className="mt-2 text-sm font-black text-gray-900">{data?.name}</h3>
        <dl className="flex flex-col justify-between flex-grow mt-1">
          <dt className="font-bold text-gray-700 uppercase">Rewards</dt>
          <dd className="my-0.5 h-4">
            <span className="px-2 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full whitespace-nowrap">
              {numberWithCommas(mccPerDay)} MCC/day
            </span>
          </dd>
          <dt className="mt-2 font-bold text-gray-700 uppercase">Claimable</dt>
          <dd className="my-0.5 h-4">
            {isLoading ? (
              <Loading
                containerClass="flex justify-center"
                size={4}
                fill="gray"
              />
            ) : (
              <span className="px-2 py-1 text-sm font-bold text-green-100 bg-green-800 rounded-full whitespace-nowrap">
                <>{mccClaimable} MCC</>
              </span>
            )}
          </dd>
          <dt className="mt-2 font-bold text-gray-700 uppercase">
            Total Realized
          </dt>
          <dd className="my-0.5 h-4">
            {isLoading ? (
              <Loading
                containerClass="flex justify-center"
                size={4}
                fill="gray"
              />
            ) : (
              <span className="px-2 py-1 text-sm font-bold text-green-800 bg-green-100 rounded-full whitespace-nowrap">
                <>{formatTotalRealized(totalEarnings, mccClaimable)} MCC</>
              </span>
            )}
          </dd>
        </dl>
      </div>
      <div>
        <div className="flex -mt-px divide-x divide-gray-200">
          <div className="flex flex-1 w-0">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={generateSellLink(props?.token_id, chainId)}
              className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500"
            >
              <InformationCircleIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-3">
                {isManualCheckEnabled ? 'Buy' : 'Sell'}
              </span>
            </a>
          </div>
          <div className="flex flex-1 w-0 -ml-px">
            <a
              onClick={async () => {
                if (nothingClaimable) {
                  return toast.error('Nothing claimable in this MultiNode');
                }
                if (isManualCheckEnabled) {
                  return toast.error('You do not own this node - nice try 😺');
                }
                claimRewards(props?.token_id);
              }}
              className={classNames(
                nothingClaimable || isManualCheckEnabled
                  ? `hover:to-gray-90 from-gray-500 to-gray-700`
                  : `hover:to-green-90 from-green-500 to-green-700`,
                `"relative 0" inline-flex w-0 flex-1 cursor-pointer items-center justify-center rounded-br-lg border bg-gradient-to-r py-4 text-sm font-medium text-gray-100`
              )}
            >
              <SparklesIcon
                className="w-5 h-5 text-gray-100"
                aria-hidden="true"
              />
              <span className="ml-3">Claim</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

function generateSellLink(nodeId: string, chain?: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return `https://opensea.io/assets/${MULTINODE_CONTRACT}/${nodeId}`;
    case ChainEnum.bsc:
      return `https://tofunft.com/nft/bsc/${MULTINODE_CONTRACT}/${nodeId}`;
    case ChainEnum.ftm:
      return `https://paintswap.finance/marketplace/assets/${MULTINODE_CONTRACT}/${nodeId}`;
    default:
      ``;
  }
}
