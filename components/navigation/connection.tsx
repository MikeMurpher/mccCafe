import { MCC_CONTRACT } from '../../lib/constants';
import { useWalletStore } from '../../lib/stores/wallet';
import { abbreviateNumber } from '../../lib/utils/formatNumbers';
import { shortenHex } from '../../lib/utils/shortenHex';
import { ChainSelect } from '../chainSelect';
import MccLogo from '../icons/glyphs/mcc';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { watchNetwork } from '@wagmi/core';
import clsx from 'clsx';
import { ConnectKitButton } from 'connectkit';
import Image from 'next/image';
import { Fragment } from 'react';
import { useAccount, useBalance, useNetwork } from 'wagmi';

const solutions = [
  {
    name: 'MultiPrint',
    description:
      'MultiPrint provides rewards for staking and farming of $MCC and $MCC incubation pairs.',
    href: 'https://multiprint.mchain.capital/',
    icon: () => (
      <Image
        alt="MultiPrint logo"
        src={'/incubators/multiprint.png'}
        width={261}
        height={215}
      />
    ),
  },
  {
    name: 'OG Tomb',
    description:
      'OG-TOMB is Pegged to FTM. Not the first algorithmic stablecoin on Fantom Opera',
    href: 'https://www.ogtomb.com/',
    icon: () => (
      <Image
        alt="OgTomb logo"
        src={'/incubators/ogtomb.png'}
        width={40}
        height={40}
      />
    ),
  },
  {
    name: 'UUB',
    description: 'Ultra Unit Bias - 10% Reflections with an Ultra Low Supply.',
    href: 'https://incubations.mchain.capital/uub',
    icon: () => (
      <Image
        alt="UUB logo"
        src={'/incubators/uub.png'}
        width={40}
        height={40}
      />
    ),
  },
  {
    name: 'UB',
    description: 'Unit Bias - 10% Reflections with a Low Supply.',
    href: 'https://incubations.mchain.capital/ub',
    icon: () => (
      <Image alt="UB logo" src={'/incubators/ub.png'} width={40} height={40} />
    ),
  },
  {
    name: 'CZR',
    description: 'CZ Retirement Package - Auto-Rebasing Every 15 Min',
    href: 'https://incubations.mchain.capital/czr',
    icon: () => (
      <Image
        alt="CZR logo"
        src={'/incubators/czr.png'}
        width={40}
        height={40}
      />
    ),
  },
  {
    name: 'FND',
    description: 'Friday Night Degen - Degens Unite Each Week.',
    href: 'https://incubations.mchain.capital/fnd',
    icon: () => (
      <Image
        alt="FND logo"
        src={'/incubators/fnd.png'}
        width={40}
        height={40}
      />
    ),
  },
  {
    name: 'Andre Anonymous',
    description: 'AA - 5% to Andre to Keep Building.',
    href: 'https://incubations.mchain.capital/aa',
    icon: () => (
      <Image alt="AA logo" src={'/incubators/aa.png'} width={40} height={40} />
    ),
  },
  {
    name: 'Sales Tax',
    description: '15% Reflections on Sales.',
    href: 'https://incubations.mchain.capital/sale',
    icon: () => (
      <Image
        alt="Sales Tax logo"
        src={'/incubators/sales.png'}
        width={40}
        height={40}
      />
    ),
  },
  {
    name: 'Cash Back',
    description: 'Cash Back Each Time you Sell.',
    href: 'https://incubations.mchain.capital/cash',
    icon: () => (
      <Image
        alt="Cash Back logo"
        src={'/incubators/cashback.png'}
        width={40}
        height={40}
      />
    ),
  },
];

export function ConnectionComponent(props: { id: 'mobile' | 'desktop' }) {
  const { id } = props;
  const { chain } = useNetwork();
  const { address } = useAccount();
  const { resetMultiNodeStats } = useWalletStore((state) => state);
  watchNetwork(() => {
    resetMultiNodeStats();
  });

  const { data: mccBalanceData } = useBalance({
    address,
    token: MCC_CONTRACT,
  });

  const mccBalance = mccBalanceData?.formatted ?? '';

  return (
    <div className="relative flex items-center mt-1">
      <ConnectKitButton.Custom>
        {({ isConnected, isConnecting, show, address, ensName }) => {
          return isConnected ? (
            <>
              <button
                type="button"
                onClick={show}
                className="relative inline-flex items-center h-6 px-2 py-2 ml-1 font-bold text-gray-900 bg-white border border-gray-300 rounded-full shadow-sm -right-2 whitespace-nowrap bg-opacity-40 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-0 sm:px-4"
              >
                {ensName ?? `${shortenHex(address ?? ``, 4)}`}
              </button>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={clsx(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group z-10 inline-flex h-10 items-center rounded-md bg-white px-0.5 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:px-2'
                      )}
                    >
                      <span className="w-4 h-4 sm:h-6 sm:w-6">
                        <MccLogo id={id} />
                      </span>
                      <span className="flex flex-col justify-center pt-4 pl-1 text-lg font-bold text-gray-700">
                        <span className="text-left leading-[0px]">MCC</span>
                        <span className="block text-left text-[10px]">
                          {parseInt(mccBalance) > 0
                            ? abbreviateNumber(mccBalance, 2)
                            : `--`}
                        </span>
                      </span>
                      <ChevronDownIcon
                        className={clsx(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-1 h-5 w-5 transition duration-150 ease-in-out group-hover:text-gray-500'
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
                      <Popover.Panel className="absolute z-10 w-screen max-w-sm px-2 mt-3 transform left-1/2 -translate-x-2/3 sm:max-w-md sm:-translate-x-3/4 sm:px-0 lg:max-w-3xl">
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
                          <a href="/tokens">
                            <div className="p-5 bg-gray-50 sm:p-8">
                              <span className="flow-root p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                                <span className="flex items-center">
                                  <span className="text-base font-medium text-gray-900">
                                    MCC Ecosystem Holdings
                                  </span>
                                </span>
                                <span className="block mt-1 text-sm text-gray-500">
                                  View all your MCC investments across chain
                                  here
                                </span>
                              </span>
                            </div>
                          </a>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </>
          ) : (
            <button
              className="relative inline-flex items-center justify-center px-3 py-1 overflow-hidden text-sm font-bold tracking-tighter text-white bg-gray-800 rounded-lg group"
              onClick={show}
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:h-56 group-hover:w-56" />
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg bg-gradient-to-b from-transparent via-transparent to-gray-700 opacity-30" />
              <span className="relative whitespace-nowrap">
                {isConnecting ? 'Connecting...' : `Connect Wallet`}
              </span>
              <span className="sr-only">Connect Wallet</span>
            </button>
          );
        }}
      </ConnectKitButton.Custom>

      <div className="ml-1 sm:ml-2">
        <ChainSelect chainId={chain?.id} />
      </div>
    </div>
  );
}
