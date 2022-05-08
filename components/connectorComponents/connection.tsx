import MCC from '../../contracts/MCC.json';
import { CHAINS, getAddChainParameters, URLS } from '../../lib/chains';
import { MCC_CONTRACT } from '../../lib/constants';
import { useMccBalance } from '../../lib/hooks/useMccBalance';
import { useWalletStore } from '../../lib/stores/wallet';
import { WalletEnum, WalletType } from '../../lib/types';
import { abbreviateNumber } from '../../lib/utils/formatNumbers';
import { shortenHex } from '../../lib/utils/shortenHex';
import aa from '../../public/incubators/aa.png';
import cashback from '../../public/incubators/cashback.png';
import czr from '../../public/incubators/czr.png';
import fnd from '../../public/incubators/fnd.png';
import multiprint from '../../public/incubators/multiprint.png';
import ogTomb from '../../public/incubators/ogtomb.png';
import salestax from '../../public/incubators/sales.png';
import ub from '../../public/incubators/ub.png';
import uub from '../../public/incubators/uub.png';
import Mcc from '../icons/glyphs/mcc';
import { CoinbaseWalletSvg } from '../svgs/coinbaseWallet';
import { GnosisSafeSvg } from '../svgs/gnosisSafe';
import { MetamaskSvg } from '../svgs/metamask';
import { WalletConnectSvg } from '../svgs/walletConnect';
import { ChainSelect } from './chainSelect';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { CashIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import type { Web3ReactHooks } from '@web3-react/core';
import { GnosisSafe } from '@web3-react/gnosis-safe';
import type { MetaMask } from '@web3-react/metamask';
import { Network } from '@web3-react/network';
import { WalletConnect } from '@web3-react/walletconnect';
import classNames from 'classnames';
import Image from 'next/image';
import { Fragment, useCallback, useState } from 'react';

interface ConnectionProps {
  type: WalletType;
  connector: MetaMask | WalletConnect | CoinbaseWallet | Network | GnosisSafe;
  chainId: ReturnType<Web3ReactHooks['useChainId']>;
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>;
  error: ReturnType<Web3ReactHooks['useError']>;
  isActive: ReturnType<Web3ReactHooks['useIsActive']>;
  accounts: ReturnType<Web3ReactHooks['useAccounts']>;
  ens: ReturnType<Web3ReactHooks['useENSNames']>;
  provider: ReturnType<Web3ReactHooks['useProvider']>;
  id: string;
  isOnboarding?: boolean;
  closeOnboardingModal: () => void;
}

const solutions = [
  {
    name: 'MultiPrint',
    description:
      'MultiPrint provides rewards for staking and farming of $MCC and $MCC incubation pairs.',
    href: 'https://multiprint.mchain.capital/',
    icon: () => (
      <Image alt="MultiPrint logo" src={multiprint} width={261} height={215} />
    ),
  },
  {
    name: 'OG Tomb',
    description:
      'OG-TOMB is Pegged to FTM. Not the first algorithmic stablecoin on Fantom Opera',
    href: 'https://www.ogtomb.com/',
    icon: () => <Image alt="OgTomb logo" src={ogTomb} width={40} height={40} />,
  },
  {
    name: 'UUB',
    description: 'Ultra Unit Bias - 10% Reflections with an Ultra Low Supply.',
    href: 'https://incubations.mchain.capital/uub',
    icon: () => <Image alt="UUB logo" src={uub} width={40} height={40} />,
  },
  {
    name: 'UB',
    description: 'Unit Bias - 10% Reflections with a Low Supply.',
    href: 'https://incubations.mchain.capital/ub',
    icon: () => <Image alt="UB logo" src={ub} width={40} height={40} />,
  },
  {
    name: 'CZR',
    description: 'CZ Retirement Package - Auto-Rebasing Every 15 Min',
    href: 'https://incubations.mchain.capital/czr',
    icon: () => <Image alt="CZR logo" src={czr} width={40} height={40} />,
  },
  {
    name: 'FND',
    description: 'Friday Night Degen - Degens Unite Each Week.',
    href: 'https://incubations.mchain.capital/fnd',
    icon: () => <Image alt="FND logo" src={fnd} width={40} height={40} />,
  },
  {
    name: 'Andre Anonymous',
    description: 'AA - 5% to Andre to Keep Building.',
    href: 'https://incubations.mchain.capital/aa',
    icon: () => <Image alt="AA logo" src={aa} width={40} height={40} />,
  },
  {
    name: 'Sales Tax',
    description: '15% Reflections on Sales.',
    href: 'https://incubations.mchain.capital/sale',
    icon: () => (
      <Image alt="Sales Tax logo" src={salestax} width={40} height={40} />
    ),
  },
  {
    name: 'Cash Back',
    description: 'Cash Back Each Time you Sell.',
    href: 'https://incubations.mchain.capital/cash',
    icon: () => (
      <Image alt="Cash Back logo" src={cashback} width={40} height={40} />
    ),
  },
];

export function ConnectionComponent(props: ConnectionProps) {
  const {
    connector,
    chainId,
    isActivating,
    error,
    isActive,
    type,
    isOnboarding,
    accounts,
    ens,
    closeOnboardingModal,
    id,
  } = props;
  const isNetwork = connector instanceof Network;
  const displayDefault = !isNetwork;
  const chainIds = (isNetwork ? Object.keys(URLS) : Object.keys(CHAINS)).map(
    (chainId) => Number(chainId)
  );

  const {
    removeDisconnectAction,
    addDisconnectAction,
    addPreviousConnectionAction,
  } = useWalletStore((state) => state);
  const [desiredChainId, setDesiredChainId] = useState<number>(
    isNetwork ? 1 : -1
  );

  let [isAccountOpen, setAccountIsOpen] = useState(false);

  const mccBalance = useMccBalance({
    contractAddress: MCC_CONTRACT,
    abi: MCC,
  });

  function closeAccountModal() {
    setAccountIsOpen(false);
  }

  function openAccountModal() {
    setAccountIsOpen(true);
  }

  const switchChain = useCallback(
    async (desiredChainId: number) => {
      setDesiredChainId(desiredChainId);
      // if we're already connected to the desired chain, return
      if (desiredChainId === chainId) return;
      // if they want to connect to the default chain and we're already connected, return
      if (desiredChainId === -1 && chainId !== undefined) return;

      if (connector instanceof WalletConnect || connector instanceof Network) {
        await connector.activate(
          desiredChainId === -1 ? undefined : desiredChainId
        );
      } else {
        await connector.activate(
          desiredChainId === -1
            ? undefined
            : getAddChainParameters(desiredChainId)
        );
      }
      addPreviousConnectionAction(type);
    },
    [connector, chainId]
  );

  if (error) {
    return (
      <div className="flex flex-col mb-2">
        {!(connector instanceof GnosisSafe) && (
          <ChainSelect
            chainId={chainId}
            switchChain={switchChain}
            displayDefault={displayDefault}
            chainIds={chainIds}
          />
        )}

        <button
          className="inline-flex justify-center w-full px-4 py-2 mt-2 text-base font-medium text-white border border-white rounded-md shadow-sm hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          onClick={() => {
            connector instanceof GnosisSafe
              ? void connector.activate()
              : connector instanceof WalletConnect ||
                connector instanceof Network
              ? void connector.activate(
                  desiredChainId === -1 ? undefined : desiredChainId
                )
              : void connector.activate(
                  desiredChainId === -1
                    ? undefined
                    : getAddChainParameters(desiredChainId)
                );
            addPreviousConnectionAction(type);
          }}
        >
          Try Again?
        </button>
      </div>
    );
  } else if (isActive) {
    return (
      <div className="relative flex items-center mt-1">
        <button
          type="button"
          onClick={() => openAccountModal()}
          className="relative inline-flex items-center h-6 px-2 py-2 ml-1 font-bold text-gray-900 bg-white border border-gray-300 rounded-full shadow-sm sm:px-4 whitespace-nowrap -right-2 bg-opacity-40 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-0"
        >
          {ens?.[0] || `${shortenHex(accounts?.[0] ?? ``, 4)}`}
        </button>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group bg-white z-10 h-10 rounded-md px-0.5 sm:px-2 inline-flex items-center hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                )}
              >
                <span className="w-4 h-4 sm:w-6 sm:h-6">
                  <Mcc id={id} />
                </span>
                <span className="flex flex-col justify-center pt-4 pl-1 text-lg font-bold text-gray-700">
                  <span className="leading-[0px] text-left">MCC</span>
                  <span className="block text-[10px] text-left">
                    {parseInt(mccBalance) > 0
                      ? abbreviateNumber(mccBalance, 2)
                      : `--`}
                  </span>
                </span>
                <ChevronDownIcon
                  className={classNames(
                    open ? 'text-gray-600' : 'text-gray-400',
                    'ml-1 h-5 w-5 group-hover:text-gray-500 transition ease-in-out duration-150'
                  )}
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
                <Popover.Panel className="absolute z-10 w-screen max-w-sm px-2 mt-3 transform sm:max-w-md sm:-translate-x-3/4 -translate-x-2/3 left-1/2 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8 lg:grid-cols-2">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          target="_blank"
                          href={item.href}
                          className="flex items-start p-1 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-white bg-gray-100 rounded-md sm:h-12 sm:w-12">
                            <item.icon aria-hidden="true" />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="p-5 bg-gray-50 sm:p-8">
                      <span className="flow-root p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                        <span className="flex items-center">
                          <span className="text-base font-medium text-gray-900">
                            MCC Ecosystem Holdings
                          </span>
                          <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800">
                            Coming Soon
                          </span>
                        </span>
                        <span className="block mt-1 text-sm text-gray-500">
                          You'll be able to view all your MCC investments across
                          chain here
                        </span>
                      </span>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Transition.Root show={isAccountOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50"
            onClose={closeAccountModal}
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
              <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                        <CashIcon
                          className="w-6 h-6 text-blue-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-left text-gray-900"
                        >
                          Wallet Overview
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-left text-gray-500">
                            Coming soon a nice little broader wallet overview.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-black border border-black rounded-md shadow-sm hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                        onClick={async () => {
                          await connector.deactivate();
                          addDisconnectAction(type);
                          closeAccountModal();
                        }}
                      >
                        Disconnect Wallet
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <div className="ml-1 sm:ml-2">
          {!(connector instanceof GnosisSafe) && (
            <ChainSelect
              chainId={chainId}
              switchChain={switchChain}
              displayDefault={displayDefault}
              chainIds={chainIds}
            />
          )}
        </div>
      </div>
    );
  } else if (isOnboarding) {
    return (
      <div className="relative flex flex-col items-center space-x-3">
        <div
          className={classNames(
            'relative group p-6 w-full hover:bg-slate-700 rounded-lg transition-colors duration-150'
          )}
        >
          <div>
            <span className={classNames('inline-flex')}>
              {renderMessaging(type)?.img}
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium">
              <button
                onClick={
                  isActivating
                    ? undefined
                    : () => {
                        connector instanceof GnosisSafe
                          ? void connector.activate()
                          : connector instanceof WalletConnect ||
                            connector instanceof Network
                          ? connector.activate(
                              desiredChainId === -1 ? undefined : desiredChainId
                            )
                          : connector.activate(
                              desiredChainId === -1
                                ? undefined
                                : getAddChainParameters(desiredChainId)
                            );
                        addPreviousConnectionAction(type);
                        removeDisconnectAction(type);
                        closeOnboardingModal();
                      }
                }
                // disabled={isActivating}
                className="focus:outline-none"
              >
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {renderMessaging(type)?.title}
              </button>
            </h3>
            <p className="mt-2 text-sm text-gray-200">
              {renderMessaging(type)?.action}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

function renderMessaging(type: WalletType):
  | {
      title: string;
      action: string;
      img: JSX.Element;
    }
  | undefined {
  switch (type) {
    case WalletEnum.coinbase:
      return {
        title: 'Coinbase Wallet',
        action: 'Connect to Coinbase Wallet (not Coinbase App)',
        img: <CoinbaseWalletSvg size={64} />,
      };
    case WalletEnum.metamask:
      return {
        title: 'Metamask',
        action: 'Connect to your MetaMask Wallet directly',
        img: <MetamaskSvg size={64} />,
      };
    case WalletEnum.walletConnect:
      return {
        title: 'WalletConnect',
        action: 'Scan with WalletConnect to connect',
        img: <WalletConnectSvg size={64} />,
      };
    case WalletEnum.gnosisSafe:
      return {
        title: 'Gnosis Safe',
        action: 'Connect your multi-sig wallet directly',
        img: <GnosisSafeSvg size={64} />,
      };
    default:
      return undefined;
  }
}
