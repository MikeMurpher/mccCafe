import { renderConnectedChain } from '../../lib/utils/chainFormatters';
import { Listbox, Transition } from '@headlessui/react';
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import { useSwitchNetwork } from 'wagmi';

interface ChainSelectProps {
  chainId?: number;
}

export function ChainSelect(props: ChainSelectProps) {
  const { chainId } = props;
  const { chains, switchNetwork } = useSwitchNetwork();

  return (
    <Listbox
      value={chainId}
      onChange={(event) => {
        if (chainId !== event && switchNetwork) {
          switchNetwork(event);
        }
      }}
    >
      <div className="relative">
        <Listbox.Button className="relative w-16 h-10 py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default sm:w-18 bg-opacity-40 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="">{renderConnectedChain(chainId)}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronDownIcon
              className="w-5 h-5 text-gray-700"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute right-0 py-1 mt-1 overflow-auto text-base rounded-md shadow-lg max-h-60 w-72 bg-gray-50 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {chains?.map((c) => {
              return (
                <Listbox.Option
                  key={c.id}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-green-200 text-green-900' : 'text-gray-900'
                    }`
                  }
                  value={c.id}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-bold' : 'font-normal'
                        }`}
                      >
                        <span className="flex items-center">
                          <span className="mr-1">
                            {renderConnectedChain(c.id)}
                          </span>
                          {c?.name}
                        </span>
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                          <CheckCircleIcon
                            className="w-5 h-5"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              );
            })}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
