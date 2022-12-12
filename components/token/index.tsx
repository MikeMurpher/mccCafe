import Image from 'next/image';
import { useWeb3 } from '../../lib/hooks/useWeb3';
import {
  ChainEnum,
  IncubatorTokenAddressEnum,
  TokenType,
  YieldWolfToken,
  YieldWolfTokenAddressEnum,
} from '../../lib/types';
import { abbreviateNumber } from '../../lib/utils/formatNumbers';

export function TokenView(props: TokenType & { type: string }) {
  const { token_address, balance, symbol, type, name, decimals } = props;
  const { chainId } = useWeb3();

  const val = abbreviateNumber(balance, 2);
  const tokenImage = getTokenImage(token_address, type);
  const buttonText = getButtonText(type);
  const buttonLink = getButtonLink(chainId, token_address, type);
  const visible = getHyperlinkDisplay(type);

  const addTokenToMM = async () => {
    try {
      const { ethereum } = window as any;
      await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: token_address, // The address that the token is at.
            symbol: symbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: decimals, // The number of decimals in the token
            image: 'https://www.mcc.cafe' + getTokenImage(token_address,type), // A string url of the token logo
          },
        },
      })
    } catch (ex) {
      console.error(ex);
    }
  }

  return (
    <div className="px-4 py-5 mb-1 bg-white rounded-lg sm:p-6">
      <dt className="flex items-center text-base font-bold text-gray-900 uppercase">
        <Image
          alt={`${tokenImage} alt`}
          width="24"
          height="24"
          src={tokenImage}
        />
        <span className="ml-1 text-xs font-normal text-gray-400 normal-case">
          {name}
        </span>
        <button onClick={addTokenToMM} className="ml-auto text-xs font-bold text-gray-500 rounded-full border border-gray-200 px-2.5 py-0.5">
          Add {symbol} To MetaMask
        </button>
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
      case IncubatorTokenAddressEnum.OGTOMB:
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
        return '/incubators/slvr.png';
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
      case IncubatorTokenAddressEnum.OGKOLLECTIVE:
        return '/incubators/ogkollective.png';
        case IncubatorTokenAddressEnum.BLACKHOLE:
        return '/incubators/blackhole.png';
      case IncubatorTokenAddressEnum.MCC:
        return '/logos/mcc-black.png';
      default:
        return '/logos/mcc-black.png';
    }
  } else if (t == 'yieldwolf') {
    switch (address) {
      case YieldWolfTokenAddressEnum.WFTM_MPRINT:
        return YieldWolfToken.WFTM_MPRINT.image;
      case YieldWolfTokenAddressEnum.MPRINT_miMATIC:
        return YieldWolfToken.MPRINT_miMATIC.image;
      case YieldWolfTokenAddressEnum.MPRINTonMPRINTFTM:
        return YieldWolfToken.MPRINTonMPRINTFTM.image;
      case YieldWolfTokenAddressEnum.RConMPRINTFTM:
        return YieldWolfToken.RConMPRINTFTM.image;
      case YieldWolfTokenAddressEnum.WFTM_OGTSHAREonRC:
        return YieldWolfToken.WFTM_OGTSHAREonRC.image;
      case YieldWolfTokenAddressEnum.miMATIC:
        return YieldWolfToken.miMATIC.image;
      case YieldWolfTokenAddressEnum.WFTM_OGTOMBonRC:
        return YieldWolfToken.WFTM_OGTOMBonRC.image;
      case YieldWolfTokenAddressEnum.WFTM:
        return YieldWolfToken.WFTM.image;
      case YieldWolfTokenAddressEnum.BEETS:
        return YieldWolfToken.BEETS.image;
      case YieldWolfTokenAddressEnum.BOO:
        return YieldWolfToken.BOO.image;
      case YieldWolfTokenAddressEnum.ETHonMPRINTFTM:
        return YieldWolfToken.ETHonMPRINTFTM.image;
      case YieldWolfTokenAddressEnum.WFTM_miMATIC:
        return YieldWolfToken.WFTM_miMATIC.image;
      case YieldWolfTokenAddressEnum.SPIRIT:
        return YieldWolfToken.SPIRIT.image;
      case YieldWolfTokenAddressEnum.TOMB:
        return YieldWolfToken.TOMB.image;
      case YieldWolfTokenAddressEnum.OGTSHARE:
        return YieldWolfToken.OGTSHARE.image;
      case YieldWolfTokenAddressEnum.WFTM_RC:
        return YieldWolfToken.WFTM_RC.image;
      case YieldWolfTokenAddressEnum.DAI_RC:
        return YieldWolfToken.DAI_RC.image;
      case YieldWolfTokenAddressEnum.MPRINTonRCFTM:
        return YieldWolfToken.MPRINTonRCFTM.image;
      case YieldWolfTokenAddressEnum.WFTM_DAI:
        return YieldWolfToken.WFTM_DAI.image;
      case YieldWolfTokenAddressEnum.RConRCFTM:
        return YieldWolfToken.RConRCFTM.image;
      case YieldWolfTokenAddressEnum.SLVR:
        return YieldWolfToken.SLVR.image;
      case YieldWolfTokenAddressEnum.DAI_MCC:
        return YieldWolfToken.DAI_MCC.image;
      case YieldWolfTokenAddressEnum.OGTOMB:
        return YieldWolfToken.OGTOMB.image;
      case YieldWolfTokenAddressEnum.MPRINT_BUSD:
        return YieldWolfToken.MPRINT_BUSD.image;
      case YieldWolfTokenAddressEnum.WBNB_MPRINT:
        return YieldWolfToken.WBNB_MPRINT.image;
      case YieldWolfTokenAddressEnum.ETHonMPRINTBSC:
        return YieldWolfToken.ETHonMPRINTBSC.image;
      case YieldWolfTokenAddressEnum.WBNB_BUSDonMPRINTBSC:
        return YieldWolfToken.WBNB_BUSDonMPRINTBSC.image;
      case YieldWolfTokenAddressEnum.UB_WBNB:
        return YieldWolfToken.UB_WBNB.image;
      case YieldWolfTokenAddressEnum.BTCB:
        return YieldWolfToken.BTCB.image;
      case YieldWolfTokenAddressEnum.CASH_WBNB:
        return YieldWolfToken.CASH_WBNB.image;
      case YieldWolfTokenAddressEnum.MCC_BUSDonMPRINTBSC:
        return YieldWolfToken.MCC_BUSDonMPRINTBSC.image;
      case YieldWolfTokenAddressEnum.WBNB:
        return YieldWolfToken.WBNB.image;
      case YieldWolfTokenAddressEnum.BUSD:
        return YieldWolfToken.BUSD.image;
      case YieldWolfTokenAddressEnum.MPRINTonMPRINTBSC:
        return YieldWolfToken.MPRINTonMPRINTBSC.image;
      case YieldWolfTokenAddressEnum.CAKE:
        return YieldWolfToken.CAKE.image;
      case YieldWolfTokenAddressEnum.CAKE_WBNB:
        return YieldWolfToken.CAKE_WBNB.image;
      case YieldWolfTokenAddressEnum.RConMPRINTBSC:
        return YieldWolfToken.RConMPRINTBSC.image;
      case YieldWolfTokenAddressEnum.WBNB_BUSDonRCBSC:
        return YieldWolfToken.WBNB_BUSDonRCBSC.image;
      case YieldWolfTokenAddressEnum.BUSD_RC:
        return YieldWolfToken.BUSD_RC.image;
      case YieldWolfTokenAddressEnum.WBNB_RC:
        return YieldWolfToken.WBNB_RC.image;
      case YieldWolfTokenAddressEnum.MCC_BUSDonRCBSC:
        return YieldWolfToken.MCC_BUSDonRCBSC.image;
      case YieldWolfTokenAddressEnum.RConRCBSC:
        return YieldWolfToken.RConRCBSC.image;
      case YieldWolfTokenAddressEnum.MPRINTonRCBSC:
        return YieldWolfToken.MPRINTonRCBSC.image;
      case YieldWolfTokenAddressEnum.WFTM_OGTSHARE:
        return YieldWolfToken.WFTM_OGTSHARE.image;
      case YieldWolfTokenAddressEnum.WFTM_OGTOMB:
        return YieldWolfToken.WFTM_OGTOMB.image;
      default:
        return '/logos/yieldwolf.png';
    }
  } else {
    return '/logos/mcc-black.png';
  }
}

