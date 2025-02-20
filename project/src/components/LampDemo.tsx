'use client';

'use client';

import React from "react";
import { motion } from "framer-motion";
import LampContainer from "./ui/lamp";
import { SparklesCore } from "./ui/sparkles";

export function LampDemo() {
  return (
    <LampContainer>
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.5}
        />
      </div>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <span className="bg-gradient-to-r from-[#915EFF] to-purple-400 bg-clip-text text-transparent">
          What we&apos;re working on
        </span>
      </motion.h1>
    </LampContainer>
  );
}