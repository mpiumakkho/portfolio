import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import LangIcon from './LangIcon';

const RotatingLangIcon = ({ langs = [], size = 88 }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!langs || langs.length <= 1) return; // no rotation needed
    const id = setInterval(() => {
      setIdx((prev) => (prev + 1) % langs.length);
    }, 5000);
    return () => clearInterval(id);
  }, [langs]);

  const current = langs && langs.length ? langs[idx] : undefined;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={current}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <LangIcon name={current} size={size} />
      </motion.div>
    </AnimatePresence>
  );
};

export default RotatingLangIcon; 