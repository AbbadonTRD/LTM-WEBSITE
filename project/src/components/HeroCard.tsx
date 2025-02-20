import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HeroCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const HeroCard = ({ children, className = '', delay = 0 }: HeroCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`group relative bg-black/20 backdrop-blur-sm rounded-3xl p-6 
        border border-white/10
        hover:bg-black/30
        transition-all duration-500 
        ${className}`}
    >
      {/* Animated Border Container */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <svg className="absolute inset-0 w-full h-full">
          <rect
            width="100%"
            height="100%"
            rx="24"
            ry="24"
            fill="none"
            stroke="url(#border-gradient)"
            strokeWidth="2"
            strokeDasharray="8 8"
            className="[animation:border-flow_20s_linear_infinite]"
          />
          <defs>
            <linearGradient id="border-gradient" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgb(99 102 241)" />
              <stop offset="33%" stopColor="rgb(168 85 247)" />
              <stop offset="66%" stopColor="rgb(236 72 153)" />
              <stop offset="100%" stopColor="rgb(99 102 241)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 font-arasaka">
        {children}
      </div>
    </motion.div>
  );
};