export async function getTokenBalance({ chain, account, tokenAddress }: any) {
  return await fetch(
    `https://deep-index.moralis.io/api/v2/${account}/erc20?chain=${chain}&token_addresses=${tokenAddress}`,
    {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': `${process.env.NEXT_PUBLIC_MORALIS_API_KEY}`,
      },
      method: 'GET',
    }
  ).then((res) => res.json());
}