function getButtonText(t: string) {
  if (t == 'incubator') {
    return 'TRADE';
  } else if (t == 'yieldwolf') {
    return 'VIEW VAULT';
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
    switch (address) {
      case YieldWolfTokenAddressEnum.WFTM_MPRINT:
        return YieldWolfToken.WFTM_MPRINT.url;
      case YieldWolfTokenAddressEnum.MPRINT_miMATIC:
        return YieldWolfToken.MPRINT_miMATIC.url;
      case YieldWolfTokenAddressEnum.MPRINTonMPRINTFTM:
        return YieldWolfToken.MPRINTonMPRINTFTM.url;
      case YieldWolfTokenAddressEnum.RConMPRINTFTM:
        return YieldWolfToken.RConMPRINTFTM.url;
      case YieldWolfTokenAddressEnum.WFTM_OGTSHAREonRC:
        return YieldWolfToken.WFTM_OGTSHAREonRC.url;
      case YieldWolfTokenAddressEnum.miMATIC:
        return YieldWolfToken.miMATIC.url;
      case YieldWolfTokenAddressEnum.WFTM_OGTOMBonRC:
        return YieldWolfToken.WFTM_OGTOMBonRC.url;
      case YieldWolfTokenAddressEnum.WFTM:
        return YieldWolfToken.WFTM.url;
      case YieldWolfTokenAddressEnum.BEETS:
        return YieldWolfToken.BEETS.url;
      case YieldWolfTokenAddressEnum.BOO:
        return YieldWolfToken.BOO.url;
      case YieldWolfTokenAddressEnum.ETHonMPRINTFTM:
        return YieldWolfToken.ETHonMPRINTFTM.url;
      case YieldWolfTokenAddressEnum.WFTM_miMATIC:
        return YieldWolfToken.WFTM_miMATIC.url;
      case YieldWolfTokenAddressEnum.SPIRIT:
        return YieldWolfToken.SPIRIT.url;
      case YieldWolfTokenAddressEnum.TOMB:
        return YieldWolfToken.TOMB.url;
      case YieldWolfTokenAddressEnum.OGTSHARE:
        return YieldWolfToken.OGTSHARE.url;
      case YieldWolfTokenAddressEnum.WFTM_RC:
        return YieldWolfToken.WFTM_RC.url;
      case YieldWolfTokenAddressEnum.DAI_RC:
        return YieldWolfToken.DAI_RC.url;
      case YieldWolfTokenAddressEnum.MPRINTonRCFTM:
        return YieldWolfToken.MPRINTonRCFTM.url;
      case YieldWolfTokenAddressEnum.WFTM_DAI:
        return YieldWolfToken.WFTM_DAI.url;
      case YieldWolfTokenAddressEnum.RConRCFTM:
        return YieldWolfToken.RConRCFTM.url;
      case YieldWolfTokenAddressEnum.SLVR:
        return YieldWolfToken.SLVR.url;
      case YieldWolfTokenAddressEnum.DAI_MCC:
        return YieldWolfToken.DAI_MCC.url;
      case YieldWolfTokenAddressEnum.OGTOMB:
        return YieldWolfToken.OGTOMB.url;
      case YieldWolfTokenAddressEnum.MPRINT_BUSD:
        return YieldWolfToken.MPRINT_BUSD.url;
      case YieldWolfTokenAddressEnum.WBNB_MPRINT:
        return YieldWolfToken.WBNB_MPRINT.url;
      case YieldWolfTokenAddressEnum.ETHonMPRINTBSC:
        return YieldWolfToken.ETHonMPRINTBSC.url;
      case YieldWolfTokenAddressEnum.WBNB_BUSDonMPRINTBSC:
        return YieldWolfToken.WBNB_BUSDonMPRINTBSC.url;
      case YieldWolfTokenAddressEnum.UB_WBNB:
        return YieldWolfToken.UB_WBNB.url;
      case YieldWolfTokenAddressEnum.BTCB:
        return YieldWolfToken.BTCB.url;
      case YieldWolfTokenAddressEnum.CASH_WBNB:
        return YieldWolfToken.CASH_WBNB.url;
      case YieldWolfTokenAddressEnum.MCC_BUSDonMPRINTBSC:
        return YieldWolfToken.MCC_BUSDonMPRINTBSC.url;
      case YieldWolfTokenAddressEnum.WBNB:
        return YieldWolfToken.WBNB.url;
      case YieldWolfTokenAddressEnum.BUSD:
        return YieldWolfToken.BUSD.url;
      case YieldWolfTokenAddressEnum.MPRINTonMPRINTBSC:
        return YieldWolfToken.MPRINTonMPRINTBSC.url;
      case YieldWolfTokenAddressEnum.CAKE:
        return YieldWolfToken.CAKE.url;
      case YieldWolfTokenAddressEnum.CAKE_WBNB:
        return YieldWolfToken.CAKE_WBNB.url;
      case YieldWolfTokenAddressEnum.RConMPRINTBSC:
        return YieldWolfToken.RConMPRINTBSC.url;
      case YieldWolfTokenAddressEnum.WBNB_BUSDonRCBSC:
        return YieldWolfToken.WBNB_BUSDonRCBSC.url;
      case YieldWolfTokenAddressEnum.BUSD_RC:
        return YieldWolfToken.BUSD_RC.url;
      case YieldWolfTokenAddressEnum.WBNB_RC:
        return YieldWolfToken.WBNB_RC.url;
      case YieldWolfTokenAddressEnum.MCC_BUSDonRCBSC:
        return YieldWolfToken.MCC_BUSDonRCBSC.url;
      case YieldWolfTokenAddressEnum.RConRCBSC:
        return YieldWolfToken.RConRCBSC.url;
      case YieldWolfTokenAddressEnum.MPRINTonRCBSC:
        return YieldWolfToken.MPRINTonRCBSC.url;
      case YieldWolfTokenAddressEnum.WFTM_OGTSHARE:
        return YieldWolfToken.WFTM_OGTSHARE.url;
      case YieldWolfTokenAddressEnum.WFTM_OGTOMB:
        return YieldWolfToken.WFTM_OGTOMB.url;
      default:
        return '#';
    }
  } else {
    return '#';
  }
}

function getHyperlinkDisplay(t: string) {
  if (t == 'yieldwolf') {
    return '';
  } else {
    return '';
  }
}
