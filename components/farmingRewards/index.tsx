import { FarmingRewardType } from '../../lib/types';
import request from '../../lib/utils/request';
import useSWR from 'swr';
import { useAccount, useNetwork } from 'wagmi';

export function FarmingRewardsView(props: FarmingRewardType) {
  const { name, symbol, decimals, farmcontract, fetchcontract } = props;
  const { address } = useAccount();
  const { chain } = useNetwork();

  const { data } = useSWR(
    chain?.id
      ? `/api/farming-rewards?chainId=${chain?.id}&symbol=${symbol}&farmcontract=${farmcontract}&fetchcontract=${fetchcontract}&address=${address}`
      : ``,
    (url: string) => request(url)
  );

  const rewards = parseInt(data?.data?.result) / 10 ** decimals || 0;

  return (
    <div className="px-4 py-5 mb-1 bg-white rounded-lg sm:p-6">
      <dt className="flex items-center text-base font-bold text-gray-900 uppercase">
        <span className="ml-1 text-xs font-normal text-gray-400 normal-case">
          {name}
        </span>
      </dt>
      <dd className="flex items-baseline justify-between w-full mt-1 md:block lg:flex">
        <div className="flex items-baseline w-full text-2xl font-semibold text-indigo-600">
          <span className="class">{rewards.toFixed(5)}</span>
          <span className="ml-2 text-lg font-bold text-gray-500">{symbol}</span>
        </div>
      </dd>
    </div>
  );
}
