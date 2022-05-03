import { Web3Account } from '../components/account';
import { LayoutContainer } from '../components/layout';
import { MulitNodeGrid } from '../components/multiNodeGrid';
import { NextSeo } from 'next-seo';
import Image from 'next/image';

export default function HomePage() {
  return (
    <LayoutContainer>
      <NextSeo
        title="MCC Cafe - For MCC Community"
        description="☕ An internet cafe for the Multi Chain Capital community where they can come for a quick pick me up ☕"
        canonical="https://www.mcc.cafe/"
      />
      <div className="mb-8 border-2 rounded-lg border-amber-700 bg-amber-50">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block bg-gradient-to-br from-gray-800 via-gray-600 to-[#a47730] bg-clip-text pb-0.5 text-center font-black text-transparent">
              Need help claiming MCC Node Rewards?
            </span>
            <span className="mt-6 flex flex-col items-center font-kaushan text-[#a47730] sm:mt-0 sm:flex-row">
              <span className="whitespace-nowrap">MCC Cafe</span>
              <span className="inline-flex pl-4 pr-1">
                <span className="w-24 h-24">
                  <Image
                    alt="logo"
                    src="/logos/base.png"
                    quality={100}
                    width={96}
                    height={96}
                    objectFit="contain"
                    layout="responsive"
                  />
                </span>
              </span>
              <div className="">has got you covered</div>
            </span>
          </h2>
          <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex w-full">
              <div className="flex flex-col items-center w-full">
                <Web3Account />
              </div>
            </div>
          </div>
        </div>
      </div>

      <MulitNodeGrid />
    </LayoutContainer>
  );
}
