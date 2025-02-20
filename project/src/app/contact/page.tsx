'use client';

import { GradientBackground } from '@/components/GradientBackground';
import { motion } from 'framer-motion';
import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';
import { WorldMap } from '@/components/ui/world-map';

export default function ContactPage() {
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
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Have a question or want to work together? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-purple-400">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#915EFF]/20 flex items-center justify-center">
                      <IconMail className="w-6 h-6 text-[#915EFF]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                      <a href="mailto:Tiago.Carvalho@lt-media.ch" className="text-gray-400 hover:text-[#915EFF] transition-colors">
                        Tiago.Carvalho@lt-media.ch
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#915EFF]/20 flex items-center justify-center">
                      <IconPhone className="w-6 h-6 text-[#915EFF]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Phone</h3>
                      <a href="tel:+41784016396" className="text-gray-400 hover:text-[#915EFF] transition-colors">
                        +41 78 401 63 96
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#915EFF]/20 flex items-center justify-center">
                      <IconMapPin className="w-6 h-6 text-[#915EFF]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Address</h3>
                      <p className="text-gray-400">
                        Thurstrasse 26a<br />
                        8500 Frauenfeld<br />
                        Switzerland
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Map */}
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <WorldMap
                  dots={[
                    {
                      start: { lat: 47.5584, lng: 8.8964 }, // Frauenfeld
                      end: { lat: 47.3769, lng: 8.5417 }, // Zurich
                    },
                  ]}
                />
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#915EFF]/50 focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#915EFF]/50 focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#915EFF]/50 focus:border-transparent transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#915EFF]/50 focus:border-transparent transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget.form;
                    if (form && form.checkValidity()) {
                      window.location.href = `mailto:Tiago.Carvalho@lt-media.ch?subject=${encodeURIComponent(form.subject.value)}&body=${encodeURIComponent(`Name: ${form.name.value}\nEmail: ${form.email.value}\n\n${form.message.value}`)}`;
                    } else {
                      form?.reportValidity();
                    }
                  }}
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#915EFF] to-purple-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#915EFF]/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Send Message
                </button>
              </form>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#915EFF]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}