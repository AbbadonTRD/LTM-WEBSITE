'use client';

import { motion } from "framer-motion";
import { TypeWriter } from "./TypeWriter";
import { CTAButton } from "./CTAButton";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-[#0A0A0A]">
      {/* Background with animated gradient and grid */}
      <div className="absolute inset-0 z-0 opacity-80">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-x" />
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Gradient overlays for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] flex flex-col justify-center">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-xl text-left mb-24 sm:mb-0"
          >
            {/* Decorative element */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="h-1 bg-gradient-to-r from-indigo-500 to-transparent mb-8"
            />

            <div className="text-4xl lg:text-5xl mb-8">
              <TypeWriter />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-base sm:text-lg md:text-xl font-arasaka text-gray-300/90 mb-8 max-w-xl"
            >
              Start your project with seamless collaboration. Our platform streamlines your digital workflow, enhances productivity, and scales with your business needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <Link href="/contact">
                <CTAButton>
                  Start your project
                </CTAButton>
              </Link>
              <Link 
                href="/about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Learn More →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-0 left-0 right-0 pb-8 sm:pb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-12 bg-gradient-to-b from-indigo-500 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
}