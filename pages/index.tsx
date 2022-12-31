import { LayoutContainer } from '../components/layout';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const MulitNodeGrid = dynamic(
  () => import('../components/multiNodeGrid').then((mod) => mod.MulitNodeGrid),
  {
    ssr: false,
  }
);

const RewardBalanceStats = dynamic(
  () =>
    import('../components/rewardBalanceStats').then(
      (mod) => mod.RewardBalanceStats
    ),
  {
    ssr: false,
  }
);

export default function HomePage() {
  return (
    <LayoutContainer>
      <NextSeo
        title="MCC Cafe - Explore the MCC ecosystem"
        description="☕ An internet cafe for the Multi Chain Capital community where they explore and interact with the MCC DeFi ecosystem"
        canonical="https://www.mcc.cafe/"
      />
      <div className="mb-8 border-2 rounded-lg border-amber-700 bg-amber-50">
        <div className="px-4 py-3 mx-auto max-w-7xl sm:px-6 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="mt-6 flex flex-col items-center justify-center font-kaushan text-[#a47730] sm:mt-0 sm:flex-row lg:justify-start">
              <span className="">MCC Cafe</span>
              <span className="inline-flex pl-4 pr-1">
                <span className="w-24 h-24">
                  <Image
                    alt="logo"
                    src="/logos/base.png"
                    quality={100}
                    width={96}
                    height={96}
                  />
                </span>
              </span>
              <div className="text-center sm:text-justify">
                your one stop shop to explore the MCC ecosystem
              </div>
            </span>
          </h2>
          <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex w-full">
              <div className="flex flex-col items-center w-full"></div>
            </div>
          </div>
        </div>
      </div>
      <RewardBalanceStats />
      <MulitNodeGrid />
    </LayoutContainer>
  );
}
