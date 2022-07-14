import classNames from 'classnames';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { MULTINODE_CLAIM_CONTRACT } from '../../lib/constants';
import { ChainEnum, ChainNameEnum } from '../../lib/types';
import { renderConnectedChain } from '../../lib/utils/chainFormatters';
import { abbreviateNumber } from '../../lib/utils/formatNumbers';
import request from '../../lib/utils/request';
import { Loading } from '../loading';

export function RewardBalanceStats() {
  const [rewards, setRewards] = useState([
    {
      name: ChainNameEnum.ftm,
      id: ChainEnum.ftm,
    },
    {
      name: ChainNameEnum.bsc,
      id: ChainEnum.bsc,
    },
    {
      name: ChainNameEnum.erc,
      id: ChainEnum.erc,
    },
  ]);

  const { data, isLoading } = useSWR(
    `/api/holdings?address=${MULTINODE_CLAIM_CONTRACT}`,
    (url: string) => request(url)
  );

  useEffect(() => {
    if (!isLoading) {
      setRewards(
        rewards.map((b) => {
          return {
            name: b?.name,
            id: b?.id,
            ...data?.[b?.name],
          };
        })
      );
    }
  }, [isLoading]);

  return (
    <div>
      <h3 className="text-2xl font-medium leading-6 text-gray-50">
        Multi Node Reward Balance Reserves
      </h3>
      <dl className="grid grid-cols-1 mt-5 overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow md:grid-cols-3 md:divide-y-0 md:divide-x">
        {rewards.map((item: any) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="flex items-center text-base font-bold text-gray-900 uppercase">
              {renderConnectedChain(item?.id)}
              {item?.name}{' '}
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
                  ${item?.price} MCC Price
                </span>
              )}
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
                  <span className="">{abbreviateNumber(item?.supply, 2)}</span>
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
                      <>${abbreviateNumber(item?.usdValue, 2)} USD</>
                    )}
                  </div>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
