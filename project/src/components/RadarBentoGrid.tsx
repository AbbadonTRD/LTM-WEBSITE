import { motion, useAnimationControls } from 'framer-motion';
import { useState, useRef } from 'react';

interface RadarPoint {
  id: number;
  title: string;
  description: string;
  angle: number;
  distance: number;
}

const points: RadarPoint[] = [
  { id: 1, title: "Security", description: "Advanced encryption & protection", angle: 45, distance: 0.6 },
  { id: 2, title: "Analytics", description: "Real-time data insights", angle: 90, distance: 0.8 },
  { id: 3, title: "Integration", description: "Seamless API connectivity", angle: 180, distance: 0.7 },
  { id: 4, title: "Automation", description: "Smart workflow tools", angle: 270, distance: 0.5 },
  { id: 5, title: "Scaling", description: "Enterprise-ready infrastructure", angle: 315, distance: 0.9 },
];

export const RadarBentoGrid = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [activePoints, setActivePoints] = useState<number[]>([]);
  const scannerControls = useAnimationControls();
  const scannerRef = useRef<HTMLDivElement>(null);

  const handleHoverStart = () => {
    setIsHovering(true);
    scannerControls.start({
      rotate: 360,
      transition: {
        duration: 4,
        ease: "linear",
        repeat: Infinity,
        onUpdate: (latest) => {
          if (scannerRef.current) {
            const rotation = latest as number;
            const activePointIds = points.filter(point => {
              const angleDiff = Math.abs(point.angle - rotation);
              return angleDiff <= 30 || angleDiff >= 330;
            }).map(p => p.id);
            setActivePoints(activePointIds);
          }
        }
      }
    });
  };

  const handleHoverEnd = () => {
    setIsHovering(false);
    scannerControls.stop();
    setActivePoints([]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
      <motion.div
        className="group relative overflow-hidden rounded-3xl lg:col-span-2"
        style={{
          background: "rgb(4,7,29)",
          backgroundImage: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
        }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
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

        {/* Content Container */}
        <div className="relative p-8">
          <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-purple-400">
            System Monitor
          </h3>
          
          {/* Radar Container */}
          <div className="aspect-square w-full max-w-[400px] mx-auto relative">
            {/* Radar Background */}
            <div className="absolute inset-0 rounded-full border border-[#915EFF]/20">
              <div className="absolute inset-[20%] rounded-full border border-[#915EFF]/15" />
              <div className="absolute inset-[40%] rounded-full border border-[#915EFF]/10" />
              
              {/* Radar Grid Lines */}
              <svg className="absolute inset-0 w-full h-full">
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#915EFF" strokeWidth="1" strokeOpacity="0.1" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#915EFF" strokeWidth="1" strokeOpacity="0.1" />
              </svg>

              {/* Radar Scanner */}
              <motion.div
                ref={scannerRef}
                animate={scannerControls}
                initial={{ rotate: 0 }}
                className="absolute left-1/2 top-1/2 w-1/2 h-[2px] origin-left"
                style={{ 
                  background: 'linear-gradient(90deg, #915EFF 0%, rgba(145, 94, 255, 0) 100%)',
                  opacity: isHovering ? 1 : 0,
                  transition: 'opacity 0.3s'
                }}
              >
                <div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-[#915EFF] transform -translate-y-[3px]" />
              </motion.div>

              {/* Radar Points */}
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
                      transition: { duration: 0.5 }
                    } : { scale: 1 }}
                  >
                    <div className="relative">
                      {/* Point */}
                      <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        isActive ? 'bg-[#915EFF]' : 'bg-[#915EFF]/20'
                      }`} />

                      {/* Tooltip */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 bg-black/90 backdrop-blur-sm rounded-lg p-2 border border-[#915EFF]/20"
                        >
                          <p className="text-xs text-[#915EFF] font-bold text-center">{point.title}</p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Center Point */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 rounded-full bg-[#915EFF]/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#915EFF]" />
              </div>
            </div>
          </div>

          <p className="text-[#C1C2D3] font-extralight mt-6 text-center text-sm">
            Hover to activate system scan
          </p>
        </div>
      </motion.div>
    </div>
  );
};