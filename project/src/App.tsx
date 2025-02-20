import React from 'react';
import { BentoGrid } from './components/BentoGrid';
import { GradientBackground } from './components/GradientBackground';
import { Collaboration } from './components/Collaboration';
import { InfiniteMovingCards } from './components/InfiniteMovingCards';
import { HeroParallax } from './components/HeroParallax';
import { Roadmap } from './components/Roadmap';
import { FeaturesSectionDemo } from './components/FeaturesSectionDemo';
import { WorldMapDemo } from './components/WorldMapDemo';
import { LampDemo } from './components/LampDemo';
import Footer from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { SectionDivider } from './components/SectionDivider';
import { Navbar } from './components/Navbar';
import { Suspense, lazy, memo, useState, useEffect } from 'react';

// Lazy load heavy components
const Hero = lazy(() => import('./components/Hero'));

// Loading component with memo to prevent unnecessary re-renders
const SectionLoader = memo(() => (
  <div className="w-full min-h-[100vh] flex items-center justify-center bg-black">
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-indigo-500/20 rounded-full" />
        <div className="absolute inset-0 w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
      <p className="text-white/80 text-sm font-medium">Loading...</p>
    </div>
  </div>
));

const testimonials = [
  {
    quote: "This platform has transformed how we handle our digital presence. The AI integration is seamless and incredibly powerful.",
    name: "Alex Thompson",
    title: "CTO, TechCorp",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    quote: "The speed and efficiency of their solutions have given us a significant competitive advantage in our market.",
    name: "Sarah Chen",
    title: "Product Lead, InnovateLabs",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    quote: "Outstanding service and cutting-edge technology. They've helped us achieve results we didn't think were possible.",
    name: "Marcus Rodriguez",
    title: "CEO, FutureScale",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
];

import {
  IconBrain,
  IconCloud,
  IconChartBar,
  IconCurrencyBitcoin,
  IconDevices,
  IconServer,
  IconShieldLock,
  Icon3dCubeSphere,
  IconAntenna,
  IconNetwork,
  IconAtom
} from '@tabler/icons-react';

const products = [
  {
    id: 1,
    title: "Web Development",
    link: "/projects/web-app",
    icon: <IconDevices className="w-24 h-24 stroke-1" />,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    link: "/projects/ai",
    icon: <IconBrain className="w-24 h-24 stroke-1" />,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    title: "Cloud Solutions",
    link: "/projects/cloud",
    icon: <IconCloud className="w-24 h-24 stroke-1" />,
    color: "from-sky-500/20 to-indigo-500/20"
  },
  {
    id: 4,
    title: "Analytics & BI",
    link: "/projects/analytics",
    icon: <IconChartBar className="w-24 h-24 stroke-1" />,
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 5,
    title: "Blockchain",
    link: "/projects/blockchain",
    icon: <IconCurrencyBitcoin className="w-24 h-24 stroke-1" />,
    color: "from-orange-500/20 to-amber-500/20"
  },
  {
    id: 6,
    title: "IoT Solutions",
    link: "/projects/iot",
    icon: <IconDevices className="w-24 h-24 stroke-1" />,
    color: "from-teal-500/20 to-cyan-500/20"
  },
  {
    id: 7,
    title: "DevOps",
    link: "/projects/devops",
    icon: <IconServer className="w-24 h-24 stroke-1" />,
    color: "from-violet-500/20 to-purple-500/20"
  },
  {
    id: 8,
    title: "Cybersecurity",
    link: "/projects/security",
    icon: <IconShieldLock className="w-24 h-24 stroke-1" />,
    color: "from-red-500/20 to-rose-500/20"
  },
  {
    id: 9,
    title: "AR/VR",
    link: "/projects/ar-vr",
    icon: <Icon3dCubeSphere className="w-24 h-24 stroke-1" />,
    color: "from-fuchsia-500/20 to-pink-500/20"
  },
  {
    id: 10,
    title: "Quantum Computing",
    link: "/projects/quantum",
    icon: <IconAtom className="w-24 h-24 stroke-1" />,
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    id: 11,
    title: "5G Networks",
    link: "/projects/5g",
    icon: <IconAntenna className="w-24 h-24 stroke-1" />,
    color: "from-emerald-500/20 to-green-500/20"
  },
  {
    id: 12,
    title: "Edge Computing",
    link: "/projects/edge",
    icon: <IconNetwork className="w-24 h-24 stroke-1" />,
    color: "from-amber-500/20 to-yellow-500/20"
  },
];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time to prevent flash
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SectionLoader />;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <GradientBackground />
      <Navbar />
      <main className="relative z-10">
        <Suspense fallback={<SectionLoader />}>
          <section id="home">
            <Hero />
          </section>
        </Suspense>
        <SectionDivider />
        <section id="services" className="py-20">
          <BentoGrid />
        </section>
        <SectionDivider />
        <Suspense fallback={<SectionLoader />}>
          <section id="features">
            <FeaturesSectionDemo />
          </section>
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionLoader />}>
          <section id="global">
            <WorldMapDemo />
          </section>
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionLoader />}>
          <section id="products">
            <HeroParallax products={products} />
          </section>
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionLoader />}>
          <section id="collaboration">
            <Collaboration />
          </section>
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionLoader />}>
          <section id="roadmap">
            <LampDemo />
            <Roadmap />
          </section>
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionLoader />}>
          <section id="testimonials" className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                What Our Clients Say
              </h2>
              <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="slow"
              />
            </div>
          </section>
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <CookieConsent />
      </Suspense>
    </div>
  );
};

export default App;