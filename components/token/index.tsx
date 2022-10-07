
import { abbreviateNumber } from '../../lib/utils/formatNumbers';
import { generateChainNameIdentifier } from '../../lib/utils/chainFormatters';
import { ChainEnum } from '../../lib/types';
import { useWeb3 } from '../../lib/hooks/useWeb3';

interface tokenType {
  currency: any
  value: string
  type: string
}

function checkTokenType(address: string, symbol: string, t: string) {
  if (t == "incubator") {
    switch (address) {
      /*Andre Anonymous*/
      case "0xb0918b73a7d8d53df8bd0d91d2821478db17da2b": return true;
      /*Cash Back*/
      case "0x6a1e94128a5065c6544d23ffa9b4e78b69015611": return true;
      /*CZ Retirement*/
      case "0xc5401f6eab46cba5a8151d1132c022a311d9aeae": return true;
      /*Friday Night Degen*/
      case "0x86904a5ce54b397bf8a0041cbb9725980d5d6b7b": return true;
      /*Gold*/
      case "0x7058664c822f4853c0afffc99bdd4eff27f6497b": return true;
      /*MPRINT*/
      case "0xc87cee866ebdfc4f0e07e80157f0f4cbb7ad329e": return true;
      /*OG-TOMB*/
      case "0x318315ac34494caaec9028cbb63eff15c7b3b2e4": return true;
      /*OG-TSHARE*/
      case "0x754c8232a9ad41cc305e7f7c5f5bc2a86b4b8437": return true;
      /*OG-TBOND*/
      case "0x6e3a003042380d559175cdb8d372b6a07ec511b1": return true;
      /*ReflectorCollector*/
      case "0xf6ee08fa550e1cb08c0821a4da8cea57b8909d2e": return true;
      /*Reflective Euro*/
      case "0xb9681e6e064f2f36de3e1bc614b83d306fc2d461": return true;
      /*Silver*/
      case "0xddcc5bd7581955c7df2f902423bfe53b47c1f935": return true;
      /*Sales Tax*/
      case "0xdd7788db6ff418c71e32e5cbf7205b6c1b2bb07f": return true;
      /*The Merge Tech*/
      case "0x0a533badc3d59014c761674c1962e2d3aaef1035": return true;
      /*Unit Bias*/
      case "0x8c5b7f8e055afacdda801fc7bf8f8a1266661080": return true;
      /*Ultra Unit Bias*/
      case "0xeeed1c46188a9dbe0460968bb036a69145e82273": return true;
      /*Green light*/
      case "0xe5c8e7a3be1d6b24b41e4418ba46e31b35b86f0c": return true;
      /*Human Only Art*/
      case "0x52b976bda3bc65b5b36234c29cda1a4f156e8ca4": return true;
      /*Multichain Mirror*/
      case "0xfb0a20b546aa5c5cdbc9e2dcbc472282f2dc28c8": return true;
      /*RMPL*/
      case "0x137c1b5974a514965021b9c728a5551b4985dac5": return true;
      default: return false;
    }
  }
  else if (t == "yieldwolf") {
    if (symbol.startsWith("YW")) {
      return true
    } else { return false; }
  } else { return false; }
}

