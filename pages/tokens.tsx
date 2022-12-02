import { NextSeo } from 'next-seo';
import { LayoutContainer } from '../components/layout';
import { Tokens } from '../components/tokens';

export default function TokensPage() {
  return (
    <LayoutContainer>
      <NextSeo
        title="MCC Cafe - Tokens"
        description="☕ An internet cafe for the Multi Chain Capital community where they can come for a quick pick me up ☕"
        canonical="https://www.mcc.cafe/"
      />

      <Tokens />
    </LayoutContainer>
  );
}
