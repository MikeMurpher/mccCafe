import { useWeb3 } from '../../lib/hooks/useWeb3';
import {
  ChainEnum,
  IncubatorTokenAddressEnum,
  TokenType,
} from '../../lib/types';
import { abbreviateNumber } from '../../lib/utils/formatNumbers';

export function TokenView(props: TokenType & { type: string }) {
  const { token_address, balance, symbol, type, name } = props;
  const { chainId } = useWeb3();

  const val = abbreviateNumber(balance, 2);
  const tokenImage = getTokenImage(token_address, type);
  const buttonText = getButtonText(type);
  const buttonLink = getButtonLink(chainId, token_address, type);
  const visible = getHyperlinkDisplay(type);

  return (
    <div className="px-4 py-5 mb-1 bg-white rounded-lg sm:p-6">
      <dt className="flex items-center text-base font-bold text-gray-900 uppercase">
        <img width="24" height="24" src={tokenImage}></img>
        <span className="ml-1 text-xs font-normal text-gray-400 normal-case">
          {name}
        </span>
      </dt>
      <dd className="flex items-baseline justify-between w-full mt-1 md:block lg:flex">
        <div className="flex items-baseline w-full text-2xl font-semibold text-indigo-600">
          <span className="class">{val}</span>
          <span className="ml-2 text-lg font-bold text-gray-500">{symbol}</span>
          <div className="ml-auto">
            <a href={buttonLink} target="_blank" className={`${visible}`}>
              <div className="inline-flex flex-auto items-baseline rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 md:mt-2 lg:mt-0">
                {buttonText}
              </div>
            </a>
          </div>
        </div>
      </dd>
    </div>
  );
}

function getTokenImage(address: string, t: string) {
  if (t == 'incubator') {
    switch (address) {
      case IncubatorTokenAddressEnum.AndreAnonymous:
        return '/incubators/aa.png';
      case IncubatorTokenAddressEnum.CashBack:
        return '/incubators/cashback.png';
      case IncubatorTokenAddressEnum.CZRetirement:
        return '/incubators/czr.png';
      case IncubatorTokenAddressEnum.FridayNightDegen:
        return '/incubators/fnd.png';
      case IncubatorTokenAddressEnum.Gold:
        return '/incubators/gold.png';
      case IncubatorTokenAddressEnum.MPRINT:
        return '/incubators/multiprint.png';
      case IncubatorTokenAddressEnum.OGTBOND:
        return '/incubators/ogtomb.png';
      case IncubatorTokenAddressEnum.OGTSHARE:
        return '/incubators/ogtshare.png';
      case IncubatorTokenAddressEnum.OGTBOND:
        return '/incubators/ogtbond.png';
      case IncubatorTokenAddressEnum.ReflectorCollector:
        return '/incubators/rc.png';
      case IncubatorTokenAddressEnum.ReflectiveEuro:
        return '/incubators/reuro.png';
      case IncubatorTokenAddressEnum.Silver:
        return '/incubators/silver.png';
      case IncubatorTokenAddressEnum.SalesTax:
        return '/incubators/sales.png';
      case IncubatorTokenAddressEnum.TheMergeTech:
        return '/incubators/merge.png';
      case IncubatorTokenAddressEnum.UnitBias:
        return '/incubators/ub.png';
      case IncubatorTokenAddressEnum.UltraUnitBias:
        return '/incubators/uub.png';
      case IncubatorTokenAddressEnum.GreenLight:
        return '/incubators/green.png';
      case IncubatorTokenAddressEnum.HumanOnlyArt:
        return '/incubators/art.png';
      case IncubatorTokenAddressEnum.MultichainMirror:
        return '/incubators/mirror.png';
      case IncubatorTokenAddressEnum.RMPL:
        return '/incubators/rmpl.png';
      default:
        return '/logos/mcc-black.png';
    }
  } else if (t == 'yieldwolf') {
    return '/logos/yieldwolf.png';
  } else {
    return '/logos/mcc-black.png';
  }
}

function getButtonText(t: string) {
  if (t == 'incubator') {
    return 'TRADE';
  } else if (t == 'yieldwolf') {
    return 'VAULT';
  }
}

function getButtonLink(id: any, address: string, t: string): string {
  if (t == 'incubator') {
    switch (id) {
      case ChainEnum.erc:
        return `https://app.uniswap.org/#/swap?use=V2&inputCurrency=ETH&outputCurrency=${address}`;
      case ChainEnum.bsc:
        return `https://pancakeswap.finance/swap?outputCurrency=${address}`;
      case ChainEnum.ftm:
        return `https://spooky.fi/#/swap?outputCurrency=${address}`;
      default:
        return '#';
    }
  } else if (t == 'yieldwolf') {
    switch (id) {
      case ChainEnum.bsc:
        return '#';
      case ChainEnum.ftm:
        return '#';
      default:
        return '#';
    }
  } else {
    return '#';
  }
}

function getHyperlinkDisplay(t: string) {
  if (t == 'yieldwolf') {
    return 'hide';
  } else {
    return '';
  }
}
