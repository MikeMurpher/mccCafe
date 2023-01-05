import { MCC_CONTRACT, MULTINODE_CLAIM_CONTRACT } from '../../lib/constants';
import { ChainEnum, ChainNameEnum } from '../../lib/types';
import { renderConnectedChain } from '../../lib/utils/chainFormatters';
import { abbreviateNumber } from '../../lib/utils/formatNumbers';
import request from '../../lib/utils/request';
import { Loading } from '../loading';
import clsx from 'clsx';
import useSWR from 'swr';
import { useBalance } from 'wagmi';

export function RewardBalanceStats() {
  const { data: priceData, isLoading } = useSWR(
    '/api/mcc-price',
    (url: string) => request(url)
  );

  const { data: ftmBalance, isLoading: ftmLoading } = useBalance({
    address: MULTINODE_CLAIM_CONTRACT,
    token: MCC_CONTRACT,
    chainId: ChainEnum.ftm,
    watch: true,
  });

  const { data: ercBalance, isLoading: ercLoading } = useBalance({
    address: MULTINODE_CLAIM_CONTRACT,
    token: MCC_CONTRACT,
    chainId: ChainEnum.erc,
    watch: true,
  });

  const { data: bscBalance, isLoading: bscLoading } = useBalance({
    address: MULTINODE_CLAIM_CONTRACT,
    token: MCC_CONTRACT,
    chainId: ChainEnum.bsc,
    watch: true,
  });

  return (
    <div>
      <h3 className="text-2xl font-medium leading-6 text-gray-50">
        Multi Node Reward Balance Reserves
      </h3>
      <dl className="grid grid-cols-1 mt-5 overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow md:grid-cols-3 md:divide-y-0 md:divide-x">
        {/* FTM */}
        <div key={ChainNameEnum.ftm} className="px-4 py-5 sm:p-6">
          <dt className="flex items-center text-base font-bold text-gray-900 uppercase">
            {renderConnectedChain(ChainEnum.ftm)}
            {ChainNameEnum.ftm}{' '}
            <span className="ml-1 text-xs font-normal text-gray-400 normal-case">
              chain
            </span>
            {isLoading ? (
              <Loading
                containerClass="ml-auto text-xs font-bold text-gray-500"
                size={4}
                fill="gray"
              />
            ) : (
              <span className="ml-auto text-xs font-bold text-gray-500">
                ${priceData?.ftm} MCC Price
              </span>
            )}
          </dt>
          <dd className="flex items-baseline justify-between w-full mt-1 md:block lg:flex">
            <div className="flex items-baseline w-full text-2xl font-semibold text-indigo-600">
              {ftmLoading ? (
                <Loading
                  containerClass="flex justify-center items-center"
                  size={4}
                  fill="gray"
                />
              ) : (
                <span className="">
                  {abbreviateNumber(`${ftmBalance?.formatted}`, 2)}
                </span>
              )}
              <span className="ml-2 text-lg font-bold text-gray-500">MCC</span>
              <div className="ml-auto">
                <div
                  className={clsx(
                    'inline-flex flex-auto items-baseline rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 md:mt-2 lg:mt-0'
                  )}
                >
                  {ftmLoading || isLoading ? (
                    <Loading
                      containerClass="flex justify-center items-center"
                      size={4}
                      fill="gray"
                    />
                  ) : (
                    <>
                      $
                      {abbreviateNumber(
                        // @ts-ignore
                        priceData?.ftm * ftmBalance?.formatted,
                        2
                      )}{' '}
                      Total
                    </>
                  )}
                </div>
              </div>
            </div>
          </dd>
        </div>

        {/* BSC */}
        <div key={ChainNameEnum.bsc} className="px-4 py-5 sm:p-6">
          <dt className="flex items-center text-base font-bold text-gray-900 uppercase">
            {renderConnectedChain(ChainEnum.bsc)}
            {ChainNameEnum.bsc}{' '}
            <span className="ml-1 text-xs font-normal text-gray-400 normal-case">
              chain
            </span>
            {isLoading ? (
              <Loading
                containerClass="ml-auto text-xs font-bold text-gray-500"
                size={4}
                fill="gray"
              />
            ) : (
              <span className="ml-auto text-xs font-bold text-gray-500">
                ${priceData?.bsc} MCC Price
              </span>
            )}
          </dt>
          <dd className="flex items-baseline justify-between w-full mt-1 md:block lg:flex">
            <div className="flex items-baseline w-full text-2xl font-semibold text-indigo-600">
              {bscLoading ? (
                <Loading
                  containerClass="flex justify-center items-center"
                  size={4}
                  fill="gray"
                />
              ) : (
                <span className="">
                  {abbreviateNumber(`${bscBalance?.formatted}`, 2)}
                </span>
              )}
              <span className="ml-2 text-lg font-bold text-gray-500">MCC</span>
              <div className="ml-auto">
                <div
                  className={clsx(
                    'inline-flex flex-auto items-baseline rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 md:mt-2 lg:mt-0'
                  )}
                >
                  {bscLoading || isLoading ? (
                    <Loading
                      containerClass="flex justify-center items-center"
                      size={4}
                      fill="gray"
                    />
                  ) : (
                    <>
                      $
                      {abbreviateNumber(
                        // @ts-ignore
                        priceData?.bsc * bscBalance?.formatted,
                        2
                      )}{' '}
                      Total
                    </>
                  )}
                </div>
              </div>
            </div>
          </dd>
        </div>

        {/* ERC */}
        <div key={ChainNameEnum.erc} className="px-4 py-5 sm:p-6">
          <dt className="flex items-center text-base font-bold text-gray-900 uppercase">
            {renderConnectedChain(ChainEnum.erc)}
            {ChainNameEnum.erc}{' '}
            <span className="ml-1 text-xs font-normal text-gray-400 normal-case">
              chain
            </span>
            {isLoading ? (
              <Loading
                containerClass="ml-auto text-xs font-bold text-gray-500"
                size={4}
                fill="gray"
              />
            ) : (
              <span className="ml-auto text-xs font-bold text-gray-500">
                ${priceData?.erc} MCC Price
              </span>
            )}
          </dt>
          <dd className="flex items-baseline justify-between w-full mt-1 md:block lg:flex">
            <div className="flex items-baseline w-full text-2xl font-semibold text-indigo-600">
              {ercLoading ? (
                <Loading
                  containerClass="flex justify-center items-center"
                  size={4}
                  fill="gray"
                />
              ) : (
                <span className="">
                  {abbreviateNumber(`${ercBalance?.formatted}`, 2)}
                </span>
              )}
              <span className="ml-2 text-lg font-bold text-gray-500">MCC</span>
              <div className="ml-auto">
                <div
                  className={clsx(
                    'inline-flex flex-auto items-baseline rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 md:mt-2 lg:mt-0'
                  )}
                >
                  {ercLoading || isLoading ? (
                    <Loading
                      containerClass="flex justify-center items-center"
                      size={4}
                      fill="gray"
                    />
                  ) : (
                    <>
                      $
                      {abbreviateNumber(
                        // @ts-ignore
                        priceData?.erc * ercBalance?.formatted,
                        2
                      )}{' '}
                      Total
                    </>
                  )}
                </div>
              </div>
            </div>
          </dd>
        </div>
      </dl>
    </div>
  );
}
