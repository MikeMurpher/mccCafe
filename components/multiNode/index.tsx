import MultiNodeContractAbi from '../../contracts/MultiNode.json';
import {
  MULTINODE_CLAIM_CONTRACT,
  RECOMMENDED_SINGLE_GAS,
} from '../../lib/constants';
import * as gtag from '../../lib/gtag';
import useContract from '../../lib/hooks/useContract';
import useMultiNodeActiveBalance from '../../lib/hooks/useMultiNodeActiveBalance';
import { useWalletStore } from '../../lib/stores/wallet';
import { BlockchainType, ChainEnum } from '../../lib/types';
import {
  formatTotalRealized,
  numberWithCommas,
} from '../../lib/utils/formatNumbers';
import request from '../../lib/utils/request';
import { Loading } from '../loading';
import { InformationCircleIcon, SparklesIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import error from 'next/error';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import useSWR from 'swr';

interface MultiNodeType {
  name: string;
  token_id: string;
  token_uri: string;
}

export function MultiNode(props: MultiNodeType) {
  const { token_uri, token_id } = props;

  const { data } = useSWR(token_uri ? token_uri : ``, (url: string) =>
    request(url, { method: 'GET' })
  );

  const { chainId, addClaimableNode } = useWalletStore((state) => state);
  const contract = useContract(MULTINODE_CLAIM_CONTRACT, MultiNodeContractAbi);

  const mccClaimable = useMultiNodeActiveBalance(
    MULTINODE_CLAIM_CONTRACT,
    MultiNodeContractAbi,
    'unclaimed',
    chainId,
    token_id
  );

  const totalEarnings = useMultiNodeActiveBalance(
    MULTINODE_CLAIM_CONTRACT,
    MultiNodeContractAbi,
    'totalEarnings',
    chainId,
    token_id
  );

  useEffect(() => {
    if (parseInt(mccClaimable) > 0) {
      addClaimableNode({ nodeId: token_id });
    }
  }, [mccClaimable]);

  const nothingClaimable = parseInt(mccClaimable) === 0;

  const isLoading = !error && !data;

  const nodePic = data?.attributes?.[0].value?.toLowerCase();

  async function claimRewards(nodeId: string) {
    try {
      if (!nodeId) {
        toast('No Node ID found');
        return;
      }
      const { ethereum } = window;

      if (ethereum) {
        toast.success(`Confirming Transaction In Wallet`);
        const mccClaimTxt = await contract?.claimDividend(nodeId, {
          gasLimit: RECOMMENDED_SINGLE_GAS,
        });

        const tx = await mccClaimTxt.wait();

        toast.success(
          <div>
            <div>Your MCC Multi Node Dividends are processing</div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${generateChainBase(chainId)}/tx/${mccClaimTxt.hash}`}
              className="font-bold underline cursor-pointer"
            >
              Transaction Hash Link
            </a>
          </div>
        );

        gtag.event({
          action: 'claim_dividend_single',
          category: 'MCC',
          label: 'Dividend',
          value: `${tx}`,
        });

        // TODO: Listen for transaction success
        // const event = tx.events[0];
        // const value = event.args[2];
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
    <li className="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow">
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
            <span className="px-2 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full">
              {numberWithCommas(
                parseFloat(
                  data?.attributes?.[2].value?.replace(/,/g, '')
                ).toFixed(2)
              )}{' '}
              MCC/day
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
              <span className="px-2 py-1 text-sm font-bold text-green-100 bg-green-800 rounded-full">
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
              <span className="px-2 py-1 text-sm font-bold text-green-800 bg-green-100 rounded-full">
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
              <span className="ml-3">Sell</span>
            </a>
          </div>
          <div className="flex flex-1 w-0 -ml-px">
            <a
              onClick={async () => {
                if (nothingClaimable) {
                  return toast.error('Nothing claimable in this MultiNode');
                }
                claimRewards(props?.token_id);
              }}
              className={classNames(
                nothingClaimable
                  ? `from-gray-500 to-gray-700 hover:to-gray-90`
                  : `from-green-500 to-green-700 hover:to-green-90`,
                `"relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-100 border rounded-br-lg cursor-pointer bg-gradient-to-r 0"`
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
      return `https://opensea.io/assets/0xf9b899e6e84f6383f99b262eda36c9bddd5fc080/${nodeId}`;
    case ChainEnum.bsc:
      return `https://tofunft.com/nft/bsc/0xF9b899E6E84f6383f99b262edA36C9bDdD5fc080/${nodeId}`;
    case ChainEnum.ftm:
      return `https://paintswap.finance/marketplace/assets/0xf9b899e6e84f6383f99b262eda36c9bddd5fc080/${nodeId}`;
    default:
      ``;
  }
}

export function generateChainBase(chain?: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return `https://etherscan.io`;
    case ChainEnum.bsc:
      return `https://bscscan.com`;
    case ChainEnum.ftm:
      return `https://ftmscan.com`;
    default:
      ``;
  }
}
