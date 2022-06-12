import MultiNodeContractAbi from '../../contracts/MultiNode.json';
import {
  generateChainName,
  generateChainNameIdentifier,
} from '../../lib/chains';
import {
  MULTINODE_CLAIM_CONTRACT,
  RECOMMENDED_MULTI_GAS,
} from '../../lib/constants';
import * as gtag from '../../lib/gtag';
import { useContract } from '../../lib/hooks/useContract';
import { useTokenBalance } from '../../lib/hooks/useTokenBalance';
import { useWeb3 } from '../../lib/hooks/useWeb3';
import { MultiNodeType, useWalletStore } from '../../lib/stores/wallet';
import { abbreviateNumber } from '../../lib/utils/formatNumbers';
import request from '../../lib/utils/request';
import { Loading } from '../loading';
import { generateChainBase, MultiNode } from '../multiNode';
import { Dialog, Switch, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { ChangeEvent, Fragment, useState } from 'react';
import toast from 'react-hot-toast';
import useSWR from 'swr';

const overview = [
  {
    id: 'available',
    name: 'Available For Claim',
  },
  {
    id: 'producing',
    name: 'MCC Produced Per Day',
  },
  {
    id: 'mccBalance',
    name: 'Current MCC Account',
  },
];

export function MulitNodeGrid() {
  const { address, chainId } = useWeb3();
  const { claimableNodes, resetMultiNodeStats, walletNodeStats } =
    useWalletStore((state) => state);
  const [manualAddress, setManualAddress] = useState<string>('');
  let [isManualModal, setManualCheckModal] = useState(false);
  const [manualCheckEnabled, setEnabled] = useState(false);

  const contract = useContract(MULTINODE_CLAIM_CONTRACT, MultiNodeContractAbi);

  const mccBalance = useTokenBalance({
    address: manualCheckEnabled ? manualAddress : address,
  });

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

  function closeManualCheckModal() {
    setManualCheckModal(false);
  }

  function openManualCheckModal() {
    setManualCheckModal(true);
  }

  function renderAccountCheck() {
    return (
      <>
        <div className="flex flex-shrink-0 mt-4 md:mt-0 md:ml-4">
          {!!manualAddress?.length && (
            <>
              <Switch.Group as="div" className="flex items-center">
                <Switch.Label as="span" className="mr-2">
                  <span className="text-sm font-medium text-gray-50">
                    Your Wallet
                  </span>
                </Switch.Label>
                <Switch
                  checked={manualCheckEnabled}
                  onChange={setEnabled}
                  className={classNames(
                    manualCheckEnabled ? 'bg-indigo-600' : 'bg-gray-200',
                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={classNames(
                      manualCheckEnabled ? 'translate-x-5' : 'translate-x-0',
                      'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                    )}
                  />
                </Switch>
                <Switch.Label as="span" className="ml-2">
                  <span className="text-sm font-medium text-gray-50">
                    Manual Check
                  </span>
                </Switch.Label>
              </Switch.Group>
            </>
          )}
          <button
            type="button"
            onClick={() => openManualCheckModal()}
            className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white border border-white rounded-md focus:ring-offset-2"
          >
            Check Address Manually
          </button>
        </div>
      </>
    );
  }

  const { data, isLoading } = useSWR(
    address || manualCheckEnabled
      ? `https://deep-index.moralis.io/api/v2/${
          manualCheckEnabled ? manualAddress : address
        }/nft/0xF9b899E6E84f6383f99b262edA36C9bDdD5fc080?chain=${generateChainName(
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

  const { data: dataPrice } = useSWR(
    address ? `/api/holdings?address=${address}` : null
  );

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
        <div className="mt-2 mb-8 md:flex md:items-center md:justify-between">
          {data?.result?.length ? (
            <>
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-100 sm:truncate sm:text-3xl">
                  {manualCheckEnabled
                    ? `For Wallet ${manualAddress}`
                    : `Your Multi Nodes`}
                </h2>
              </div>

              <div className="flex flex-shrink-0 mt-4 md:mt-0 md:ml-4">
                {renderAccountCheck()}
                {!manualCheckEnabled && (
                  <button
                    type="button"
                    onClick={() => claimAllRewards(claimableNodes)}
                    disabled={!walletNodeStats?.available}
                    className={classNames(
                      !walletNodeStats?.available
                        ? 'from-gray-500 to-gray-700 cursor-not-allowed focus:ring-gray-500'
                        : 'from-green-500 to-green-700 hover:to-green-900 focus:ring-green-500',
                      'inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-100 border rounded-md bg-gradient-to-r  focus:ring-offset-2'
                    )}
                  >
                    Claim All Rewards
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-100 sm:truncate sm:text-2xl">
                  {address
                    ? manualAddress
                      ? `This address doesn't have any nodes on this chain`
                      : `You don't own any Multi Nodes on this chain`
                    : `Connect Wallet Above or Enter Address Manually`}
                </h2>
              </div>
              {renderAccountCheck()}
            </>
          )}
        </div>
      </header>

      <div className="mb-8">
        <dl className="grid grid-cols-1 mt-5 overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow md:grid-cols-3 md:divide-y-0 md:divide-x">
          {!!data &&
            overview.map((item) => (
              <div key={item.name} className="px-4 py-5 sm:p-6">
                <dt className="flex items-center text-base font-bold text-gray-900 uppercase">
                  {item?.name}
                </dt>
                <dd className="flex items-baseline justify-between w-full mt-1 md:block lg:flex">
                  <div className="flex items-baseline w-full text-2xl font-semibold text-indigo-600">
                    {isLoading ? (
                      <Loading
                        containerClass="flex justify-center items-center"
                        size={4}
                        fill="gray"
                      />
                    ) : (
                      <span className="">
                        {abbreviateNumber(
                          item?.id === 'mccBalance'
                            ? mccBalance
                            : // @ts-expect-error
                              walletNodeStats?.[item?.id],
                          2
                        )}
                      </span>
                    )}
                    <span className="ml-2 text-lg font-bold text-gray-500">
                      MCC
                    </span>
                    <div className="ml-auto">
                      <div
                        className={classNames(
                          'bg-green-100 flex-auto text-green-800 inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                        )}
                      >
                        {isLoading ? (
                          <Loading
                            containerClass="flex justify-center items-center"
                            size={4}
                            fill="gray"
                          />
                        ) : (
                          <>
                            $
                            {abbreviateNumber(
                              (item?.id === 'mccBalance'
                                ? mccBalance
                                : // @ts-expect-error
                                  walletNodeStats?.[item?.id]
                              )
                                ?.toString()
                                ?.replaceAll(',', '') *
                                dataPrice?.[
                                  `${generateChainNameIdentifier(chainId)}`
                                ].price,
                              2
                            )}{' '}
                            USD
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </dd>
              </div>
            ))}
        </dl>
      </div>

      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {data?.result?.map((n: any) => (
          <MultiNode
            key={`multi-node-${n.token_id}`}
            isManualCheckEnabled={manualCheckEnabled}
            {...n}
          />
        ))}
      </ul>

      <Transition appear show={isManualModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={closeManualCheckModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="grid w-full max-w-2xl grid-cols-1 gap-2 p-2 overflow-hidden transition-all transform bg-gray-800 shadow-xl rounded-2xl text-gray-50">
                  <form className="p-4 space-y-8 divide-y divide-gray-200">
                    <div className="space-y-2 divide-y divide-gray-200">
                      <div>
                        <div>
                          <h3 className="text-2xl font-medium leading-6 text-gray-50">
                            Check Address Manually
                          </h3>
                          <p className="mt-1 text-sm tracking-tighter text-center text-gray-200">
                            Do some investigative on-chain detective work in to
                            your favorite multi-noder
                          </p>
                        </div>
                      </div>

                      <div className="">
                        <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                          <div className="sm:col-span-6">
                            <label
                              htmlFor="wallet-address"
                              className="block text-sm font-medium text-left text-gray-300"
                            >
                              Wallet Address
                            </label>
                            <div className="mt-1">
                              <input
                                id="wallet-address"
                                name="wallet-adddress"
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                  setManualAddress(e.target.value)
                                }
                                value={manualAddress}
                                className="block w-full p-1 text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5">
                      <div className="flex justify-end">
                        <button
                          onClick={closeManualCheckModal}
                          type="button"
                          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => {
                            resetMultiNodeStats();
                            setEnabled(true);
                            closeManualCheckModal();
                          }}
                          className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Investigate
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
