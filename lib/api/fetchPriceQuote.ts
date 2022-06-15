export async function fetchPriceQuote({
  network,
  quoteCurrency,
  usdc,
}: {
  network: 'ethereum' | 'bsc' | 'fantom';
  quoteCurrency: string;
  usdc: string;
}) {
  try {
    return await fetch('https://graphql.bitquery.io/', {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'x-api-key': `${process.env.BITQUERY_API_KEY}`,
      },
      body: JSON.stringify({
        query: `
        query ($network: EthereumNetwork!, $quoteCurrency: String!, $usdc: String!) {
          ethereum(network: $network) {
            dexTrades(
              baseCurrency: {is: $quoteCurrency}
              quoteCurrency: {is: $usdc}
              options: {desc: ["block.height", "transaction.index"], limit: 1}
            ) {
              block {
                height
                timestamp {
                  time(format: "%Y-%m-%d %H:%M:%S")
                }
              }
              transaction {
                index
              }
              baseCurrency {
                symbol
              }
              quoteCurrency {
                symbol
              }
              quotePrice
            }
          }
        }
        `,
        variables: {
          network,
          quoteCurrency,
          usdc,
        },
      }),
      method: 'POST',
    }).then((res) => res.json());
  } catch (error) {
    console.error(error);
  }
}
