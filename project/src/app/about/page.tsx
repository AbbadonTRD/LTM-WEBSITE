'use client';

import { GradientBackground } from '@/components/GradientBackground';
import { motion } from 'framer-motion';
import { IconBuildingSkyscraper, IconUsersGroup, IconTarget, IconHeart } from '@tabler/icons-react';

const teamMembers = [
  {
    name: "Tiago Cevallos de Carvalho",
    role: "Geschäftsführer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Tiago brings over a decade of experience in digital transformation and software development."
  },
  {
    name: "Sarah Weber",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Sarah leads our development team with expertise in cloud architecture and AI integration."
  },
  {
    name: "Michael Schmidt",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Michael crafts intuitive user experiences that bridge technology and human needs."
  }
];

const values = [
  {
    icon: <IconBuildingSkyscraper className="w-8 h-8" />,
    title: "Innovation",
    description: "Pushing boundaries in digital solutions"
  },
  {
    icon: <IconUsersGroup className="w-8 h-8" />,
    title: "Collaboration",
    description: "Working together for better results"
  },
  {
    icon: <IconTarget className="w-8 h-8" />,
    title: "Excellence",
    description: "Delivering quality in every project"
  },
  {
    icon: <IconHeart className="w-8 h-8" />,
    title: "Client Focus",
    description: "Your success is our priority"
  }
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <GradientBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-purple-400"
          >
            About Leading Technologies - Media
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Empowering businesses with innovative digital solutions since 2023. We combine creativity with technical excellence to deliver exceptional results.
          </motion.p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-purple-400">
              Our Mission
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To transform businesses through innovative digital solutions, enabling them to thrive in the digital age. We strive to be at the forefront of technological advancement while maintaining a deep commitment to our clients' success.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-purple-400">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-black/30 transition-colors"
              >
                <div className="text-[#915EFF] mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-purple-400">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-black/30 transition-colors"
              >
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-[#915EFF]/20"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                  <p className="text-[#915EFF] mb-3">{member.role}</p>
                  <p className="text-gray-400">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}