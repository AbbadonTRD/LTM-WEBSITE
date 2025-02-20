'use client';

import { motion } from 'framer-motion';

export const SectionDivider = () => {
  return (
    <div className="relative w-full h-16 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className="flex items-center justify-between w-full"
      >
        <div className="text-white/30 font-mono">+</div>
        <div className="flex-1 mx-4 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="text-white/30 font-mono">+</div>
      </motion.div>
    </div>
  );
};