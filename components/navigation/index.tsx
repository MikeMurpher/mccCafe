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
    nextJsLink: false,
    openInNewPage: true,
    text: 'Twitter',
    href: 'https://twitter.com/MulChainCapital',
  },
  {
    nextJsLink: false,
    openInNewPage: true,
    text: 'Telegram',
    href: 'https://t.me/MultiChainCapital',
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
            <div className="relative flex items-center">
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

              <span className="flex items-center px-3 py-1 ml-3 text-xs font-medium leading-5 rounded-full bg-amber-400/20 text-amber-400">
                <strong className="font-semibold font-kaushan">MCC Cafe</strong>
                <svg
                  width={2}
                  height={2}
                  fill="currentColor"
                  aria-hidden="true"
                  className="hidden ml-2 text-amber-400/70 md:flex"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <span className="hidden ml-2 md:flex">
                  A little pick me up for the Multi Chain Capital Community
                </span>
              </span>
              <div className="relative items-center hidden ml-auto lg:flex">
                <nav className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
                  <ul className="flex space-x-8">
                    {navItems.map((n, i) => (
                      <li key={`${i}-${n.href}`}>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-amber-500 dark:hover:text-amber-400"
                          href={n.href}
                        >
                          {n.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="flex items-center pl-6 ml-6 border-l border-slate-400 ">
                  <MenuToggle toggle={() => toggleOpen()} />
                </div>
              </div>
              <div className="ml-auto -my-1 lg:hidden">
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
