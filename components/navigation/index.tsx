import { Web3Account } from '../account';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
import { useDimensions } from './use-dimensions';
import { motion, useCycle } from 'framer-motion';
import Image from 'next/image';
import * as React from 'react';
import { useRef } from 'react';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(1px at 32px 30px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const navItems = [
  {
    nextJsLink: true,
    openInNewPage: false,
    text: 'Disclaimer',
    href: '#disclaimer',
  },
  {
    nextJsLink: false,
    openInNewPage: true,
    text: 'Twitter',
    href: 'https://twitter.com/mccincubations',
  },
  {
    nextJsLink: false,
    openInNewPage: true,
    text: 'Telegram',
    href: 'https://t.me/MccIncubationZone',
  },
  {
    nextJsLink: false,
    openInNewPage: true,
    text: 'Medium',
    href: 'https://multichaincapital.medium.com/',
  },
];

export function NavContainer() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className=""
    >
      <div className="lg:border- sticky top-0 z-40 w-full flex-none bg-transparent  transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50">
        <div className="mx-auto max-w-8xl">
          <div className="px-4 py-4 border-b border-slate-900/10 dark:border-slate-300/10 lg:border-0">
            <div className="relative flex items-center justify-center">
              <a href="#" className="w-12 h-12">
                <span className="sr-only">MCC Cafe Logo</span>
                <Image
                  alt="logo"
                  src="/logos/base.png"
                  quality={100}
                  width={96}
                  height={96}
                  objectFit="contain"
                  layout="responsive"
                />
              </a>

              <span className="items-center hidden px-3 py-1 mx-3 overflow-hidden text-xs font-medium leading-5 rounded-full sm:flex bg-amber-400/20 text-amber-400">
                <strong className="font-semibold font-kaushan whitespace-nowrap">
                  MCC Cafe
                </strong>
                <svg
                  width={2}
                  height={2}
                  fill="currentColor"
                  aria-hidden="true"
                  className="hidden ml-2 text-amber-400/70 md:flex"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <span className="hidden ml-2 md:flex whitespace-nowrap">
                  A little pick me up for the MCC Community
                </span>
              </span>

              <div className="relative items-center hidden ml-auto lg:flex">
                <nav className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
                  <ul className="flex space-x-8">
                    {navItems.map((n, i) => (
                      <li key={`${i}-${n.href}`}>
                        <a
                          href={n.href}
                          rel={n?.openInNewPage ? 'noopener noreferrer' : ''}
                          target={n?.openInNewPage ? '_blank' : ''}
                          className="hover:text-amber-500 dark:hover:text-amber-400"
                        >
                          {n.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="ml-4">
                  <Web3Account id="desktop" />
                </div>
                <div className="flex items-center pl-6 ml-6 border-l border-slate-400 ">
                  <MenuToggle toggle={() => toggleOpen()} />
                </div>
              </div>
              <div className="flex items-center justify-center ml-auto lg:hidden">
                <div className="mr-2 sm:mr-4">
                  <Web3Account id="mobile" />
                </div>
                <MenuToggle toggle={() => toggleOpen()} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div className="z-10 background-nav" variants={sidebar} />
      <Navigation />
    </motion.nav>
  );
}
