import { CustomToaster } from '../components/customToaster';
import * as gtag from '../lib/gtag';
import SEO from '../next-seo.config';
import '../styles/globals.css';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import { createClient, WagmiConfig } from 'wagmi';
import { bsc, fantom, mainnet, polygon } from 'wagmi/chains';

const client = createClient(
  getDefaultClient({
    appName: 'mcccafe',
    infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    chains: [mainnet, polygon, bsc, fantom],
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
