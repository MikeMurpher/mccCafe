import { motion, Variants } from 'framer-motion';

const navigation = {
  main: [
    { name: 'Website', href: 'https://incubations.mchain.capital' },
    { name: 'Telegram', href: 'https://t.me/MCCofficialtg' },
    { name: 'Twitter', href: 'https://twitter.com/multichaincap' },
    { name: 'CZR Finance', href: 'https://czr.finance' },
    { name: 'Github', href: 'https://github.com/cryptod00c/mccCafe' },
  ],
};

const officialNavigation = {
  main: [
    { name: 'Website', href: 'https://mchain.capital/' },
    { name: 'Twitter', href: 'https://twitter.com/MulChainCapital' },
    { name: 'Medium', href: 'https://multichaincapital.medium.com/' },
    { name: 'Github', href: 'https://github.com/mchaindev' },
  ],
};

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
    },
  },
};

export function Footer() {
  return (
    <motion.footer
      initial="offscreen"
      whileInView="onscreen"
      className="relative"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8"
        variants={cardVariants}
      >
        <p className="mt-8 text-center text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Presented By
        </p>
        <p className="text-lg text-center text-gray-200 font-kaushan">
          Multi-Chain Capital Community
        </p>
        <nav
          className="flex flex-wrap justify-center -mx-5 -my-2"
          aria-label="Footer Incubation Link"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.href}
                className="text-sm tracking-wide text-amber-400 hover:text-amber-200"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <p className="mt-8 text-center text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Official Links
        </p>
        <p className="text-lg font-black text-center text-gray-200">
          Multi-Chain Capital
        </p>
        <nav
          className="flex flex-wrap justify-center -mx-5 -my-2"
          aria-label="Footer Official Links"
        >
          {officialNavigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.href}
                className="text-sm tracking-wide text-amber-400 hover:text-amber-200"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div
          id="disclaimer"
          className="flex flex-col items-center justify-center mt-6 text-xs text-gray-300"
        >
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Disclaimer
          </div>
          <div className="max-w-xl text-center text-amber-400">
            Crypto products are unregulated and can be highly risky. As such,
            MCC.Cafe makes no representations, warranties, or assurances as to
            the security, currency or accuracy of the features contained on this
            website or any sites linked to or from this website.
          </div>
        </div>
        <div
          id="of-note"
          className="flex flex-col items-center justify-center mt-6 text-xs text-gray-300"
        >
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Of Note
          </div>
          <div className="max-w-xl text-center text-amber-400">
            The MCC Cafe & MCC Official Community does not condone any violence,
            threats or defamatory comments made towards any members of our
            community which includes Mr. Capital. Any such member participating
            in this behavior in the MCC Official Community channels or in any
            other public channels will not be permitted to participate in our
            community.
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-6 text-xs text-gray-300">
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Git Commit Hash
          </div>
          <div className="text-amber-400">
            {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
