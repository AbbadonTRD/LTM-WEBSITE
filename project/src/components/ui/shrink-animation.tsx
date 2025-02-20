'use client';

import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ShrinkAnimationProps {
  children: React.ReactNode;
  className?: string;
  onAnimationComplete?: () => void;
}

export const ShrinkAnimation = ({ 
  children, 
  className,
  onAnimationComplete 
}: ShrinkAnimationProps) => {
  // Generate random offset between -30 and 30 pixels for stronger shaking
  const getRandomOffset = () => (Math.random() * 60 - 30);

  return (
    <motion.div
      whileHover={{
        scale: 0.5, // Changed to 50% of original size to match screenshot
        x: Array.from({ length: 10 }, getRandomOffset),
        y: Array.from({ length: 10 }, getRandomOffset),
        transition: {
          duration: 1.5,
          scale: {
            type: "spring",
            damping: 10,
            stiffness: 100
          },
          x: {
            type: "keyframes",
            duration: 0.15, // Faster shaking
            repeat: 7,
            repeatType: "mirror"
          },
          y: {
            type: "keyframes",
            duration: 0.15, // Faster shaking
            repeat: 7,
            repeatType: "mirror"
          }
        }
      }}
      className={cn(
        "origin-center transition-all duration-300 hover:z-50", // Added z-index for better visibility
        className
      )}
    >
      {children}
    </motion.div>
  );
};