import { ethers } from 'ethers'

export async function getFarmingBalances(chain: any, symbol: string, farmcontract: string, fetchcontract: string, address: any) {
    const contractABI = [{ "inputs": [{ "internalType": "address", "name": "_externalChefAddress", "type": "address" }, { "internalType": "address", "name": "_userAddress", "type": "address" }], "name": "pendingRewardsMasterChef", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_externalChefAddress", "type": "address" }, { "internalType": "address", "name": "_userAddress", "type": "address" }], "name": "pendingRewardsReflectorChef", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]

    let contractInterface = new ethers.utils.Interface(contractABI);

    const functionSignature =
        symbol === 'MPRINT'
            ?
            contractInterface.encodeFunctionData('pendingRewardsMasterChef', [`${farmcontract}`, `${address}`])
            :
            contractInterface.encodeFunctionData('pendingRewardsReflectorChef', [`${farmcontract}`, `${address}`]);

    let apikey, domain = undefined;

    if (chain == 1) {
        apikey = process.env.ETHERSCAN_API_KEY
        domain = 'api.etherscan.com'
    } else if (chain == 56) {
        apikey = process.env.BSCSCAN_API_KEY
        domain = 'api.bscscan.com'
    } else if (chain == 250) {
        apikey = process.env.FTMSCAN_API_KEY
        domain = 'api.ftmscan.com'
    }

    return await fetch(
        `https://${domain}/api?module=proxy&action=eth_call&to=${fetchcontract}&data=${functionSignature}&tag=latest&apikey=${apikey}`,
        {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'GET',
        }
    ).then((res) => res.json());

}