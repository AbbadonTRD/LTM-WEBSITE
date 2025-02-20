'use client';

import { motion } from 'framer-motion';

export const GradientBackground = () => {
  return (
    <motion.div
      className="absolute inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Dark navy background */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgb(3, 7, 18)' }} />
    </motion.div>
  );
};