'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { useState } from 'react';

const socialMedia = [
  {
    id: 1,
    title: "LinkedIn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    href: "https://www.linkedin.com/company/leading-technologies-media/?viewAsMember=true"
  },
  {
    id: 2,
    title: "Instagram",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
    href: "https://www.instagram.com/ltmedia.ch/"
  }
];

export function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <footer className="w-full pt-20 pb-10 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-purple-400 mb-6">
              Leading Technologies - Media
            </h3>
            <address className="text-gray-400 not-italic">
              Thurstrasse 26a<br />
              8500 Frauenfeld<br />
              Switzerland<br /><br />
              Tel: +41 78 401 63 96<br />
              Email: Tiago.Carvalho@lt-media.ch
            </address>
          </div>

          {/* Legal Links */}
          <div className="space-y-4 md:col-span-2 md:ml-auto">
            {[
              {
                title: "Imprint",
                content: `Leading Technologies - Media
                  
                  CEO: Tiago Cevallos de Carvalho`
              },
              {
                title: "Privacy Policy",
                content: `According to the Federal Data Protection Act (DSG) and the Ordinance to the Federal Data Protection Act (VDSG).
                  Responsible for data processing: Leading Technologies - Media`
              },
              {
                title: "Terms and Conditions",
                content: `General Terms and Conditions of Leading Technologies - Media
                  Place of jurisdiction is Zurich, Switzerland
                  Applicable law: Swiss law`
              }
            ].map((section) => (
              <div key={section.title} className="border-b border-white/10 last:border-b-0">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between py-4 text-left text-gray-300 hover:text-white transition-colors"
                >
                  <span>{section.title}</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform ${
                      expandedSection === section.title ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedSection === section.title && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="pb-6 text-sm text-gray-400 whitespace-pre-line"
                  >
                    {section.content}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Leading Technologies - Media. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialMedia.map((info) => (
              <motion.a
                key={info.id}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 flex justify-center items-center rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-colors hover:bg-white/10"
              >
                <img src={info.icon} alt={info.title} className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer