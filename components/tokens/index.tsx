import { farmingPlatforms } from '../../lib/constants';
import {
  FarmingRewardType,
  IncubatorTokenAddressEnum,
  TokenType,
  YieldWolfTokenAddressEnum,
} from '../../lib/types';
import request from '../../lib/utils/request';
import { FarmingRewardsView } from '../farmingRewards';
import { Loading } from '../loading';
import { TokenView } from '../token';
import useSWR from 'swr';
import { useAccount, useNetwork } from 'wagmi';

export function Tokens() {
  const { address } = useAccount();
  const { chain } = useNetwork();

  const { data, isLoading } = useSWR(
    `/api/incubatorholdings?chainId=${chain?.id}&address=${address}`,
    (url: string) => request(url)
  );

  const incubatorTokens: TokenType[] =
    chain?.id != undefined
      ? data?.myTokens
          ?.map((token: TokenType) => {
            if (
              parseInt(token.balance) > 0 &&
              Object.values(IncubatorTokenAddressEnum).includes(
                token?.token_address as IncubatorTokenAddressEnum
              )
            ) {
              return {
                ...token,
                type: 'incubator',
                balance:
                  parseInt(token.balance) / Math.pow(10, token?.decimals),
              };
            }
          })
          .filter((element: any) => {
            return element !== undefined;
          })
      : undefined;

  const yieldwolfVaults: TokenType[] =
    chain?.id != undefined
      ? data?.myTokens
          ?.map((token: TokenType) => {
            if (
              parseInt(token.balance) > 0 &&
              Object.values(YieldWolfTokenAddressEnum).includes(
                token?.token_address as YieldWolfTokenAddressEnum
              )
            ) {
              return {
                ...token,
                type: 'yieldwolf',
                balance:
                  parseInt(token.balance) / Math.pow(10, token?.decimals),
              };
            }
          })
          .filter((element: any) => {
            return element !== undefined;
          })
      : undefined;

  const farmingPlatformTokens: FarmingRewardType[] = chain?.id
    ? farmingPlatforms
        .filter((platform) => platform.chainId === chain.id)
        .flatMap((platform) => platform.farms)
        .map((farm) => ({
          name: farm.name,
          symbol: farm.symbol,
          decimals: farm.decimals,
          farmcontract: farm.farmcontract,
          fetchcontract: farm.fetchcontract,
          contractfunction: farm.contractfunction,
        }))
    : [];

  if (isLoading) {
    return (
      <div className="py-10">
        <Loading size={24} fill="#FFF" />
      </div>
    );
  }

  return (
    <main>
      {chain?.id && (
        <div>
          <div>
            <header>
              <h3 className="text-2xl font-medium leading-6 text-gray-50">
                My Farming Rewards
              </h3>
            </header>
          </div>
          <dl className="overflow-hide mt-5 grid grid-cols-1 gap-2 divide-y divide-gray-200 rounded-lg md:grid-cols-2 md:divide-y-0 md:divide-x">
            {farmingPlatformTokens?.map((farm: any) => (
              <FarmingRewardsView key={`farm-${farm?.name}`} {...farm} />
            ))}
          </dl>
        </div>
      )}
      <div className="mb-5"></div>
      <div>
        <header>
          <h3 className="text-2xl font-medium leading-6 text-gray-50">
            My Ecosystem Holdings
          </h3>
        </header>
      </div>
      <dl className="overflow-hide mt-5 grid grid-cols-1 gap-2 divide-y divide-gray-200 rounded-lg md:grid-cols-2 md:divide-y-0 md:divide-x">
        {incubatorTokens != undefined ? (
          incubatorTokens?.map((token: any) => (
            <TokenView
              key={`token-${token?.token_address}`}
              type="incubator"
              {...token}
            />
          ))
        ) : (
          <div className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white px-4 py-5 shadow">
            <h2 className="text-2xl font-bold leading-7 text-gray-500 sm:truncate sm:text-2xl">
              Connect Wallet To View Your Tokens
            </h2>
          </div>
        )}
      </dl>
      <div className="mb-5"></div>
      <div>
        <header>
          <h3 className="text-2xl font-medium leading-6 text-gray-50">
            My YieldWolf Vaults
          </h3>
        </header>
      </div>
      <dl className="overflow-hide mt-5 grid grid-cols-1 gap-2 divide-y divide-gray-200 rounded-lg md:grid-cols-2 md:divide-y-0 md:divide-x">
        {yieldwolfVaults != undefined ? (
          yieldwolfVaults?.map((token: any) => (
            <TokenView
              key={`token-${token?.token_address}`}
              type="yieldwolf"
              {...token}
            />
          ))
        ) : (
          <div className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white px-4 py-5 shadow">
            <h2 className="text-2xl font-bold leading-7 text-gray-500 sm:truncate sm:text-2xl">
              Connect Wallet To View Your Vaults
            </h2>
          </div>
        )}
      </dl>
      <div className="mb-5"></div>
    </main>
  );
}
