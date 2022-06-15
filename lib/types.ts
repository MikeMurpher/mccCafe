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
