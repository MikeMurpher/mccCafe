import React from 'react';

export function StickyBanner() {
  return (
    <div className="relative bg-black">
      <div className="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="md:hidden">
              MCC DeFi learning series ✏️ What are ERC20 tokens
            </span>
            <span className="hidden md:inline">
              MCC DeFi learning series ✏️ What are ERC20 tokens
            </span>
            <span className="inline-block ml-2">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://medium.com/@mikemurpher/what-are-erc-20-tokens-868a881c4557"
                className="font-bold text-white underline"
              >
                {' '}
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </span>
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:pt-1 sm:pr-2 sm:items-start">
          {/* Leave in case we want to implement hiding this */}
          <button
            type="button"
            className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
          >
            {/* <span className="sr-only">Dismiss</span>
            <XIcon className="w-6 h-6 text-white" aria-hidden="true" /> */}
          </button>
        </div>
      </div>
    </div>
  );
}
