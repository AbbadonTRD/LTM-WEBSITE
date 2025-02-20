'use client';

import { motion } from 'framer-motion';
import { IconCalendar, IconClock, IconShare, IconBookmark } from '@tabler/icons-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
  author: {
    name: string;
    role: string;
  };
}

interface ClientBlogPostProps {
  post: BlogPost;
}

export function ClientBlogPost({ post }: ClientBlogPostProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [toc, setToc] = useState<TableOfContentsItem[]>([]);

  useEffect(() => {
    // Extract headings from content
    const headings = post.content.split('\n')
      .filter(line => line.startsWith('##'))
      .map(line => {
        const level = (line.match(/^#+/) || [''])[0].length - 2;
        const title = line.replace(/^#+\s+/, '').trim();
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return { id, title, level };
      });
    setToc(headings);
  }, [post.content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -35% 0px' }
    );

    toc.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [toc]);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleSave = () => {
    // Implement save functionality (e.g., localStorage or user preferences)
    alert('Article saved to your bookmarks!');
  };

  const renderContent = () => {
    const lines = post.content.split('\n');
    let html = '';
    let inList = false;
    let listType = '';

    lines.forEach(line => {
      line = line.trim();
      if (!line) {
        if (inList) {
          html += listType === 'ul' ? '</ul>' : '</ol>';
          inList = false;
        }
        return;
      }

      const id = line.replace(/^#+\s+/, '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');

      if (line.startsWith('## ')) {
        if (inList) {
          html += listType === 'ul' ? '</ul>' : '</ol>';
          inList = false;
        }
        html += `
          <h2 id="${id}" class="group flex items-center text-3xl font-bold text-white mt-16 mb-6 pb-4 border-b border-white/10">
            ${line.replace('## ', '')}
            <a href="#${id}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span class="text-purple-400 text-sm">#</span>
            </a>
          </h2>
        `;
      } else if (line.startsWith('### ')) {
        if (inList) {
          html += listType === 'ul' ? '</ul>' : '</ol>';
          inList = false;
        }
        html += `
          <h3 id="${id}" class="group flex items-center text-2xl font-bold text-purple-400 mt-12 mb-4">
            ${line.replace('### ', '')}
            <a href="#${id}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span class="text-purple-400 text-sm">#</span>
            </a>
          </h3>
        `;
      } else if (line.startsWith('- ')) {
        if (!inList || listType !== 'ul') {
          if (inList) html += listType === 'ul' ? '</ul>' : '</ol>';
          html += '<ul class="list-disc pl-6 space-y-2 mb-6 text-gray-300">';
          inList = true;
          listType = 'ul';
        }
        const content = line.replace('- ', '');
        if (content.includes('**')) {
          html += `<li>${content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')}</li>`;
        } else {
          html += `<li>${content}</li>`;
        }
      } else if (/^\d+\.\s/.test(line)) {
        if (!inList || listType !== 'ol') {
          if (inList) html += listType === 'ul' ? '</ul>' : '</ol>';
          html += '<ol class="list-decimal pl-6 space-y-4 mb-6">';
          inList = true;
          listType = 'ol';
        }
        const content = line.replace(/^\d+\.\s/, '');
        html += `<li class="pl-2"><strong class="text-purple-400 block mb-2">${content}</strong></li>`;
      } else {
        if (inList) {
          html += listType === 'ul' ? '</ul>' : '</ol>';
          inList = false;
        }
        if (line.includes('**')) {
          html += `<p class="text-gray-300 mb-6 leading-relaxed">${line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')}</p>`;
        } else {
          html += `<p class="text-gray-300 mb-6 leading-relaxed">${line}</p>`;
        }
      }
    });

    if (inList) {
      html += listType === 'ul' ? '</ul>' : '</ol>';
    }

    return html;
  };

  return (
    <div className="relative pt-32 pb-20 px-4 flex flex-col lg:flex-row">
      {/* Left Sidebar */}
      <div className="w-64 mr-12">
        <div className="sticky top-32">
          <nav className="space-y-2">
            {toc.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  w-full text-left py-1.5 pl-${item.level * 4} pr-2 text-sm
                  transition-colors duration-150
                  ${activeSection === item.id 
                    ? 'text-purple-400' 
                    : 'text-gray-500 hover:text-gray-300'
                  }
                `}
              >
                {item.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <article className="flex-1 max-w-4xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            {post.title}
          </h1>

          {/* Metadata */}
          <div className="flex items-center gap-8 text-gray-400 mb-12">
            <span className="flex items-center">
              <IconCalendar className="w-5 h-5 mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center">
              <IconClock className="w-5 h-5 mr-2" />
              {post.readTime}
            </span>
          </div>

          {/* Author */}
          <div className="flex items-center mb-16">
            <div className="text-left">
              <div className="font-medium text-white">{post.author.name}</div>
              <div className="text-sm text-gray-400">{post.author.role}</div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none prose-h2:text-2xl prose-h2:font-semibold prose-h2:text-white prose-h3:text-xl prose-h3:font-medium prose-h3:text-gray-200 prose-p:text-gray-300 prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: renderContent() }}
        />

        {/* Social Share */}
        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
            >
              <IconShare className="w-5 h-5" />
              Share
            </button>
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
            >
              <IconBookmark className="w-5 h-5" />
              Save
            </button>
          </div>
          <div className="flex items-center gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="text-sm px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}