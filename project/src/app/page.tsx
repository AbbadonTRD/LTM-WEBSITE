import { GradientBackground } from '@/components/GradientBackground';
import { BentoGrid } from '@/components/BentoGrid';
import { Collaboration } from '@/components/Collaboration';
import { HeroParallax } from '@/components/HeroParallax';
import { Roadmap } from '@/components/Roadmap';
import { FeaturesSectionDemo } from '@/components/FeaturesSectionDemo';
import { WorldMapDemo } from '@/components/WorldMapDemo';
import { LampDemo } from '@/components/LampDemo';
import Footer from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { SectionDivider } from '@/components/SectionDivider';
import { Navbar } from '@/components/Navbar';
import { Suspense, lazy } from 'react';
import { testimonials } from '@/constants';
import { InfiniteMovingCards } from '@/components/InfiniteMovingCards';

// Lazy load heavy components
const Hero = lazy(() => import('@/components/Hero'));

// Loading component
const SectionLoader = () => (
  <div className="w-full min-h-[100vh] flex items-center justify-center bg-black">
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-indigo-500/20 rounded-full" />
        <div className="absolute inset-0 w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
      <p className="text-white/80 text-sm font-medium">Loading...</p>
    </div>
  </div>
);

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Software Development",
    link: "/blog/1",
    description: "Explore how AI is transforming enterprise software development in 2024. Learn about emerging trends, implementation strategies, and business impact.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    color: "from-indigo-500/20 to-purple-500/20"
  },
  {
    id: 2,
    title: "Implementing Zero-Trust Security in Modern Applications",
    link: "/blog/2",
    description: "Learn about the principles of zero-trust architecture and how to implement it effectively in your modern cloud-native applications.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 3,
    title: "DeepSeek vs ChatGPT: A Comprehensive Comparison",
    link: "/blog/3",
    description: "In-depth comparison of DeepSeek and ChatGPT. Analyze features, performance, and use cases to choose the right AI model for your needs.",
    image: "https://images.unsplash.com/photo-1676299081847-824916de7e0a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 4,
    title: "Modern Software Architecture: Patterns and Best Practices",
    link: "/blog/4",
    description: "Explore contemporary software architecture patterns, from microservices to event-driven designs, and learn how to implement them effectively.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 5,
    title: "Mobile Development Trends and Technologies for 2024",
    link: "/blog/5",
    description: "Stay ahead of the curve with insights into the latest mobile development trends, from cross-platform frameworks to emerging technologies.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    color: "from-orange-500/20 to-amber-500/20"
  }
];

export default function Page() {
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
            <HeroParallax products={blogPosts} />
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
              <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
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
}