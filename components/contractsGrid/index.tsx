export function ContractsGrid() {
  return (
    <main >
      <div>
        <header>
          <h3 className="text-2xl font-medium leading-6 text-gray-50">Main Contracts & Wallets</h3>
        </header>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5 mb-5">
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/logos/mcc-black.png" alt="multichaincapital.eth Image" title="0xc146b7cdbaff065090077151d391f4c96aa09e0c" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">mcc token</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/token/0xc146b7cdbaff065090077151d391f4c96aa09e0c" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/token/0xc146b7cdbaff065090077151d391f4c96aa09e0c" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://polygonscan.com/token/0xc146b7cdbaff065090077151d391f4c96aa09e0c" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/polygon.png" alt="Polygon Image" title="polygonscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://andromeda-explorer.metis.io/address/0xC146B7CdBaff065090077151d391f4c96Aa09e0C/transactions" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/metis.png" alt="Metis Image" title="andromeda explorer" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0xc146b7cdbaff065090077151d391f4c96aa09e0c" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/logos/mcc-black.png" alt="multichaincapital.eth Image" title="0xfbf335f8224a102e22abe78d78cc52dc95e074fa" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">multichaincapital .eth</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0xfbf335f8224a102e22abe78d78cc52dc95e074fa" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/address/0xfbf335f8224a102e22abe78d78cc52dc95e074fa" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://polygonscan.com/address/0xfbf335f8224a102e22abe78d78cc52dc95e074fa" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/polygon.png" alt="Polygon Image" title="polygonscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/address/0xfbf335f8224a102e22abe78d78cc52dc95e074fa" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/logos/mcc-black.png" alt="multichaincapital.eth Image" title="0xfef02f8b3fb7546e362a58442e45cd1c9604ea01" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">ens. multichaincapital </h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0xfef02f8b3fb7546e362a58442e45cd1c9604ea01" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/logos/mcc-black.png" alt="multichaincapital.eth Image" title="0x6f71fc3925605f06672409c71844ead4b700af5f" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">farming multichaincapital</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x6f71fc3925605f06672409c71844ead4b700af5f" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/address/0x6f71fc3925605f06672409c71844ead4b700af5f" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/address/0x6f71fc3925605f06672409c71844ead4b700af5f" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/logos/mcc-black.png" alt="multichaincapital.eth Image" title="0xa24b84ee685501bb1d269e9efd5ee81806e63b5e" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">lowrisk multichaincapital</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0xa24b84ee685501bb1d269e9efd5ee81806e63b5e" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/address/0xa24b84ee685501bb1d269e9efd5ee81806e63b5e" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/address/0xa24b84ee685501bb1d269e9efd5ee81806e63b5e" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/logos/mcc-black.png" alt="multichaincapital.eth Image" title="0x73a5DBA52DF247A66798575f4E2bB3747f8C16d3" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">highrisk multichaincapital</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x73a5DBA52DF247A66798575f4E2bB3747f8C16d3" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/address/0x73a5DBA52DF247A66798575f4E2bB3747f8C16d3" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/address/0x73a5DBA52DF247A66798575f4E2bB3747f8C16d3" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/logos/mcc-black.png" alt="multichaincapital.eth Image" title="0x43853a1999f1dc727f407e22283b16bc0fe7b49b" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">airdrop wallet</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x43853a1999f1dc727f407e22283b16bc0fe7b49b" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/address/0x43853a1999f1dc727f407e22283b16bc0fe7b49b" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://polygonscan.com/address/0x43853a1999f1dc727f407e22283b16bc0fe7b49b" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/polygon.png" alt="Polygon Image" title="polygonscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/address/0x43853a1999f1dc727f407e22283b16bc0fe7b49b" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/logos/chef.png" alt="multichaincapital incubations Image" title="0xc3f6dd456ae1fdb1648cd02f8550b5ef9ce44a93" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">incubation multichaincapital</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0xc3f6dd456ae1fdb1648cd02f8550b5ef9ce44a93" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/address/0xc3f6dd456ae1fdb1648cd02f8550b5ef9ce44a93" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/address/0xc3f6dd456ae1fdb1648cd02f8550b5ef9ce44a93" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/logos/mcc-multinodes.png" alt="multichaincapital.eth Image" title="0x9dbf7788c6c0c6e9b2f34d9f118ba6750c71271c" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">multinodes deployer</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x9dbf7788c6c0c6e9b2f34d9f118ba6750c71271c" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/address/0x9dbf7788c6c0c6e9b2f34d9f118ba6750c71271c" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/address/0x9dbf7788c6c0c6e9b2f34d9f118ba6750c71271c" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/logos/mcc-multinodes.png" alt="multichaincapital nodes Image" title="0xf9b899e6e84f6383f99b262eda36c9bddd5fc080" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">multinodes multichaincapital</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0xf9b899e6e84f6383f99b262eda36c9bddd5fc080" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/address/0xf9b899e6e84f6383f99b262eda36c9bddd5fc080" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/address/0xf9b899e6e84f6383f99b262eda36c9bddd5fc080" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/logos/mcc-multinodes.png" alt="multichaincapital nodes Image" title="0x4fd61669334f6fedf5741bfb56fe673bd53a730f" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">node rewards multichaincapital</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/token/0xc146b7cdbaff065090077151d391f4c96aa09e0c?a=0x4fd61669334f6fedf5741bfb56fe673bd53a730f" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/token/0xc146b7cdbaff065090077151d391f4c96aa09e0c?a=0x4fd61669334f6fedf5741bfb56fe673bd53a730f" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0xc146b7cdbaff065090077151d391f4c96aa09e0c?a=0x4fd61669334f6fedf5741bfb56fe673bd53a730f" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/multiprint.png" alt="multiprint image" title="0x6c96997d0fe3ea4e67af1f48f23d1f9c265ee401" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">multiprint deployer</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x6c96997d0fe3ea4e67af1f48f23d1f9c265ee401" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/address/0x6c96997d0fe3ea4e67af1f48f23d1f9c265ee401" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/address/0x6c96997d0fe3ea4e67af1f48f23d1f9c265ee401" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/rc.png" alt="reflector collector" title="0x9d5b051685d9272d20af3c94134cb7ac41db5648" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">reflector collector deployer</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x9d5b051685d9272d20af3c94134cb7ac41db5648" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/address/0x9d5b051685d9272d20af3c94134cb7ac41db5648" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://polygonscan.com/address/0x9d5b051685d9272d20af3c94134cb7ac41db5648" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/polygon.png" alt="Polygon Image" title="polygonscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/address/0x9d5b051685d9272d20af3c94134cb7ac41db5648" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/art.png" alt="human only art image" title="0x9707cbbcfd356c37a69f938cedfc211ea3b548e6" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">humanonlyart.eth</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x9707cbbcfd356c37a69f938cedfc211ea3b548e6" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <header>
          <h3 className="text-2xl font-medium leading-6 text-gray-50">Treasury & Multisig Vaults</h3>
        </header>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5 mb-5">
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/logos/mcc-black.png" alt="multichaincapital Image" title="0xed528fc31f2575312ec3336e0f6ec9812b534937" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">treasury multichaincapital</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0xed528fc31f2575312ec3336e0f6ec9812b534937" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/address/0x82b65df1b0ec5276c6dd9e44c1ecee2f3c9eb357" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/address/0xee0256f9bdbc01d68999c2614db31660d2c59ff7" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/logos/gnosis.png" alt="Gnosis Safe Image" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">Gnosis Safes</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://gnosis-safe.io/app/eth:0xed528FC31f2575312Ec3336E0F6ec9812B534937/balances" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://gnosis-safe.io/app/bnb:0x82b65df1b0ec5276c6dd9e44c1ecee2f3c9eb357/balances" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://safe.fantom.network/ftm:0xee0256f9bdbc01D68999C2614db31660d2c59fF7/balances" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <header>
          <h3 className="text-2xl font-medium leading-6 text-gray-50">Incubator Tokens</h3>
        </header>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5 mb-5">
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/aa.png" alt="Andre Anonymous Image" title="0xb0918b73a7d8d53df8bd0d91d2821478db17da2b" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">Andre Anonymous</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/token/0xb0918b73a7d8d53df8bd0d91d2821478db17da2b" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/token/0xb0918b73a7d8d53df8bd0d91d2821478db17da2b" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0xb0918b73a7d8d53df8bd0d91d2821478db17da2b" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/cashback.png" alt="Cash Back Image" title="0x6a1e94128a5065c6544d23ffa9b4e78b69015611" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">Cash Back</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/token/0x6a1e94128a5065c6544d23ffa9b4e78b69015611" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/token/0x6a1e94128a5065c6544d23ffa9b4e78b69015611" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0x6a1e94128a5065c6544d23ffa9b4e78b69015611" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/czr.png" alt="CZ Retirement Package Image" title="0xC5401F6EAb46cBa5a8151D1132c022a311d9AEAE" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">CZ Retirement</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/token/0xC5401F6EAb46cBa5a8151D1132c022a311d9AEAE" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/token/0xC5401F6EAb46cBa5a8151D1132c022a311d9AEAE" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0xC5401F6EAb46cBa5a8151D1132c022a311d9AEAE" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://andromeda-explorer.metis.io/token/0xC5401F6EAb46cBa5a8151D1132c022a311d9AEAE/token-transfers" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/metis.png" alt="Metis Image" title="andromeda explorer" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/fnd.png" alt="Friday Night Degen Image" title="0x86904a5ce54b397bf8a0041cbb9725980d5d6b7b" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">Friday Night Degen</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/token/0x86904a5ce54b397bf8a0041cbb9725980d5d6b7b" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0x86904a5ce54b397bf8a0041cbb9725980d5d6b7b" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/gold.png" alt="gold Image" title="0x7058664c822f4853c0afffc99bdd4eff27f6497b" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">Gold</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0x7058664c822f4853c0afffc99bdd4eff27f6497b" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/multiprint.png" alt="Multiprint Image" title="0xc87cee866ebdfc4F0E07E80157f0f4cBb7Ad329e" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">Mprint</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/token/0xc87cee866ebdfc4F0E07E80157f0f4cBb7Ad329e" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/token/0xc87cee866ebdfc4F0E07E80157f0f4cBb7Ad329e" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0xc87cee866ebdfc4F0E07E80157f0f4cBb7Ad329e" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/ogtomb.png" alt="OG-TOMB Image" title="0x318315ac34494caaec9028cbb63eff15c7b3b2e4" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">OG-TOMB</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0x318315ac34494caaec9028cbb63eff15c7b3b2e4" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/ogtshare.png" alt="OG-TSHARE Image" title="0x754c8232a9ad41cc305e7f7c5f5bc2a86b4b8437" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">OG-TSHARE</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0x754c8232a9ad41cc305e7f7c5f5bc2a86b4b8437" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/ogtbond.png" alt="OG-TBOND Image" title="0x6e3a003042380d559175cDb8d372B6a07eC511b1" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">OG-TBOND</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0x6e3a003042380d559175cDb8d372B6a07eC511b1" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/rc.png" alt="RC Image" title="0xF6ee08FA550E1cb08C0821a4DA8CEa57b8909D2e" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">RC</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/token/0xF6ee08FA550E1cb08C0821a4DA8CEa57b8909D2e" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/token/0xF6ee08FA550E1cb08C0821a4DA8CEa57b8909D2e" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0xF6ee08FA550E1cb08C0821a4DA8CEa57b8909D2e" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/reuro.png" alt="Reflective EURO Image" title="0xb9681e6e064f2f36de3e1bc614b83d306fc2d461" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">Reflective EURO</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/token/0xb9681e6e064f2f36de3e1bc614b83d306fc2d461" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/slvr.png" alt="silver Image" title="0xddcc5bd7581955c7df2f902423bfe53b47c1f935" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">Slvr</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0xddcc5bd7581955c7df2f902423bfe53b47c1f935" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/sales.png" alt="Sales Tax Image" title="0xdd7788db6ff418c71e32e5cbf7205b6c1b2bb07f" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">Sales Tax</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/token/0xdd7788db6ff418c71e32e5cbf7205b6c1b2bb07f" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0xdd7788db6ff418c71e32e5cbf7205b6c1b2bb07f" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://andromeda-explorer.metis.io/token/0xdd7788db6ff418c71e32e5cbf7205b6c1b2bb07f/token-transfers" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/metis.png" alt="Metis Image" title="andromeda explorer" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/merge.png" alt="TheMerge Tech Image" title="0x0a533badc3d59014c761674c1962e2d3aaef1035" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">TheMerge.Tech</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/token/0x0a533badc3d59014c761674c1962e2d3aaef1035" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/token/0x0a533badc3d59014c761674c1962e2d3aaef1035" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0x0a533badc3d59014c761674c1962e2d3aaef1035" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/ub.png" alt="Unit Bias Image" title="0x8c5b7f8e055afacdda801fc7bf8f8a1266661080" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">Unit Bias</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/token/0x8c5b7f8e055afacdda801fc7bf8f8a1266661080" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/token/0x8c5b7f8e055afacdda801fc7bf8f8a1266661080" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0x8c5b7f8e055afacdda801fc7bf8f8a1266661080" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://andromeda-explorer.metis.io/token/0x8c5b7f8e055afacdda801fc7bf8f8a1266661080/token-transfers" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/metis.png" alt="Metis Image" title="andromeda explorer" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/uub.png" alt="Ultra Unit Bias Image" title="0xeeed1c46188a9dbe0460968bb036a69145e82273" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">Ultra Unit Bias</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/token/0xeeed1c46188a9dbe0460968bb036a69145e82273" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://bscscan.com/token/0xeeed1c46188a9dbe0460968bb036a69145e82273" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0xeeed1c46188a9dbe0460968bb036a69145e82273" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <header>
          <h3 className="text-2xl font-medium leading-6 text-gray-50">Farming Platforms</h3>
        </header>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5 mb-5">
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/multiprint.png" alt="Multiprint Image" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">Multiprint</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://mprint.mchain.capital/" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://multiprint.mchain.capital/" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://multiprint-ftm.mchain.capital/" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/rc.png" alt="Reflector Collector Image" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">Reflector Collector</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://rc-eth.mchain.capital/" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://rc-bsc.mchain.capital/" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://rc-ftm.mchain.capital/" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <header>
          <h3 className="text-2xl font-medium leading-6 text-gray-50">Lending Platforms</h3>
        </header>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5 mb-5">
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/slvr.png" alt="Silver Protocol Image" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">Silver protocol</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://app.silverprotocol.eth.limo/" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <header>
          <h3 className="text-2xl font-medium leading-6 text-gray-50">MarketPlace Platform</h3>
        </header>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5 mb-5">
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/art.png" alt="Human only art Image" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">Human Only Art</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://humanartonly.eth.limo/" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/incubators/art.png" alt="Human only art Image" title="Website" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/HumanOnlyArtNFT" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/logos/twitter.png" alt="Twitter Image" title="Twitter" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://opensea.io/HumanOnlyArt" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/logos/opensea.png" alt="Opensea Image" title="Opensea" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/nodes/presidential.png" alt="MultiNodes Marketplace Image" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">MultiNodes Marketplace</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href=" https://opensea.io/collection/multinode" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://tofunft.com/collection/multi-chain-capital-multinodes/items" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/bsc.png" alt="Binance Smart Chain Image" title="bscscan" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://paintswap.finance/marketplace/collections/0xf9b899e6e84f6383f99b262eda36c9bddd5fc080" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <header>
          <h3 className="text-2xl font-medium leading-6 text-gray-50">Governance</h3>
        </header>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5 mb-5">
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/ogtomb.png" alt="OG-TOMB Image" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">OG-TOMB</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://ogtomb.com/" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/incubators/ogtomb.png" alt="OG-TOMB Image" title="Website" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mccogtomb" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/logos/twitter.png" alt="Twitter Image" title="Twitter" />
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@mikemurpher/ogtomb-help-guides-index-e404bf21a5a" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/logos/medium.png" alt="Medium Image" title="Medium Help Guides" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <header>
          <h3 className="text-2xl font-medium leading-6 text-gray-50">Unconfirmed</h3>
        </header>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5 mb-5">
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/abc.png" alt="ABC Protocol Image" title="0xebde95c46e429ecd284d04bffcfd9b4cb9861dfc" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">ABC Protocol</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0xebde95c46e429ecd284d04bffcfd9b4cb9861dfc" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/green.png" alt="Greenlight Image" title="0xe5c8e7a3be1d6b24b41e4418ba46e31b35b86f0c" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">Greenlight</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0xe5c8e7a3be1d6b24b41e4418ba46e31b35b86f0c" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/justtest.png" alt="Just Test Image" title="0xACACab474461877B90E6fDca44A2F8d1B5941BAf" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">Just Test</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0xacacab474461877b90e6fdca44a2f8d1b5941baf" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/art.png" alt="Human Only Art Image" title="0x52b976bda3bc65b5b36234c29cda1a4f156e8ca4" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">Human Only Art</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/token/0x52b976bda3bc65b5b36234c29cda1a4f156e8ca4" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/eth.png" alt="Ethereum Image" title="etherscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/mirror.png" alt="Multi-Chain Mirror Image" title="0xfb0a20b546aa5c5cdbc9e2dcbc472282f2dc28c8" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">Multi-Chain Mirror</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/address/0xfb0a20b546aa5c5cdbc9e2dcbc472282f2dc28c8" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className=" border-white col-span-1 flex flex-col rounded-lg border-4 bg-white text-center shadow">
            <div className="flex flex-col flex-1 px-4 py-3">
              <img className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg" src="/incubators/rmpl.png" alt="RMPL Image" title="0x137c1b5974a514965021b9c728a5551b4985dac5" />
              <h3 className="mt-2 text-sm font-black text-gray-900 uppercase">RMPL</h3>
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-200">
                <div className="flex flex-1 w-0">
                  <a target="_blank" rel="noopener noreferrer" href="https://ftmscan.com/token/0x137c1b5974a514965021b9c728a5551b4985dac5" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border rounded-bl-lg rounded-br-lg hover:text-gray-500">
                    <img className="flex-shrink-0 w-5 h-5" src="/networks/ftm.png" alt="Fantom Image" title="ftmscan" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main >
  );
}
