import useEagerConnect from '../../lib/hooks/useEagerConnect';
import useMetaMaskOnboarding from '../../lib/hooks/useMetaMaskOnboarding';
import { useWeb3 } from '../../lib/hooks/useWeb3';
import { useWalletStore } from '../../lib/stores/wallet';
import { BlockchainType, ChainEnum } from '../../lib/types';
import { formatOnChainLink } from '../../lib/utils/formatOnChainLink';
import { shortenHex } from '../../lib/utils/shortenHex';
import { BSCIcon } from '../svgs/bsc';
import { ErcIcon } from '../svgs/erc';
import { FtmIcon } from '../svgs/ftm';

export function Web3Account() {
  const { updateWeb3Provider } = useWalletStore((state) => state);
  const { connect, chainId, disconnect, connecting, ENSName, address } =
    useWeb3();
  const { isWeb3Available, startOnboarding } = useMetaMaskOnboarding();
  const triedToEagerConnect = useEagerConnect();

  if (!triedToEagerConnect) {
    return null;
  }

  if (typeof address !== 'string') {
    return (
      <button
        className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden text-xl font-bold tracking-tighter text-white bg-gray-800 rounded-lg group"
        disabled={connecting}
        onClick={() => {
          if (isWeb3Available) {
            updateWeb3Provider({
              connecting: true,
            });
            connect();
          } else {
            startOnboarding;
          }
        }}
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:h-56 group-hover:w-56" />
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg bg-gradient-to-b from-transparent via-transparent to-gray-700 opacity-30" />
        <span className="relative">
          {isWeb3Available
            ? connecting
              ? 'Connecting...'
              : `Connect Wallet`
            : `Install Metamask`}
        </span>
        <span className="sr-only">
          {isWeb3Available ? `Connect Wallet` : `Install Metamask`}
        </span>
      </button>
    );
  }

  return (
    <>
      <a
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-md p-0.5 text-xl font-bold tracking-tighter"
        {...{
          href: formatOnChainLink('Account', [chainId, address]),
          target: '_blank',
          rel: 'noopener noreferrer',
        }}
      >
        <span className="absolute w-full h-full bg-gradient-to-br from-green-300 via-green-500 to-green-700 group-hover:from-green-400 group-hover:via-green-500 group-hover:to-green-900" />
        <span className="relative flex justify-center px-6 py-3 transition-all ease-out rounded-md duration-400 group-hover:bg-opacity-0">
          <span className={'mr-1 flex items-center justify-center'}>
            {renderConnectedChain(chainId)}
          </span>
          <span className="relative text-white">
            {ENSName || `${shortenHex(address, 4)}`}
          </span>
        </span>
      </a>
      <a
        className="absolute p-1 text-xs underline cursor-pointer mt-14 hover:text-gray-500"
        onClick={disconnect}
      >
        Disconnect
      </a>
    </>
  );
}

function renderConnectedChain(chain?: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return <ErcIcon />;
    case ChainEnum.bsc:
      return <BSCIcon />;
    case ChainEnum.ftm:
      return <FtmIcon />;
    default:
      ``;
  }
}
