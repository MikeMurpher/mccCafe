import { Dialog, Popover, Switch, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  DocumentSearchIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
} from '@heroicons/react/solid';
import classNames from 'classnames';
import { ChangeEvent, Fragment, useState } from 'react';
import toast from 'react-hot-toast';
import useSWR from 'swr';
import MultiNodeContractAbi from '../../contracts/MultiNode.json';
import {
  MULTINODE_CLAIM_CONTRACT,
  RECOMMENDED_MULTI_GAS,
} from '../../lib/constants';
import * as gtag from '../../lib/gtag';
import { useContract } from '../../lib/hooks/useContract';
import { useMultiNodeGasPrediction } from '../../lib/hooks/useMultiNodeGasPrediction';
import { useTokenBalance } from '../../lib/hooks/useTokenBalance';
import { useWeb3 } from '../../lib/hooks/useWeb3';
import { MultiNodeType, useWalletStore } from '../../lib/stores/wallet';
import {
  generateChainAbbreviation,
  generateChainBase,
  generateChainGasMultiple,
  generateChainName,
  generateChainNameIdentifier,
  renderConnectedChain,
} from '../../lib/utils/chainFormatters';
import { abbreviateNumber, formatDollar } from '../../lib/utils/formatNumbers';
import { isNumeric } from '../../lib/utils/isNumeric';
import request from '../../lib/utils/request';
import { Loading } from '../loading';
import { MultiNode } from '../multiNode';

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
  const {
    claimableNodes,
    resetMultiNodeStats,
    walletNodeStats,
    cartClaimNodes,
    removeFromCartClaim,
    cartMccTotal,
    emptyCartClaims,
  } = useWalletStore((state) => state);
  const [manualAddress, setManualAddress] = useState<string>('');
  let [isManualModal, setManualCheckModal] = useState(false);
  const [manualCheckEnabled, setEnabled] = useState(false);

  const contract = useContract(MULTINODE_CLAIM_CONTRACT, MultiNodeContractAbi);

  const mccBalance = useTokenBalance({
    address: manualCheckEnabled ? manualAddress : address,
  });

  const { data: rewardData } = useSWR(
    `/api/holdings?address=${MULTINODE_CLAIM_CONTRACT}`
  );

  async function claimNodeRewards(selectedNodes?: MultiNodeType[]) {
    try {
      let confirmedContinue = true;
      if (!selectedNodes?.length) {
        return toast.error('No Multi Nodes selected to claim rewards');
      }

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

      const nodeIds = selectedNodes
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

      const gasLimit =
        RECOMMENDED_MULTI_GAS *
        nodeIds?.length *
        generateChainGasMultiple(chainId);

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

      emptyCartClaims();
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
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={classNames(
                      manualCheckEnabled ? 'translate-x-5' : 'translate-x-0',
                      'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
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
            className="inline-flex items-center px-4 py-2 mb-1 ml-3 text-sm font-medium text-white border border-white rounded-md focus:ring-offset-2"
          >
            <DocumentSearchIcon
              className={`h-5 w-5 text-white`}
              aria-hidden="true"
            />
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

  const { cartPrediction, perNodePrediction, nativePrice } =
    useMultiNodeGasPrediction(cartClaimNodes?.length ?? 0);

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

              <div className="flex flex-col items-end flex-shrink-0 mt-4 sm:flex-row md:mt-0 md:ml-4">
                {renderAccountCheck()}
                {!manualCheckEnabled && (
                  <>
                    <button
                      type="button"
                      onClick={() => claimNodeRewards(claimableNodes)}
                      disabled={!walletNodeStats?.available}
                      className={classNames(
                        !walletNodeStats?.available
                          ? 'cursor-not-allowed from-gray-500 to-gray-700 focus:ring-gray-500'
                          : 'from-green-500 to-green-700 hover:to-green-900 focus:ring-green-500',
                        'ml-3 mb-1 inline-flex items-center rounded-md border bg-gradient-to-r px-4 py-2 text-sm font-medium text-gray-100 focus:ring-offset-2'
                      )}
                    >
                      Claim All Rewards
                    </button>
                    <div className="inline-flex items-center mb-1 ml-3">
                      <Popover className="relative">
                        {({ open }) => (
                          <>
                            <Popover.Button
                              className={`
                ${open ? '' : ''}
                group inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-black hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                              <span className="">Claim Cart</span>
                              <ShoppingCartIcon
                                className={`${open ? '' : ''}
                  ml-2 h-5 w-5 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}
                                aria-hidden="true"
                              />
                              <ChevronDownIcon
                                className={`${open ? '' : ''}
                  ml-2 h-5 w-5 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}
                                aria-hidden="true"
                              />
                            </Popover.Button>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute z-10 w-screen max-w-sm px-2 mt-3 transform left-1/2 -translate-x-2/3 sm:-translate-x-3/4 sm:px-0">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                  <div className="relative grid gap-8 p-4 overflow-y-scroll bg-gray-100 max-h-96">
                                    {cartClaimNodes?.length ? (
                                      <ul className="">
                                        {cartClaimNodes.map((cn) => {
                                          return (
                                            <li
                                              key={`cart-${cn.nodeId}`}
                                              className="relative flex items-center px-6 py-5 mb-1 space-x-3 bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                                            >
                                              <div className="flex-shrink-0">
                                                <img
                                                  className="w-6 h-auto rounded-full"
                                                  src={`/nodes/${cn?.type}.png`}
                                                  alt=""
                                                />
                                              </div>
                                              <div className="flex-1 min-w-0">
                                                <div className="focus:outline-none">
                                                  <span
                                                    className="absolute inset-0"
                                                    aria-hidden="true"
                                                  />
                                                  <p className="flex items-center text-sm font-semibold text-gray-900">
                                                    MultiNode: #{cn?.nodeId}
                                                    <span className="flex justify-center ml-auto">
                                                      <button
                                                        onClick={() => {
                                                          removeFromCartClaim({
                                                            nodeId: cn?.nodeId,
                                                          });
                                                        }}
                                                        className="relative bg-gray-200 rounded-full group"
                                                      >
                                                        <span className="p-0.25 flex items-center justify-center overflow-hidden rounded-full">
                                                          <MinusCircleIcon className="w-4 h-4 text-gray-600 transition-colors duration-200 bg-gray-200 group-hover:text-red-500" />
                                                        </span>
                                                      </button>
                                                    </span>
                                                  </p>
                                                  <span className="whitespace-nowrap rounded-full border border-green-900 bg-green-100 py-0.5 px-2 text-xs font-bold text-gray-800">
                                                    <>{cn.mccClaimable}</>
                                                  </span>
                                                  <span className="ml-1">
                                                    MCC Claimable
                                                  </span>
                                                </div>
                                              </div>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    ) : (
                                      <div className="flex flex-col items-center">
                                        <div className="text-lg font-bold text-gray-700">
                                          No Nodes In Cart
                                        </div>
                                        <div className="w-full text-center">
                                          Click the plus{' '}
                                          <PlusCircleIcon className="inline-block w-5 h-5 text-gray-400" />{' '}
                                          button in the top right corner of the
                                          node to add it to your claim.
                                        </div>
                                      </div>
                                    )}
                                  </div>

                                  {!!cartClaimNodes?.length && (
                                    <div className="px-6 py-2 bg-white border-t border-gray-300">
                                      <dl className="space-y-2 text-sm font-medium text-gray-500 ">
                                        <div className="flex justify-between">
                                          <dt>MCC</dt>
                                          <dd className="text-gray-900">
                                            {abbreviateNumber(cartMccTotal, 2)}
                                          </dd>
                                        </div>

                                        <div className="flex justify-between">
                                          <dt>USD</dt>
                                          <dd className="text-gray-900">
                                            $
                                            {abbreviateNumber(
                                              cartMccTotal *
                                                dataPrice?.[
                                                  `${generateChainNameIdentifier(
                                                    chainId
                                                  )}`
                                                ].price,
                                              2
                                            )}
                                          </dd>
                                        </div>

                                        <div className="flex justify-between pb-2">
                                          <dt>Estimated Gas</dt>
                                          <dd className="text-gray-900">
                                            <span className="text-sm">
                                              {`(${generateChainAbbreviation(
                                                chainId
                                              )}${Number(
                                                nativePrice.toFixed(6)
                                              )})`}
                                            </span>
                                            <span className="ml-1 rounded-lg bg-[#3498db1a] p-1 text-[#3498db]">
                                              ($
                                              {formatDollar(cartPrediction)})
                                            </span>
                                          </dd>
                                        </div>
                                      </dl>
                                    </div>
                                  )}
                                  <button
                                    onClick={() => {
                                      if (!cartClaimNodes?.length) {
                                        return toast.error(
                                          'No nodes added to cart for claiming'
                                        );
                                      }
                                      claimNodeRewards(cartClaimNodes);
                                    }}
                                    className={classNames(
                                      cartClaimNodes?.length
                                        ? `from-green-500 to-green-700 hover:to-green-900 focus:ring-green-500`
                                        : `cursor-not-allowed from-gray-500 to-gray-700 hover:to-gray-900 focus:ring-gray-500`,
                                      `flex w-full justify-center bg-gradient-to-r p-4 text-white `
                                    )}
                                  >
                                    <div className="flow-root px-2 py-2">
                                      <span className="flex items-center">
                                        <span className="text-lg font-bold text-white">
                                          Initiate Claim
                                        </span>
                                      </span>
                                    </div>
                                  </button>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    </div>
                  </>
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

      <div className="mb-4">
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
                          'inline-flex flex-auto items-baseline rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 md:mt-2 lg:mt-0'
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
      <div>
        <div className="flex justify-center max-w-md py-1 mb-4 ml-auto text-white bg-gray-500 rounded-md shadow">
          <div className="flex items-center">
            Live Est ($
            {isNumeric(`${perNodePrediction}`) ? (
              formatDollar(perNodePrediction)
            ) : (
              <Loading size={4} fill="#FFF" />
            )}
            ) per MultiNode claim on{' '}
            <span className="inline-flex items-center justify-center mx-1">
              {renderConnectedChain(chainId)}
            </span>{' '}
            chain
            <div className="relative flex flex-col items-center ml-1 text-gray-200 group">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="absolute bottom-0 flex-col items-center hidden w-24 mb-6 text-center group-hover:flex">
                <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">
                  Please note this gas is an estimate based on historical data
                  of MultiNode claims. Gas prices costs for your claim may vary
                  due to current gas and price fluctuations.
                </span>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-600" />
              </div>
            </div>
          </div>
          <span className="text-gray-400 ">
            <span className="sr-only">Gas Per Multi Node Predictor</span>
          </span>
        </div>
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
                          <h3 className="text-2xl font-medium leading-6 text-left text-gray-50">
                            Check Address Manually
                          </h3>
                          <p className="mt-1 text-sm tracking-tighter text-left text-gray-200">
                            This is only for investigating a wallet - not for
                            initiating a claim on your MultiNodes. To do so -
                            please connect above in the navigation.
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
                                className="block w-full p-1 text-black border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => {
                            resetMultiNodeStats();
                            setEnabled(true);
                            closeManualCheckModal();
                          }}
                          className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
