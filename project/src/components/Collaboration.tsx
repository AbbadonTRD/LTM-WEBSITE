'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { collabApps, collabContent } from '../constants';
import { CTAButton } from './CTAButton';
import { useEffect, useState } from 'react';

const Collaboration = () => {
  const [radius, setRadius] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setRadius(window.innerWidth < 768 ? 150 : 200);
      }
    };

    handleResize();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <section className="container mx-auto px-4 py-8 sm:py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-16">
        {/* Left Content */}
        <div className="w-full max-w-full lg:max-w-[32rem] py-4 lg:py-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-arasaka mb-8 lg:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 leading-tight">
            AI Chat App for seamless collaboration
          </h2>

          <ul className="mb-8 sm:mb-12 space-y-4 sm:space-y-8">
            {collabContent.map((item) => (
              <li key={item.id} className="pl-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mr-4">
                    <Check className="w-4 h-4 text-indigo-400" />
                  </div>
                  <h6 className="text-xl font-arasaka text-white">{item.title}</h6>
                </div>
              </li>
            ))}
          </ul>

          <CTAButton>Try it now</CTAButton>
        </div>

        {/* Right Content - Circle Container */}
        <div className="w-full lg:flex-1 xl:w-[40rem] mt-6 sm:mt-10 lg:mt-0">
          <div className="relative w-full max-w-[18rem] sm:max-w-[24rem] lg:max-w-[32rem] aspect-square mx-auto">
            {/* Orbit path */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 border border-white/10 rounded-full" />
            </div>

            {/* Center logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-[5rem] h-[5rem] sm:w-[6rem] sm:h-[6rem] rounded-full p-[0.2rem]" 
                style={{
                  background: 'linear-gradient(180deg, rgba(99,102,241,1) 0%, rgba(168,85,247,1) 50%, rgba(236,72,153,1) 100%)'
                }}>
                <div className="flex items-center justify-center w-full h-full bg-black rounded-full">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
                </div>
              </div>
            </div>

            {/* Rotating container */}
            <motion.div 
              className="absolute inset-0"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {collabApps.map((app, idx) => {
                const angle = (idx * 360) / collabApps.length;
                return ( 
                  <motion.div
                    key={app.id}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                    }}
                  >
                    <div 
                      className="w-[2.8rem] h-[2.8rem] sm:w-[3.2rem] sm:h-[3.2rem] lg:w-[3.8rem] lg:h-[3.8rem] 
                               -translate-x-1/2 -translate-y-1/2
                               bg-black/80 border border-white/10 rounded-xl backdrop-blur-sm 
                               flex items-center justify-center transform hover:scale-110 transition-transform duration-200"
                    >
                      <img
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                        width={app.width}
                        height={app.height}
                        alt={app.title}
                        src={app.icon}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Collaboration }