export enum ChainEnum {
  erc = 1,
  bsc = 56,
  ftm = 250,
  offline = -1,
}

export enum ChainNameEnum {
  erc = 'erc',
  bsc = 'bsc',
  ftm = 'ftm',
  offline = 'offline',
}

export type BlockchainType =
  | ChainEnum.erc
  | ChainEnum.bsc
  | ChainEnum.ftm
  | ChainEnum.offline;

export enum WalletEnum {
  metamask,
  coinbase,
  gnosisSafe,
  walletConnect,
}

export type WalletType =
  | WalletEnum.metamask
  | WalletEnum.coinbase
  | WalletEnum.walletConnect
  | WalletEnum.gnosisSafe;

export enum IncubatorTokenAddressEnum {
  AndreAnonymous = '0xb0918b73a7d8d53df8bd0d91d2821478db17da2b',
  CashBack = '0x6a1e94128a5065c6544d23ffa9b4e78b69015611',
  CZRetirement = '0xc5401f6eab46cba5a8151d1132c022a311d9aeae',
  FridayNightDegen = '0x86904a5ce54b397bf8a0041cbb9725980d5d6b7b',
  Gold = '0x7058664c822f4853c0afffc99bdd4eff27f6497b',
  MPRINT = '0xc87cee866ebdfc4f0e07e80157f0f4cbb7ad329e',
  OGTOMB = '0x318315ac34494caaec9028cbb63eff15c7b3b2e4',
  OGTSHARE = '0x754c8232a9ad41cc305e7f7c5f5bc2a86b4b8437',
  OGTBOND = '0x6e3a003042380d559175cdb8d372b6a07ec511b1',
  ReflectorCollector = '0xf6ee08fa550e1cb08c0821a4da8cea57b8909d2e',
  ReflectiveEuro = '0xb9681e6e064f2f36de3e1bc614b83d306fc2d461',
  Silver = '0xddcc5bd7581955c7df2f902423bfe53b47c1f935',
  SalesTax = '0xdd7788db6ff418c71e32e5cbf7205b6c1b2bb07f',
  TheMergeTech = '0x0a533badc3d59014c761674c1962e2d3aaef1035',
  UnitBias = '0x8c5b7f8e055afacdda801fc7bf8f8a1266661080',
  UltraUnitBias = '0xeeed1c46188a9dbe0460968bb036a69145e82273',
  GreenLight = '0xe5c8e7a3be1d6b24b41e4418ba46e31b35b86f0c',
  HumanOnlyArt = '0x52b976bda3bc65b5b36234c29cda1a4f156e8ca4',
  MultichainMirror = '0xfb0a20b546aa5c5cdbc9e2dcbc472282f2dc28c8',
  RMPL = '0x137c1b5974a514965021b9c728a5551b4985dac5',
}

export interface TokenType {
  token_address: string;
  name: string;
  symbol: string;
  logo: string;
  thumbnail: string;
  decimals: number;
  balance: string;
}
