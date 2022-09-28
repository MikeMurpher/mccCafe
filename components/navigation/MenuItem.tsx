import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['#000000','#241f20', '#3a2f2f', '#53312f', '#9d581f', '#eab676'];

export const MenuItem = ({ item, index }: any) => {
  const style = { background: `${colors[index]}` };
  return (
    <motion.li
      className="nav-li"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={item.href}
        rel={item?.openInNewPage ? 'noopener noreferrer' : ''}
        target={item?.openInNewPage ? '_blank' : ''}
        className="flex items-center w-full"
      >
        <div className="w-8 h-8 pr-8 mr-4 rounded-full" style={style} />
        <div
          className="flex justify-center w-full p-1 text-white rounded-lg"
          style={style}
        >
          {item?.text}
        </div>
      </a>
    </motion.li>
  );
};
