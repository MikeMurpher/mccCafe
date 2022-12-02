import useSWR from 'swr';
import { useWeb3 } from '../../lib/hooks/useWeb3';
import {
  IncubatorTokenAddressEnum,
  TokenType,
  YieldWolfTokenAddressEnum,
} from '../../lib/types';
import request from '../../lib/utils/request';
import { Loading } from '../loading';
import { TokenView } from '../token';

export function Tokens() {
  const { chainId, address } = useWeb3();

  const { data, isLoading } = useSWR(
    `/api/incubatorholdings?chainId=${chainId}&address=${address}`,
    (url: string) => request(url)
  );

  const incubatorTokens: TokenType[] =
    chainId != undefined
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
    chainId != undefined
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

  if (isLoading) {
    return (
      <div className="py-10">
        <Loading size={24} fill="#FFF" />
      </div>
    );
  }

  return (
    <main>
      <div>
        <header>
          <h3 className="text-2xl font-medium leading-6 text-gray-50">
            My Ecosystem Holdings
          </h3>
        </header>
      </div>
      <dl className="grid grid-cols-1 gap-2 mt-5 divide-y divide-gray-200 rounded-lg overflow-hide md:grid-cols-2 md:divide-y-0 md:divide-x">
        {incubatorTokens != undefined ? (
          incubatorTokens?.map((token: any) => (
            <TokenView
              key={`token-${token?.token_address}`}
              type="incubator"
              {...token}
            />
          ))
        ) : (
          <div className="grid grid-cols-1 px-4 py-5 mt-5 overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
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
      <dl className="grid grid-cols-1 gap-2 mt-5 divide-y divide-gray-200 rounded-lg overflow-hide md:grid-cols-2 md:divide-y-0 md:divide-x">
        {yieldwolfVaults != undefined ? (
          yieldwolfVaults?.map((token: any) => (
            <TokenView
              key={`token-${token?.token_address}`}
              type="yieldwolf"
              {...token}
            />
          ))
        ) : (
          <div className="grid grid-cols-1 px-4 py-5 mt-5 overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
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
