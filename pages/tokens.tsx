import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { LayoutContainer } from '../components/layout';
import { Tokens} from '../components/tokens';
import { RewardBalanceStats } from '../components/rewardBalanceStats';

export default function TokensPage() {
  return (
    <LayoutContainer>
      <NextSeo
        title="MCC Cafe - For MCC Community"
        description="☕ An internet cafe for the Multi Chain Capital community where they can come for a quick pick me up ☕"
        canonical="https://www.mcc.cafe/"
      />

      <Tokens />
    </LayoutContainer>
  );
}