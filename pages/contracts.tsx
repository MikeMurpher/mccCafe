import { ContractsGrid } from '../components/contractsGrid';
import { LayoutContainer } from '../components/layout';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

const RewardBalanceStats = dynamic(
  () =>
    import('../components/rewardBalanceStats').then(
      (mod) => mod.RewardBalanceStats
    ),
  {
    ssr: false,
  }
);

export default function ContractsPage() {
  return (
    <LayoutContainer>
      <NextSeo
        title="MCC Cafe - Contracts"
        description="☕ An internet cafe for the Multi Chain Capital community where they explore and interact with the MCC DeFi ecosystem"
        canonical="https://www.mcc.cafe/"
      />

      <ContractsGrid />
      <RewardBalanceStats />
    </LayoutContainer>
  );
}
