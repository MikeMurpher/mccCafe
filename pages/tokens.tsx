import { LayoutContainer } from '../components/layout';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

const Tokens = dynamic(
  () => import('../components/tokens').then((mod) => mod.Tokens),
  {
    ssr: false,
  }
);

export default function TokensPage() {
  return (
    <LayoutContainer>
      <NextSeo
        title="MCC Cafe - Tokens"
        description="☕ An internet cafe for the Multi Chain Capital community where they explore and interact with the MCC DeFi ecosystem"
        canonical="https://www.mcc.cafe/"
      />

      <Tokens />
    </LayoutContainer>
  );
}
