import useSWR from 'swr';
import { useWeb3 } from '../../lib/hooks/useWeb3';
import { IncubatorTokenAddressEnum, TokenType } from '../../lib/types';
import request from '../../lib/utils/request';
import { Loading } from '../loading';
import { TokenView } from '../token';

export function Tokens() {
  const { chainId, address } = useWeb3();

  const { data, isLoading } = useSWR(
    `/api/incubatorholdings?chainId=${chainId}&address=${address}`,
    (url: string) => request(url)
  );

  const incubatorTokens: TokenType[] = data?.myTokens?.map(
    (token: TokenType) => {
      if (
        parseInt(token.balance) > 0 &&
        Object.values(IncubatorTokenAddressEnum).includes(
          token?.token_address as IncubatorTokenAddressEnum
        )
      ) {
        return {
          ...token,
          type: 'incubator',
          balance: parseInt(token.balance) / Math.pow(10, token?.decimals),
        };
      }
    }
  );

  const yieldwolfVaults: TokenType[] = [];

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
            My Incubator Tokens
          </h3>
        </header>
      </div>
      <dl className="grid grid-cols-1 gap-2 mt-5 divide-y divide-gray-200 rounded-lg overflow-hide md:grid-cols-2 md:divide-y-0 md:divide-x">
        {incubatorTokens?.map((token: any) => (
          <TokenView
            key={`token-${token?.token_address}`}
            type="incubator"
            {...token}
          />
        ))}
      </dl>
      <div className="mb-5"></div>
      <div>
        <header>
          <h3 className="text-2xl font-medium leading-6 text-gray-50">
            My YieldWolf Vaults
          </h3>
        </header>
      </div>
      <dl className="grid grid-cols-1 gap-2 mt-5 divide-y divide-gray-200 rounded-lg shadow overflow-hide md:grid-cols-2 md:divide-y-0 md:divide-x">
        {yieldwolfVaults?.map((token: any) => (
          <TokenView
            key={`token-${token?.token_address}`}
            type="yieldwolf"
            {...token}
          />
        ))}
      </dl>
      <div className="mb-5"></div>
    </main>
  );
}