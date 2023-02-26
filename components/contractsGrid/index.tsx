import {
  farmingContracts,
  governanceContracts,
  incubatorContracts,
  lendingContracts,
  mainContracts,
  marketplaceContracts,
  miscellaneousContracts,
  multiprintPrinterPools,
  retiredContracts,
  treasuryContracts,
} from '../../lib/constants';
import { ContractSection } from './contractsSection';

export function ContractsGrid() {
  return (
    <main>
      <div>
        <ContractSection
          header={'Main Contracts & Wallets'}
          contracts={mainContracts}
        />
        <ContractSection
          header={'Treasury & Multisig Vaults'}
          contracts={treasuryContracts}
        />
        <ContractSection
          header={'Incubator Tokens'}
          contracts={incubatorContracts}
        />
        <ContractSection
          header={'Farming Platforms'}
          contracts={farmingContracts}
        />
        <ContractSection
          header={'Multiprint Printer Pools'}
          contracts={multiprintPrinterPools}
        />
        <ContractSection
          header={'Lending Platforms'}
          contracts={lendingContracts}
        />
        <ContractSection
          header={'Marketplace Platform'}
          contracts={marketplaceContracts}
        />
        <ContractSection
          header={'Governance'}
          contracts={governanceContracts}
        />
        <ContractSection
          header={'Retired Contracts'}
          contracts={retiredContracts}
        />
        <ContractSection
          header={'Miscellaneous Contracts'}
          contracts={miscellaneousContracts}
        />
      </div>
    </main>
  );
}
