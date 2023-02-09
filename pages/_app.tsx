import { CustomToaster } from '../components/customToaster';
import * as gtag from '../lib/gtag';
import SEO from '../next-seo.config';
import '../styles/globals.css';
import { alchemyProvider } from '@wagmi/core/providers/alchemy';
import { infuraProvider } from '@wagmi/core/providers/infura';
import { publicProvider } from '@wagmi/core/providers/public';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { bsc, fantom, mainnet, polygon } from 'wagmi/chains';

const { chains, provider } = configureChains(
  [mainnet, polygon, bsc, fantom],
  [
    alchemyProvider({
      apiKey: `${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
      priority: 1,
      stallTimeout: 1_000,
    }),
    infuraProvider({
      apiKey: `${process.env.NEXT_PUBLIC_INFURA_ID}`,
      priority: 2,
      stallTimeout: 1_000,
    }),
    publicProvider({
      priority: 3,
    }),
  ]
);

const client = createClient(
  getDefaultClient({
    appName: 'mcccafe',
    provider,
    chains,
  })
);

export default function App({
  Component,
  pageProps,
}: AppProps & { err: Error }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="retro">
        <DefaultSeo {...SEO} />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <Component {...pageProps} />
        <CustomToaster />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
