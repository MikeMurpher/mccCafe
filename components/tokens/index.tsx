import { useWeb3 } from '../../lib/hooks/useWeb3';
import useSWR from 'swr';
import request from '../../lib/utils/request';
import { Loading } from '../loading';
import Token from '../token'

export function Tokens() {
    const { chainId, address } = useWeb3();

    const { data,isLoading } = useSWR(
        `/api/incubatorholdings?chainId=${chainId}&address=${address}`, (url: string) => request(url)
    );
    if (isLoading) {
        return (
          <div className="py-10">
            <Loading size={24} fill="#FFF" />;
          </div>
        );
      }
    return (
        <main >
            <div>
                <header>
                    <h3 className="text-2xl font-medium leading-6 text-gray-50">My Incubator Tokens</h3>
                </header>
            </div>
            <dl className="grid grid-cols-1 mt-5 gap-2 overflow-hide divide-y divide-gray-200 rounded-lg md:grid-cols-2 md:divide-y-0 md:divide-x">
                {data?.myTokens?.data?.ethereum?.address?.[0]?.balances?.map((token:any) => (
                    <Token type="incubator" {...token}/>
                ))}
            </dl>
            <div className="mb-5"></div>
            <div>
                <header>
                    <h3 className="text-2xl font-medium leading-6 text-gray-50">My YieldWolf Vaults</h3>
                </header>
            </div>
            <dl className="grid grid-cols-1 mt-5 gap-2 overflow-hide divide-y divide-gray-200 rounded-lg shadow md:grid-cols-2 md:divide-y-0 md:divide-x">
                {data?.myTokens?.data?.ethereum?.address?.[0]?.balances?.map((token:any) => (
                    <Token type="yieldwolf" {...token}/>
                ))}
            </dl>
            <div className="mb-5"></div>
        </main>
    )
}