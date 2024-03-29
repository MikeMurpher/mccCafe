export enum ChainEnum {
  erc = 1,
  bsc = 56,
  polygon = 137,
  ftm = 250,
  optimism = 10,
  arbitrum = 42161,
  offline = -1,
}

export enum ChainNameEnum {
  erc = 'erc',
  bsc = 'bsc',
  ftm = 'ftm',
  polygon = 'polygon',
  offline = 'offline',
}

export type BlockchainType =
  | ChainEnum.erc
  | ChainEnum.bsc
  | ChainEnum.ftm
  | ChainEnum.polygon
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
  ABC = '0xebde95c46e429ecd284d04bffcfd9b4cb9861dfc',
  AndreAnonymous = '0xb0918b73a7d8d53df8bd0d91d2821478db17da2b',
  CashBack = '0x6a1e94128a5065c6544d23ffa9b4e78b69015611',
  CZRetirement = '0xc5401f6eab46cba5a8151d1132c022a311d9aeae',
  FridayNightDegen = '0x86904a5ce54b397bf8a0041cbb9725980d5d6b7b',
  Gold = '0x7058664c822f4853c0afffc99bdd4eff27f6497b',
  MCC = '0xc146b7cdbaff065090077151d391f4c96aa09e0c',
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
  OGKOLLECTIVE = '0x3b9c214a501b2ae33ab1793b57b09879a754f2ef',
  BLACKHOLE = '0x1d84e6f3c03c869b951d017a852f8464174b3ff4',
  JustTest = '0xacacab474461877b90e6fdca44a2f8d1b5941baf',
}

export enum YieldWolfTokenAddressEnum {
  WFTM_MPRINT = '0xb14053d223a86160ca740181b92b8c18e36bbe31',
  MPRINT_miMATIC = '0x6f5b4e2c56359637f62a9450d6fd045cb64c12d0',
  MPRINTonMPRINTFTM = '0x4aadf4295ff31190227aae5c2ce576979bc44749',
  RConMPRINTFTM = '0x09358cadee4ebbdf60f058a35e746bc97599f5e4',
  WFTM_OGTSHAREonRC = '0x536b65d1a0093fa3b95b6c6c0d224cf5db6b1886',
  miMATIC = '0xc2ce3a82cb9956ba692faecf0507ef0ef2e7083d',
  WFTM_OGTOMBonRC = '0x431ff02827b8a6a905a85cfad1d1b370f433774a',
  WFTM = '0x1e5d2ceb06085ec5873dfb612b50f827f23dd96e',
  BEETS = '0xfb0b05a5a8120c1c230bcb545bedf545e5079bc8',
  BOO = '0xcff8554467968103ab79b9c30b3c146982d739b4',
  ETHonMPRINTFTM = '0x0355e14146f41f04d415829f576df859fcc91be7',
  WFTM_miMATIC = '0xb9161acccea23152b59c9e5b783920bdbadc5e7f',
  SPIRIT = '0x448138c6e8305f2bf57e575dbd96d4df64a64f5e',
  TOMB = '0xb5a0a0ea0844ba0a3e926698eff4532c52f50428',
  OGTSHARE = '0xcfc28092b01828b6a27d116e0b60e4c61b6bcf1b',
  WFTM_RC = '0xc582147bbadbc226ed11dbfb3edf52db270f358e',
  DAI_RC = '0x50671af25ff98024733ff1df3b7385ef31660965',
  MPRINTonRCFTM = '0xb4778aefe7decb894ba1b530c6e3fa96c72dca48',
  WFTM_DAI = '0x7De7e705d6609e4965b095cc45B8d406B7870FfA',
  RConRCFTM = '0x9536c38844e939c8aeb7281ee3e2419582ee52c0',
  SLVR = '0x8eeb1a97e3752a63016104b439b207e113b6101f',
  DAI_MCC = '0x692916c52784fa7287a8ff1d38a363ee18b2fd07',
  OGTOMB = '0xbf3f7c3b966d291ddafe63b00cfad5ee3143cb43',
  MPRINT_BUSD = '0x1be3e98f8db2008e91b0b8c86e8432a262c00465',
  WBNB_MPRINT = '0xacfbd8bb4518c1e3e2bc2bc6b77a52b3edd4adb8',
  ETHonMPRINTBSC = '0xc46bc54a2e9eeaf3b0a383f968312299f5414169',
  WBNB_BUSDonMPRINTBSC = '0xa37126ced2fcf246e98654ab49ae213a939b1001',
  UB_WBNB = '0xbcc5489069161a18123335fdc553be861ee6becf',
  BTCB = '0x5c8080172ac1641a04f9e8413a1caea6180f3361',
  CASH_WBNB = '0xe759f2dafdb5acadffd3bb5a8b1d632dc8f12ca3',
  MCC_BUSDonMPRINTBSC = '0xe968d86a78caeffe6faf1cb448d494a62f7fb57f',
  WBNB = '0x4f6b97446e13e4f57538cd6da6887f033dc8d1db',
  BUSD = '0x00f729ea6a396a044ec085582ad0045f7085d1e6',
  MPRINTonMPRINTBSC = '0x66b8a898439559d6dc7637a4e167ef405ac4ed9c',
  CAKE = '0xe5582822bf445c94625750f10d3ded4d6ffe01fb',
  CAKE_WBNB = '0xcff489e60c8a8717e5dc4758b6213b0975c57ff4',
  RConMPRINTBSC = '0x84e3dea32143cec90410a24895a71d140b95e11e',
  WBNB_BUSDonRCBSC = '0x6365f1e4dafd997aaed68e522e1fd7ac8976b68d',
  BUSD_RC = '0x1a8fdeaa388cfbcc236b9dedf5f90c9ab1c54482',
  WBNB_RC = '0x078b027ce78efc26e447c7fe77df5559d56610e8',
  MCC_BUSDonRCBSC = '0x39f128eeee1df9de4bfc454b0eb6d11d5b784f23',
  RConRCBSC = '0x024cf9fe5814ba25326cf26ecb8ba1c39a0f1567',
  MPRINTonRCBSC = '0x6c986fe085938fb3bdaf686cf79de1fd272e620b',
  WFTM_OGTSHARE = '0x2866f047bf37fd830ee69938fec85c978b7e58c3',
  WFTM_OGTOMB = '0xf4c170d0cb1366226ac3dee618e02573c4e75c6c',
}

