import { MenuItem } from './MenuItem';
import { motion } from 'framer-motion';
import * as React from 'react';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul className="z-20 nav-ul" variants={variants}>
    {itemIds.map((i, index) => (
      <MenuItem item={i} index={index} key={index} />
    ))}
  </motion.ul>
);

const itemIds = [
  {
    nextJsLink: false,
    openInNewPage: true,
    text: `Telegram`,
    href: 'https://t.me/MccIncubationZone',
    img: ``,
  },
  {
    nextJsLink: true,
    openInNewPage: false,
    text: `Disclaimer`,
    href: '#disclaimer',
    img: ``,
  },
  {
    nextJsLink: false,
    openInNewPage: true,
    text: `GitHub`,
    href: 'https://github.com/cryptod00c/mccCafe',
    img: ``,
  },
  {
    nextJsLink: false,
    openInNewPage: true,
    text: `DexTools`,
    href: 'https://www.dextools.io/app/ether/pair-explorer/0x9c2b19dbdfad3f283c0b96c5546d91a275778d91',
    img: ``,
  },
];
