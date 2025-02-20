'use client';

'use client';

import { Palette, Code, Megaphone, Rocket, Laptop, Zap } from 'lucide-react';
import { motion, useAnimationControls, useDragControls } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface RadarPoint {
  id: number;
  title: string;
  angle: number;
  distance: number;
}

const points: RadarPoint[] = [
  { id: 1, title: "Security", angle: 45, distance: 0.6 },
  { id: 2, title: "Analytics", angle: 90, distance: 0.8 },
  { id: 3, title: "Integration", angle: 180, distance: 0.7 },
  { id: 4, title: "Automation", angle: 270, distance: 0.5 },
];

const RadarCard = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [activePoints, setActivePoints] = useState<number[]>([]);
  const scannerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const rotationRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  // Animation constants
  const ROTATION_SPEED = 60; // degrees per second (slower speed)
  const FRAME_RATE = 60;
  const MS_PER_FRAME = 1000 / FRAME_RATE;

  const updateRadar = (timestamp: number) => {
    if (!lastTimeRef.current) {
      lastTimeRef.current = timestamp;
    }

    if (!isHovering) {
      lastTimeRef.current = timestamp;
      return;
    }

    const deltaTime = timestamp - lastTimeRef.current;
    
    if (deltaTime >= MS_PER_FRAME) {
      rotationRef.current = (rotationRef.current + (ROTATION_SPEED * deltaTime) / 1000) % 360;
      
      if (scannerRef.current) {
        scannerRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
        
        // Check for active points
        const activePointIds = points.filter(point => {
          const angleDiff = Math.abs(point.angle - rotationRef.current);
          return angleDiff <= 20 || angleDiff >= 340;
        }).map(p => p.id);
        
        setActivePoints(activePointIds);
      }
      
      lastTimeRef.current = timestamp;
    }
    
    animationRef.current = requestAnimationFrame(updateRadar);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(updateRadar);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]); // Re-run effect when hover state changes

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setActivePoints([]);
  };

  return (
    <div 
      className="relative h-full flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Radar Container */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-64 h-64 relative">
          {/* Radar Background */}
          <div className="absolute inset-0 rounded-full border border-[#915EFF]/20">
            <div className="absolute inset-[25%] rounded-full border border-[#915EFF]/15" />
            <div className="absolute inset-[50%] rounded-full border border-[#915EFF]/10" />
            
            {/* Scanner */}
            <div
              ref={scannerRef}
              className="absolute left-1/2 top-1/2 w-1/2 h-1 origin-left"
              style={{ 
                background: 'linear-gradient(90deg, #915EFF 0%, rgba(145, 94, 255, 0) 100%)',
                boxShadow: '0 0 15px rgba(145, 94, 255, 0.5)',
                opacity: isHovering ? 1 : 0.2,
                transition: 'opacity 0.3s'
              }}
            >
              <div className="absolute right-0 w-2 h-2 rounded-full bg-[#915EFF] transform -translate-y-[2px]" />
            </div>

            {/* Points */}
            {points.map((point) => {
              const radians = (point.angle * Math.PI) / 180;
              const x = Math.cos(radians) * (point.distance * 45) + 50;
              const y = Math.sin(radians) * (point.distance * 45) + 50;
              const isActive = activePoints.includes(point.id);

              return (
                <motion.div
                  key={point.id}
                  className="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  animate={isActive ? {
                    scale: [1, 1.5, 1],
                    transition: { duration: 0.3 }
                  } : { scale: 1 }}
                >
                  <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    isActive ? 'bg-[#915EFF]' : 'bg-[#915EFF]/20'
                  }`} />
                </motion.div>
              );
            })}

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 rounded-full bg-[#915EFF]/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#915EFF]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text content at the bottom */}
      <div className="mt-auto p-4 text-center">
        <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-purple-400">
          System Security
        </h3>
        <p className="text-[#C1C2D3] font-extralight text-sm">
          Advanced threat detection and monitoring
        </p>
      </div>
    </div>
  );
};

export const BentoGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 overflow-hidden">
      <div className="flex flex-row items-start gap-5">
        {/* Vertical Line with Dot */}
        <div className="hidden md:flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" 
            style={{
              background: 'linear-gradient(180deg, #915EFF 0%, rgba(145, 94, 255, 0) 100%)'
            }}
          />
        </div>

        {/* Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-arasaka bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-purple-400"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 mt-4 max-w-xl text-base sm:text-lg"
          >
            Transforming businesses through innovative technology and creative solutions.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
            {[
              {
                icon: <Palette className="w-16 h-16" />,
                title: "Creative Design",
                description: "Stunning visuals that capture your brand's essence and elevate your digital presence. Our expert designers craft beautiful, functional interfaces that engage and delight users.",
                size: "lg:col-span-2"
              },
              {
                icon: <Code className="w-16 h-16" />,
                title: "Web Development",
                description: "Custom solutions built with cutting-edge tech."
              },
              {
                icon: <Megaphone className="w-16 h-16" />,
                title: "Digital Marketing",
                description: "Strategic campaigns that drive growth."
              },
              {
                component: <RadarCard />,
                size: ""
              },
              {
                icon: <Laptop className="w-16 h-16" />,
                title: "App Development",
                description: "Native and cross-platform solutions that deliver exceptional user experiences.",
                size: ""
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl min-h-[320px] ${item.size || ''}`}
                style={{
                  background: "rgb(4,7,29)",
                  backgroundImage: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
                }}
              >
                {/* Animated Border */}
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
                        <stop offset="0%" stopColor="#915EFF" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#915EFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="relative h-full">
                  {item.component ? (
                    item.component
                  ) : (
                    <div className="flex flex-col items-center text-center h-full p-6">
                      <motion.div 
                        className="w-32 h-32 rounded-full bg-[#915EFF]/10 flex items-center justify-center mb-6 relative cursor-grab active:cursor-grabbing"
                        drag
                        dragConstraints={{
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0
                        }}
                        dragElastic={0.1}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                        whileDrag={{ scale: 1.1 }}
                      >
                        <div className="absolute inset-0 rounded-full border-2 border-[#915EFF]/20" />
                        <div className="absolute -inset-2 rounded-full border border-[#915EFF]/10" />
                        <div className="text-[#915EFF] transform group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                      </motion.div>
                      <div className="mt-auto">
                        <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-purple-400">
                          {item.title}
                        </h3>
                        <p className="text-[#C1C2D3] font-extralight text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};