function getTokenImage(address: string, t: string) {
  if (t == "incubator") {
    switch (address) {
      /*Andre Anonymous*/
      case "0xb0918b73a7d8d53df8bd0d91d2821478db17da2b": return "/incubators/aa.png";
      /*Cash Back*/
      case "0x6a1e94128a5065c6544d23ffa9b4e78b69015611": return "/incubators/cashback.png";
      /*CZ Retirement*/
      case "0xc5401f6eab46cba5a8151d1132c022a311d9aeae": return "/incubators/czr.png";
      /*Friday Night Degen*/
      case "0x86904a5ce54b397bf8a0041cbb9725980d5d6b7b": return "/incubators/fnd.png";
      /*Gold*/
      case "0x7058664c822f4853c0afffc99bdd4eff27f6497b": return "/incubators/gold.png";
      /*MPRINT*/
      case "0xc87cee866ebdfc4f0e07e80157f0f4cbb7ad329e": return "/incubators/multiprint.png";
      /*OG-TOMB*/
      case "0x318315ac34494caaec9028cbb63eff15c7b3b2e4": return "/incubators/ogtomb.png";
      /*OG-TSHARE*/
      case "0x754c8232a9ad41cc305e7f7c5f5bc2a86b4b8437": return "/incubators/ogtshare.png";
      /*OG-TBOND*/
      case "0x6e3a003042380d559175cdb8d372b6a07ec511b1": return "/incubators/ogtbond.png";
      /*ReflectorCollector*/
      case "0xf6ee08fa550e1cb08c0821a4da8cea57b8909d2e": return "/incubators/rc.png";
      /*Reflective Euro*/
      case "0xb9681e6e064f2f36de3e1bc614b83d306fc2d461": return "/incubators/reuro.png";
      /*Silver*/
      case "0xddcc5bd7581955c7df2f902423bfe53b47c1f935": return "/incubators/silver.png";
      /*Sales Tax*/
      case "0xdd7788db6ff418c71e32e5cbf7205b6c1b2bb07f": return "/incubators/sales.png";
      /*The Merge Tech*/
      case "0x0a533badc3d59014c761674c1962e2d3aaef1035": return "/incubators/merge.png";
      /*Unit Bias*/
      case "0x8c5b7f8e055afacdda801fc7bf8f8a1266661080": return "/incubators/ub.png";
      /*Ultra Unit Bias*/
      case "0xeeed1c46188a9dbe0460968bb036a69145e82273": return "/incubators/uub.png";
      /*Green light*/
      case "0xe5c8e7a3be1d6b24b41e4418ba46e31b35b86f0c": return "/incubators/green.png";
      /*Human Only Art*/
      case "0x52b976bda3bc65b5b36234c29cda1a4f156e8ca4": return "/incubators/art.png";
      /*Multichain Mirror*/
      case "0xfb0a20b546aa5c5cdbc9e2dcbc472282f2dc28c8": return "/incubators/mirror.png";
      /*RMPL*/
      case "0x137c1b5974a514965021b9c728a5551b4985dac5": return "/incubators/rmpl.png";
      default: return "/logos/mcc-black.png";
    }
  }
  else if (t == "yieldwolf") {
    return "/logos/yieldwolf.png"
  } else { return "/logos/mcc-black.png"; }
}

function getButtonText(t: string) {
  if (t == "incubator") {
    return "TRADE";
  }
  else if (t == "yieldwolf") {
    return "VAULT"
  }
}

function getButtonLink(id: any, address: string, t: string): string {
  if (t == "incubator") {
    switch (id) {
      case ChainEnum.erc: return `https://app.uniswap.org/#/swap?use=V2&inputCurrency=ETH&outputCurrency=${address}`;
      case ChainEnum.bsc: return `https://pancakeswap.finance/swap?outputCurrency=${address}`;
      case ChainEnum.ftm: return `https://spooky.fi/#/swap?outputCurrency=${address}`;
      default: return "#";
    }
  }
  else if (t=="yieldwolf"){
    switch (id) {
      case ChainEnum.bsc: return "#";
      case ChainEnum.ftm: return "#";
      default: return "#";
    }
  }
  else{return "#";}
}

function getHyperlinkDisplay(t:string){
  if (t=="yieldwolf"){
    return "hide";
  }else {return "";}
}

export default function Token(n: tokenType) {
  const { currency, value, type } = n
  const { chainId } = useWeb3();
  console.log(currency.symbol);
  const val = abbreviateNumber(value, 4);
  const tokenImage = getTokenImage(currency.address, type);
  const buttonText = getButtonText(type);
  const buttonLink = getButtonLink(chainId, currency.address, type);
  const visible = getHyperlinkDisplay(type);

  if (checkTokenType(currency.address, currency.symbol, type)) {

    if (parseFloat(value) > 0) {
      return (
        <div className="px-4 py-5 sm:p-6 mb-1 bg-white rounded-lg">
          <dt className="flex items-center text-base font-bold text-gray-900 uppercase">
            <img width="24" height="24" src={tokenImage}></img>
            <span className="ml-1 text-xs font-normal text-gray-400 normal-case">{currency.name}</span>
          </dt>
          <dd className="flex items-baseline justify-between w-full mt-1 md:block lg:flex">
            <div className="flex items-baseline w-full text-2xl font-semibold text-indigo-600">
              <span className="class">{val}</span>
              <span className="ml-2 text-lg font-bold text-gray-500">{currency.symbol}</span>
              <div className="ml-auto">
                <a href={buttonLink} target="_blank" className={`${visible}`}>
                  <div className="inline-flex flex-auto items-baseline rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 md:mt-2 lg:mt-0">{buttonText}</div>
                </a>
              </div>
            </div>
          </dd>
        </div>
      );
    }
    return (<></>);
  }
  return (<></>);
}