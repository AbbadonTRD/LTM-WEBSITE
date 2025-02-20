'use client';

import { GradientBackground } from '@/components/GradientBackground';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IconBrain, IconCode, IconRocket, IconUsers, IconBriefcase, IconMapPin, IconClock } from '@tabler/icons-react';
import { CTAButton } from '@/components/CTAButton';
import { useRef } from 'react';

const values = [
  {
    icon: <IconBrain className="w-8 h-8" />,
    title: "Innovation First",
    description: "We're constantly pushing boundaries and exploring new technologies to create cutting-edge solutions.",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: <IconUsers className="w-8 h-8" />,
    title: "Team Excellence",
    description: "Join a team of passionate experts who collaborate to deliver exceptional results.",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: <IconRocket className="w-8 h-8" />,
    title: "Growth Mindset",
    description: "We invest in continuous learning and professional development opportunities.",
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: <IconCode className="w-8 h-8" />,
    title: "Impact Driven",
    description: "Your work will directly impact businesses and help shape the future of technology.",
    gradient: "from-orange-500/20 to-amber-500/20"
  }
];

const benefits = [
  {
    title: "Competitive Compensation",
    items: ["Market-leading salary", "Performance bonuses", "Stock options"],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Health & Wellness",
    items: ["Premium health insurance", "Mental health support", "Fitness allowance"],
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Growth & Development",
    items: ["Learning budget", "Conference attendance", "Mentorship programs"],
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Work-Life Balance",
    items: ["Flexible working hours", "Remote work options", "Unlimited vacation"],
    gradient: "from-orange-500/20 to-amber-500/20"
  }
];

const openings = [
  {
    id: 1,
    title: "Backend Developer",
    location: "Remote",
    type: "Project-based",
    department: "Engineering",
    link: "mailto:Tiago.Carvalho@lt-media.ch",
    description: "Only project-based freelance work available. Please reach out by email for backend development opportunities.",
    requirements: [
      "5+ years of experience with TypeScript/JavaScript",
      "Strong knowledge of Node.js and backend architecture",
      "Experience with cloud platforms (AWS/GCP)",
      "Excellent problem-solving skills"
    ]
  }
];

export default function CareersPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToPositions = () => {
    const element = document.getElementById('positions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <GradientBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#915EFF]/20 via-transparent to-transparent" />
        </motion.div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Enable a <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-purple-400">billion</span> humans to build <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-purple-400">great software</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Join the team building LTM, one of the growing software platforms. LTM is used by product & engineering teams to collaborate with AI, enterprises to launch services, individuals to create websites and beyond.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <CTAButton onClick={scrollToPositions}>View Positions</CTAButton>
            <a 
              href="mailto:Tiago.Carvalho@lt-media.ch" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact Recruiting →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-purple-400">
              Our Values
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-gradient-to-br ${value.gradient} backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-black/40 rounded-xl transition-opacity group-hover:opacity-0" />
                <div className="relative z-10">
                  <div className="text-white mb-4 transform group-hover:scale-110 transition-transform">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-purple-400">
              Benefits & Perks
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-gradient-to-br ${benefit.gradient} backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 h-full`}
              >
                <div className="absolute inset-0 bg-black/40 rounded-xl transition-opacity group-hover:opacity-0" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-6 text-white">{benefit.title}</h3>
                  <ul className="space-y-3">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/50 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-purple-400">
              Open Positions
            </span>
          </h2>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-black/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <IconBriefcase className="w-5 h-5 text-[#915EFF]" />
                      <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-[#915EFF]/20 text-[#915EFF]">
                        <IconMapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">
                        <IconClock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="text-sm px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400">
                        {job.department}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-6">{job.description}</p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Requirements</h4>
                      {job.requirements.map((req, i) => (
                        <div key={i} className="flex items-start gap-2 text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#915EFF] mt-2" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex lg:flex-col justify-center items-center gap-4">
                    <motion.a
                      href={job.link}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full max-w-md relative overflow-hidden rounded-xl bg-gradient-to-r from-[#915EFF]/20 to-purple-500/20 backdrop-blur-sm border border-white/10 p-6 flex items-center justify-between group"
                    >
                      {/* Glass effect overlay */}
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Shimmer effect */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        style={{
                          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
                          transform: 'translateX(-100%)',
                          animation: 'shimmer 2s infinite'
                        }}
                      />

                      <div className="relative flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-[#915EFF]/20 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 text-[#915EFF]"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Contact</p>
                          <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Tiago.Carvalho@lt-media.ch
                          </p>
                        </div>
                      </div>
                      <div className="relative">
                        <span className="text-sm text-[#915EFF] group-hover:opacity-0 transition-opacity duration-300">
                          Apply Now
                        </span>
                      </div>
                    </motion.a>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/10 to-transparent rounded-xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}