export const YieldWolfToken = {
  WFTM_MPRINT: {
    network: 'FTM',
    platform: 'Multiprint',
    address: '0xb14053d223a86160ca740181b92b8c18e36bbe31',
    url: 'https://yieldwolf.finance/fantom/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-40',
    image: '/logos/wftmmprint.png',
  },
  MPRINT_miMATIC: {
    network: 'FTM',
    platform: 'Multiprint',
    address: '0x6f5b4e2c56359637f62a9450d6fd045cb64c12d0',
    url: 'https://yieldwolf.finance/fantom/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-44',
    image: '/logos/mprintmimatic.png',
  },
  MPRINTonMPRINTFTM: {
    network: 'FTM',
    platform: 'Multiprint',
    address: '0x4aadf4295ff31190227aae5c2ce576979bc44749',
    url: 'https://yieldwolf.finance/fantom/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-39',
    image: '/incubators/multiprint.png',
  },
  RConMPRINTFTM: {
    network: 'FTM',
    platform: 'Multiprint',
    address: '0x09358cadee4ebbdf60f058a35e746bc97599f5e4',
    url: 'https://yieldwolf.finance/fantom/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-148',
    image: '/incubators/rc.png',
  },
  WFTM_OGTSHAREonRC: {
    network: 'FTM',
    platform: 'Multiprint',
    address: '0x536b65d1a0093fa3b95b6c6c0d224cf5db6b1886',
    url: 'https://yieldwolf.finance/fantom/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-38',
    image: '/logos/wftmogtshare.png',
  },
  miMATIC: {
    network: 'FTM',
    platform: 'Multiprint',
    address: '0xc2ce3a82cb9956ba692faecf0507ef0ef2e7083d',
    url: 'https://yieldwolf.finance/fantom/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-51',
    image: '/logos/mimatic.png',
  },
  WFTM_OGTOMBonRC: {
    network: 'FTM',
    platform: 'Multiprint',
    address: '0x431ff02827b8a6a905a85cfad1d1b370f433774a',
    url: 'https://yieldwolf.finance/fantom/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-42',
    image: '/logos/wftmogtomb.png',
  },
  WFTM: {
    network: 'FTM',
    platform: 'Multiprint',
    address: '0x1e5d2ceb06085ec5873dfb612b50f827f23dd96e',
    url: 'https://yieldwolf.finance/fantom/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-45',
    image: '/logos/ftm.png',
  },
  BEETS: {
    network: 'FTM',
    platform: 'Multiprint',
    address: '0xfb0b05a5a8120c1c230bcb545bedf545e5079bc8',
    url: 'https://yieldwolf.finance/fantom/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-41',
    image: '/logos/beets.png',
  },
  BOO: {
    network: 'FTM',
    platform: 'Multiprint',
    address: '0xcff8554467968103ab79b9c30b3c146982d739b4',
    url: 'https://yieldwolf.finance/fantom/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-50',
    image: '/logos/boo.png',
  },
  ETHonMPRINTFTM: {
    network: 'FTM',
    platform: 'Multiprint',
    address: '0x0355e14146f41f04d415829f576df859fcc91be7',
    url: 'https://yieldwolf.finance/fantom/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-46',
    image: '/logos/eth.png',
  },
  WFTM_miMATIC: {
    network: 'FTM',
    platform: 'Multiprint',
    address: '0xb9161acccea23152b59c9e5b783920bdbadc5e7f',
    url: 'https://yieldwolf.finance/fantom/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-49',
    image: '/logos/wftmmimatic.png',
  },
  SPIRIT: {
    network: 'FTM',
    platform: 'Multiprint',
    address: '0x448138c6e8305f2bf57e575dbd96d4df64a64f5e',
    url: 'https://yieldwolf.finance/fantom/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-47',
    image: '/logos/spirit.png',
  },
  TOMB: {
    network: 'FTM',
    platform: 'Multiprint',
    address: '0xb5a0a0ea0844ba0a3e926698eff4532c52f50428',
    url: 'https://yieldwolf.finance/fantom/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-48',
    image: '/logos/tomb.png',
  },
  OGTSHARE: {
    network: 'FTM',
    platform: 'ReflectorCollector',
    address: '0xcfc28092b01828b6a27d116e0b60e4c61b6bcf1b',
    url: 'https://yieldwolf.finance/fantom/0x796a21b01b13696164bcF6BD733cFE36890c54CB/v2-129',
    image: '/incubators/ogtshare.png',
  },
  WFTM_RC: {
    network: 'FTM',
    platform: 'ReflectorCollector',
    address: '0xc582147bbadbc226ed11dbfb3edf52db270f358e',
    url: 'https://yieldwolf.finance/fantom/0x796a21b01b13696164bcF6BD733cFE36890c54CB/v2-125',
    image: '/logos/wftmrc.png',
  },
  DAI_RC: {
    network: 'FTM',
    platform: 'ReflectorCollector',
    address: '0x50671af25ff98024733ff1df3b7385ef31660965',
    url: 'https://yieldwolf.finance/fantom/0x796a21b01b13696164bcF6BD733cFE36890c54CB/v2-122',
    image: '/logos/dairc.png',
  },
  MPRINTonRCFTM: {
    network: 'FTM',
    platform: 'ReflectorCollector',
    address: '0xb4778aefe7decb894ba1b530c6e3fa96c72dca48',
    url: 'https://yieldwolf.finance/fantom/0x796a21b01b13696164bcF6BD733cFE36890c54CB/v2-126',
    image: '/incubators/multiprint.png',
  },
  WFTM_DAI: {
    network: 'FTM',
    platform: 'ReflectorCollector',
    address: '0x7De7e705d6609e4965b095cc45B8d406B7870FfA',
    url: 'https://yieldwolf.finance/fantom/0x796a21b01b13696164bcF6BD733cFE36890c54CB/v2-124',
    image: '/logos/wftmdai.png',
  },
  RConRCFTM: {
    network: 'FTM',
    platform: 'ReflectorCollector',
    address: '0x9536c38844e939c8aeb7281ee3e2419582ee52c0',
    url: 'https://yieldwolf.finance/fantom/0x796a21b01b13696164bcF6BD733cFE36890c54CB/v2-127',
    image: '/incubators/rc.png',
  },
  SLVR: {
    network: 'FTM',
    platform: 'ReflectorCollector',
    address: '0x8eeb1a97e3752a63016104b439b207e113b6101f',
    url: 'https://yieldwolf.finance/fantom/0x796a21b01b13696164bcF6BD733cFE36890c54CB/v2-191',
    image: '/incubators/slvr.png',
  },
  DAI_MCC: {
    network: 'FTM',
    platform: 'ReflectorCollector',
    address: '0x692916c52784fa7287a8ff1d38a363ee18b2fd07',
    url: 'https://yieldwolf.finance/fantom/0x796a21b01b13696164bcF6BD733cFE36890c54CB/v2-128',
    image: '/logos/daimcc.png',
  },
  OGTOMB: {
    network: 'FTM',
    platform: 'ReflectorCollector',
    address: '0xbf3f7c3b966d291ddafe63b00cfad5ee3143cb43',
    url: 'https://yieldwolf.finance/fantom/0x796a21b01b13696164bcF6BD733cFE36890c54CB/v2-130',
    image: '/incubators/ogtomb.png',
  },
  MPRINT_BUSD: {
    network: 'BSC',
    platform: 'Multiprint',
    address: '0x1be3e98f8db2008e91b0b8c86e8432a262c00465',
    url: 'https://yieldwolf.finance/bsc/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-20',
    image: '/logos/mprintbusd.png',
  },
  WBNB_MPRINT: {
    network: 'BSC',
    platform: 'Multiprint',
    address: '0xacfbd8bb4518c1e3e2bc2bc6b77a52b3edd4adb8',
    url: 'https://yieldwolf.finance/bsc/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-19',
    image: '/logos/wbnbmprint.png',
  },
  ETHonMPRINTBSC: {
    network: 'BSC',
    platform: 'Multiprint',
    address: '0xc46bc54a2e9eeaf3b0a383f968312299f5414169',
    url: 'https://yieldwolf.finance/bsc/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-30',
    image: '/logos/eth.png',
  },
  WBNB_BUSDonMPRINTBSC: {
    network: 'BSC',
    platform: 'Multiprint',
    address: '0xa37126ced2fcf246e98654ab49ae213a939b1001',
    url: 'https://yieldwolf.finance/bsc/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-22',
    image: '/logos/wbnbbusd.png',
  },
  UB_WBNB: {
    network: 'BSC',
    platform: 'Multiprint',
    address: '0xbcc5489069161a18123335fdc553be861ee6becf',
    url: 'https://yieldwolf.finance/bsc/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-26',
    image: '/logos/ubwbnb.png',
  },
  BTCB: {
    network: 'BSC',
    platform: 'Multiprint',
    address: '0x5c8080172ac1641a04f9e8413a1caea6180f3361',
    url: 'https://yieldwolf.finance/bsc/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-27',
    image: '/logos/btc.png',
  },
  CASH_WBNB: {
    network: 'BSC',
    platform: 'Multiprint',
    address: '0xe759f2dafdb5acadffd3bb5a8b1d632dc8f12ca3',
    url: 'https://yieldwolf.finance/bsc/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-23',
    image: '/logos/cashwbnb.png',
  },
  MCC_BUSDonMPRINTBSC: {
    network: 'BSC',
    platform: 'Multiprint',
    address: '0xe968d86a78caeffe6faf1cb448d494a62f7fb57f',
    url: 'https://yieldwolf.finance/bsc/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-38',
    image: '/logos/mccbusd.png',
  },
  WBNB: {
    network: 'BSC',
    platform: 'Multiprint',
    address: '0x4f6b97446e13e4f57538cd6da6887f033dc8d1db',
    url: 'https://yieldwolf.finance/bsc/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-28',
    image: '/logos/bnb.png',
  },
  BUSD: {
    network: 'BSC',
    platform: 'Multiprint',
    address: '0x00f729ea6a396a044ec085582ad0045f7085d1e6',
    url: 'https://yieldwolf.finance/bsc/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-25',
    image: '/logos/busd.png',
  },
  MPRINTonMPRINTBSC: {
    network: 'BSC',
    platform: 'Multiprint',
    address: '0x66b8a898439559d6dc7637a4e167ef405ac4ed9c',
    url: 'https://yieldwolf.finance/bsc/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-18',
    image: '/incubators/multiprint.png',
  },
  CAKE: {
    network: 'BSC',
    platform: 'Multiprint',
    address: '0xe5582822bf445c94625750f10d3ded4d6ffe01fb',
    url: 'https://yieldwolf.finance/bsc/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-29',
    image: '/logos/cake.png',
  },
  CAKE_WBNB: {
    network: 'BSC',
    platform: 'Multiprint',
    address: '0xcff489e60c8a8717e5dc4758b6213b0975c57ff4',
    url: 'https://yieldwolf.finance/bsc/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-24',
    image: '/logos/cakewbnb.png',
  },
  RConMPRINTBSC: {
    network: 'BSC',
    platform: 'Multiprint',
    address: '0x84e3dea32143cec90410a24895a71d140b95e11e',
    url: 'https://yieldwolf.finance/bsc/0x3Cf9f83047be6f6c74E9Bf40372DbdEb43c2F92C/v2-60',
    image: '/incubators/rc.png',
  },
  WBNB_BUSDonRCBSC: {
    network: 'BSC',
    platform: 'ReflectorCollector',
    address: '0x6365f1e4dafd997aaed68e522e1fd7ac8976b68d',
    url: 'https://yieldwolf.finance/bsc/0x796a21b01b13696164bcF6BD733cFE36890c54CB/v2-57',
    image: '/logos/wbnbbusd.png',
  },
  BUSD_RC: {
    network: 'BSC',
    platform: 'ReflectorCollector',
    address: '0x1a8fdeaa388cfbcc236b9dedf5f90c9ab1c54482',
    url: 'https://yieldwolf.finance/bsc/0x796a21b01b13696164bcF6BD733cFE36890c54CB/v2-56',
    image: '/logos/busdrc.png',
  },
  WBNB_RC: {
    network: 'BSC',
    platform: 'ReflectorCollector',
    address: '0x078b027ce78efc26e447c7fe77df5559d56610e8',
    url: 'https://yieldwolf.finance/bsc/0x796a21b01b13696164bcF6BD733cFE36890c54CB/v2-55',
    image: '/logos/wbnbrc.png',
  },
  MCC_BUSDonRCBSC: {
    network: 'BSC',
    platform: 'ReflectorCollector',
    address: '0x39f128eeee1df9de4bfc454b0eb6d11d5b784f23',
    url: 'https://yieldwolf.finance/bsc/0x796a21b01b13696164bcF6BD733cFE36890c54CB/v2-54',
    image: '/logos/mccbusd.png',
  },
  RConRCBSC: {
    network: 'BSC',
    platform: 'ReflectorCollector',
    address: '0x024cf9fe5814ba25326cf26ecb8ba1c39a0f1567',
    url: 'https://yieldwolf.finance/bsc/0x796a21b01b13696164bcF6BD733cFE36890c54CB/v2-49',
    image: '/incubators/rc.png',
  },
  MPRINTonRCBSC: {
    network: 'BSC',
    platform: 'ReflectorCollector',
    address: '0x6c986fe085938fb3bdaf686cf79de1fd272e620b',
    url: 'https://yieldwolf.finance/bsc/0x796a21b01b13696164bcF6BD733cFE36890c54CB/v2-50',
    image: '/incubators/multiprint.png',
  },
  WFTM_OGTSHARE: {
    network: 'FTM',
    platform: 'ReflectorCollector',
    address: '0x2866f047bf37fd830ee69938fec85c978b7e58c3',
    url: 'https://yieldwolf.finance/fantom/0x2F0c82F3381E1E2Df9a2EE3d76C51F163DF5111C/v2-37',
    image: '/logos/wftmogtshare.png',
  },
  WFTM_OGTOMB: {
    network: 'FTM',
    platform: 'ReflectorCollector',
    address: '0xf4c170d0cb1366226ac3dee618e02573c4e75c6c',
    url: 'https://yieldwolf.finance/fantom/0x2F0c82F3381E1E2Df9a2EE3d76C51F163DF5111C/v2-36',
    image: '/logos/wftmogtomb.png',
  },
};

export interface TokenType {
  token_address: string;
  name: string;
  symbol: string;
  logo: string;
  thumbnail: string;
  decimals: number;
  balance: string;
}

export interface FarmingRewardType {
  name: string;
  symbol: string;
  decimals: number;
  farmcontract: string;
  fetchcontract: string;
  contractfunction: string;
}

export type Optional<T> = T | undefined;
