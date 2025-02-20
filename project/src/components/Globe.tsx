import { useEffect, useRef, useState } from 'react';

export const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });
  const globeInstance = useRef<any>(null);
  const animationFrame = useRef<number>();
  const phi = useRef<number>(0);

  useEffect(() => {
    let mounted = true;

    const updateDimensions = () => {
      const container = canvasRef.current?.parentElement;
      if (!container) return;
      
      const containerSize = Math.min(container.clientWidth, container.clientHeight);
      const size = Math.min(containerSize, 600); // Max size of 600px
      
      setDimensions({
        width: size,
        height: size
      });
      
      if (globeInstance.current) {
        globeInstance.current.resize(size, size);
      }
    };

    const createGlobeInstance = async () => {
      if (!canvasRef.current || !mounted) return;

      try {
        const cobe = (await import('cobe')).default;
        globeInstance.current = cobe(canvasRef.current, {
          devicePixelRatio: 2,
          width: dimensions.width,
          height: dimensions.height,
          phi: 0,
          theta: 0.3,
          dark: 1,
          diffuse: 1.2,
          mapSamples: 16000,
          mapBrightness: 6,
          baseColor: [0.1, 0.1, 0.1],
          markerColor: [0.9, 0.9, 0.9],
          glowColor: [1, 1, 1],
          markers: [
            { location: [37.7595, -122.4367], size: 0.05 },
            { location: [40.7128, -74.006], size: 0.05 },
            { location: [51.5074, -0.1278], size: 0.05 },
          ],
          rotationSpeed: 0.01,
          onRender: (state: any) => {
            state.phi = phi.current;
            phi.current += 0.01;
            animationFrame.current = requestAnimationFrame(() => state.phi = phi.current);
          },
        });
      } catch (error) {
        console.error('Failed to initialize globe:', error);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    createGlobeInstance();

    return () => {
      mounted = false;
      if (globeInstance.current) {
        globeInstance.current.destroy();
      }
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      window.removeEventListener('resize', updateDimensions);
    };
  }, [dimensions.width, dimensions.height]);

  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <canvas
        ref={canvasRef}
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          maxWidth: '100%',
          aspectRatio: 1,
          opacity: 0.8,
          display: 'block',
          margin: 'auto'
        }}
      />
    </div>
  );
};

export { Globe }