'use client';

import React from "react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { 
  IconArrowLeft, 
  IconBrandTabler, 
  IconSettings, 
  IconUserBolt, 
  IconWorld,
  IconCode,
  IconServer
} from "@tabler/icons-react";
import { Cover } from "./ui/cover";
import { useState } from "react";
import { AnimatedFeatureCard } from "./ui/animated-feature-card";

const links = [
  {
    label: "Dashboard",
    href: "#",
    icon: <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Profile",
    href: "#",
    icon: <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Settings",
    href: "#",
    icon: <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Logout",
    href: "#",
    icon: <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
  },
];

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Track issues effectively",
      description:
        "Track and manage your project issues with ease using our intuitive interface.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-3 border-r border-b border-neutral-800",
    },
    {
      title: "Custom Software Development",
      description:
        "Build scalable, enterprise-grade applications tailored to your business needs with modern tech stack and best practices.",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 border-b border-neutral-800",
    },
    {
      title: "Follow us on Instagram",
      description:
        "Stay connected with our latest IT solutions, tech insights, and company updates on our Instagram page.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 md:col-span-2 border-r border-t border-neutral-800",
    },
    {
      component: <AnimatedFeatureCard />,
      className: "col-span-1 md:col-span-2 border-t border-neutral-800"
    },
  ];

  return (
    <div className="relative z-20 py-8 sm:py-10 lg:py-32 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
          Packed with thousands of <Cover>features</Cover>
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-400 text-center font-normal px-4">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mt-8 sm:mt-12 border border-neutral-800 rounded-xl bg-black/80">
          {features.map((feature, index) => (
            <React.Fragment key={feature.title || `feature-${index}`}>
            {feature.component ? (
              <div className={feature.className}>
                {feature.component}
              </div>
            ) : (
              <FeatureCard className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className="mt-8">{feature.skeleton}</div>
              </FeatureCard>
            )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("p-4 sm:p-6 lg:p-8 relative overflow-hidden", className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <h3 className="text-xl sm:text-2xl font-normal text-white mb-2">
      {children}
    </h3>
  );
};

const FeatureDescription = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <p className={cn(
      "text-neutral-400 text-sm leading-relaxed",
      "max-w-sm"
    )}>
      {children}
    </p>
  );
};

const SkeletonOne = () => {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  return (
    <div className="w-full aspect-[1.4] relative rounded-lg overflow-hidden bg-gray-100 dark:bg-neutral-800">
      <div className="flex h-full">
        {/* Sidebar */}
        <div 
          className={`h-full bg-white dark:bg-neutral-900 transition-all duration-300 ${open ? 'w-[120px]' : 'w-[40px]'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-4">
            <div 
              className="h-3 w-4 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"
            />
          </div>
          <div className="mt-8 px-2">
            {links.map((link, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-[10px] text-neutral-700 dark:text-neutral-200 py-1 px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
              >
                {link.icon}
                <span className={`whitespace-nowrap transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}>
                  {link.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-2">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-20 rounded-lg bg-white dark:bg-neutral-900 animate-pulse"
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 flex-1">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="h-40 rounded-lg bg-white dark:bg-neutral-900 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div className="w-full aspect-[1.2] relative rounded-lg overflow-hidden group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90 flex flex-col items-center justify-center">
        <div className="relative w-40 h-40 group-hover:scale-110 transition-transform duration-500">
          {/* 3D Instagram Icon Container */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 group-hover:animate-pulse">
            <div className="absolute inset-[2px] rounded-xl bg-black flex items-center justify-center">
              {/* Camera Lens */}
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
                <div className="absolute inset-2 rounded-full border-2 border-white/40"></div>
                <div className="absolute inset-4 rounded-full border-2 border-white/60"></div>
                {/* Camera Dot */}
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-white/80"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-2 text-center">
          <span className="text-2xl font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            @ltmedia.ch
          </span>
          <p className="text-sm text-white/60">Follow us for updates</p>
        </div>
      </div>
      <a
        href="https://www.instagram.com/ltmedia.ch/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-20"
      >
        <span className="sr-only">Follow us on Instagram</span>
      </a>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="relative aspect-[0.75] rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 flex items-center justify-center">
        <div className="text-white/60">
          <IconCode className="w-12 h-12 stroke-[0.5px]" />
        </div>
      </div>
      <div className="relative aspect-[0.75] rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4 flex items-center justify-center">
        <div className="text-white/60">
          <IconServer className="w-12 h-12 stroke-[0.5px]" />
        </div>
      </div>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] relative rounded-lg overflow-hidden">
      {/* Background with grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Centered globe with glow */}
      {/* Centered globe with glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full" />
          
          {/* Rotating globe */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="relative"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <IconWorld className="w-16 h-16 text-indigo-400" />
              </div>
            </div>
          </motion.div>

          {/* Connection points */}
          {[...Array(5)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 5;
            const radius = 100;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              >
                <div className="w-full h-full rounded-full bg-indigo-400" />
                <div className="absolute inset-0 -z-10 animate-ping">
                  <div className="w-full h-full rounded-full bg-indigo-400/50" />
                </div>
              </motion.div>
            );
          })}

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(99 102 241 / 0.2)" />
                <stop offset="50%" stopColor="rgb(99 102 241 / 0.5)" />
                <stop offset="100%" stopColor="rgb(99 102 241 / 0.2)" />
              </linearGradient>
            </defs>
            {[...Array(5)].map((_, i) => {
              const angle = (i * Math.PI * 2) / 5;
              const radius = 100;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.path
                  key={i}
                  d={`M 0 0 L ${x} ${y}`}
                  stroke="url(#line-gradient)"
                  strokeWidth="1"
                  fill="none"
                  style={{ transform: 'translate(50%, 50%)' }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};