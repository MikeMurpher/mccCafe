export async function getIncubatorTokenBalances(network: string,address:string) {
  try {
    return await fetch('https://graphql.bitquery.io/', {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'x-api-key': `${process.env.BITQUERY_API_KEY}`,
      },
      body: JSON.stringify({
        query: `query ($network: EthereumNetwork!,$address:String){
                  ethereum(network: $network) {
                    address(address: {is: $address}) {
                      balances {
                        currency {
                          symbol
                          address
                          name
                        }
                        value
                      }
                    }
                  }
                }
              `,
        variables: {
          network,
          address
        },
      }),
      method: 'POST',
    }).then((res) => res.json());
  } catch (error) {
    console.error(error);
  }
}

