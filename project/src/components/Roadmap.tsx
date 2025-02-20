'use client';

import { motion } from 'framer-motion';
import { CTAButton } from './CTAButton';
import { Check, Loader2 } from 'lucide-react';
import { 
  IconBuildingSkyscraper,
  IconUsersGroup,
  IconCode,
  IconDeviceAnalytics
} from '@tabler/icons-react';
import { useRef } from 'react';

const roadmap = [
  {
    id: 1,
    date: "APRIL 2023",
    status: "done",
    title: "Company Foundation",
    text: "Leading Technologies - Media was founded with a clear vision: to help businesses grow through innovative digital solutions. Our mission was to bridge the gap between traditional business practices and modern digital transformation.",
    icon: <IconBuildingSkyscraper className="w-12 h-12 stroke-[0.5px]" />,
    color: "from-blue-500/20 to-cyan-500/20",
    colorful: true,
    size: "large"
  },
  {
    id: 2,
    date: "JULY 2023",
    status: "done",
    title: "First Client Projects",
    text: "Successfully launched our first client projects focusing on website development and SEO optimization. This marked the beginning of our journey in helping businesses establish strong digital presences and improve their online visibility.",
    icon: <IconUsersGroup className="w-12 h-12 stroke-[0.5px]" />,
    color: "from-purple-500/20 to-pink-500/20",
    colorful: true,
    size: "medium"
  },
  {
    id: 3,
    date: "SEPTEMBER 2023",
    status: "done",
    title: "Software Development Initiation",
    text: "Began the conceptual phase of our software development journey. Created initial sketches and prototypes while experiencing steady growth in our client base. This period marked our expansion into more comprehensive digital solutions.",
    icon: <IconCode className="w-12 h-12 stroke-[0.5px]" />,
    color: "from-emerald-500/20 to-teal-500/20",
    colorful: false,
    size: "large"
  },
  {
    id: 4,
    date: "OCTOBER 2024",
    status: "in-progress",
    title: "Full-Service Digital Solutions",
    text: "Evolved into a comprehensive digital service provider, focusing on both custom software development and complete online presence management for our clients. This strategic shift represents our commitment to delivering end-to-end digital transformation solutions.",
    icon: <IconDeviceAnalytics className="w-12 h-12 stroke-[0.5px]" />,
    color: "from-indigo-500/20 to-violet-500/20",
    colorful: true,
    size: "medium"
  }
];

const Roadmap = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="container mx-auto px-4 -mt-16 lg:-mt-24">
      {/* Roadmap Grid */}
      <div ref={containerRef} className="grid gap-8 md:gap-12">
        {roadmap.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              scale: 1
            }}
            viewport={{ 
              once: false,
              margin: "-20px"
            }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
            className={`
              relative
              ${index % 2 === 0 ? 'md:ml-0 md:mr-[40%]' : 'md:ml-[40%] md:mr-0'}
              ${item.size === 'large' ? 'lg:mx-[15%]' : ''}
            `}
          >
            <div className={`
              relative rounded-[2.5rem] overflow-hidden
              ${item.colorful ? 'bg-gradient-to-br from-[#915EFF]/20 to-purple-500/20' : 'bg-white/5'}
              backdrop-blur-xl
              p-1
              transform-gpu
            `}>
              <div className="relative bg-black/40 rounded-[2.3rem] overflow-hidden">
                {/* Card Header */}
                <div className="flex items-center justify-between p-3 sm:p-4 lg:p-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                      {item.date}
                    </span>
                    <div className={`
                      flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium
                      ${item.status === 'done' 
                        ? 'bg-green-500/20 text-green-400' 
                        : item.status === 'in-progress'
                        ? 'bg-[#915EFF]/20 text-[#915EFF]'
                        : 'bg-gray-500/20 text-gray-400'
                      }
                    `}>
                      {item.status === 'done' ? (
                        <Check className="w-3 h-3" />
                      ) : (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      )}
                      <span className="uppercase tracking-wider">
                        {item.status === 'done' ? 'Done' : 'In Progress'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 lg:p-6 pt-0">
                  {/* Content */}
                  <div className="order-2 md:order-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 lg:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-purple-400">
                      {item.title}
                    </h3>
                    <motion.p 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5,
                        delay: (index * 0.2) + 0.3
                      }}
                      className="text-gray-400/80 text-sm sm:text-base leading-relaxed"
                    >
                      {item.text}
                    </motion.p>
                  </div>

                  {/* Image */}
                  <div className="order-1 md:order-2">
                    <motion.div 
                      className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br border border-white/10 backdrop-blur-sm p-6 flex items-center justify-center"
                      style={{
                        backgroundImage: `linear-gradient(to bottom right, ${item.color.split(' ')[0]}, ${item.color.split(' ')[1]})`
                      }}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        duration: 0.6,
                        delay: (index * 0.2) + 0.2,
                        ease: "easeOut"
                      }}
                    >
                      <motion.div 
                        className="text-white/60 transform"
                        whileHover={{ scale: 1.1, opacity: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.icon}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Line */}
            {index !== roadmap.length - 1 && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: 24, opacity: 1 }}
                transition={{ duration: 0.5, delay: (index * 0.2) + 0.4 }}
                className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full w-px bg-gradient-to-b from-[#915EFF] to-transparent"
              />
            )}
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export { Roadmap };