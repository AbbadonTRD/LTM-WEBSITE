'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll, useTransform, useSpring, MotionValue,
} from 'framer-motion';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  description?: string;
  link: string;
  image: string;
  color: string;
  description: string;
}

interface HeroParallaxProps {
  products: BlogPost[];
}

const HeroParallax = ({ products }: HeroParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 200]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -200]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-200, 100]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-20 sm:py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        key="parallax-container"
        style={{
          rotateX: rotateX,
          rotateZ: rotateZ,
          translateY: translateY,
          opacity: opacity,
        }}
        className="relative"
      >
        <motion.div key="first-row" className="flex flex-row-reverse space-x-reverse space-x-8 mb-8">
          {products.map((post) => (
            <ProductCard
              key={`first-${post.id}`}
              product={post}
              translate={translateX}
            />
          ))}
        </motion.div>
        <motion.div key="second-row" className="flex flex-row mb-8 space-x-8">
          {[...products].reverse().map((post) => (
            <ProductCard
              key={`second-${post.id}`}
              product={post}
              translate={translateXReverse}
            />
          ))}
        </motion.div>
        <motion.div key="third-row" className="flex flex-row-reverse space-x-reverse space-x-8">
          {products.map((post) => (
            <ProductCard
              key={`third-${post.id}`}
              product={post}
              translate={translateX}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 sm:py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] via-purple-400 to-pink-400 mb-8">
        Latest Insights & Articles
      </h1>
      <p className="max-w-2xl text-sm sm:text-base md:text-xl mt-4 sm:mt-8 text-gray-400">
        Stay ahead with our latest articles on technology trends, best practices, and industry insights.
      </p>
    </div>
  );
};

const ProductCard = ({
  product,
  translate,
}: {
  product: BlogPost;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
        y: 0,
        scale: 0.95,
      }}
      whileHover={{
        y: -10,
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      key={product.id}
      className="group/product h-48 sm:h-64 lg:h-72 w-[80vw] sm:w-[20rem] lg:w-[22rem] relative flex-shrink-0 overflow-hidden rounded-xl"
    >
      <Link
        href={product.link}
        className={`block w-full h-full relative bg-gradient-to-br ${product.color} backdrop-blur-sm border border-white/10`}
        style={{ willChange: 'transform', height: '100%' }}
      >
        <div className="w-full h-full relative overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h2 className="text-xl font-bold text-white mb-2">
              {product.title}
            </h2>
            <p className="text-white/80 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {product.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export { HeroParallax };