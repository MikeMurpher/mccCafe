export enum ChainEnum {
  erc = 1,
  bsc = 56,
  ftm = 250,
}

export type BlockchainType = ChainEnum.erc | ChainEnum.bsc | ChainEnum.ftm;
