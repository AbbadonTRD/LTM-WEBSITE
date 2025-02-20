'use client';

import { motion } from 'framer-motion';
import { IconCalendar, IconClock } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
  author: {
    name: string;
    role: string;
  };
}

interface ClientBlogListProps {
  posts: BlogPost[];
}

export function ClientBlogList({ posts }: ClientBlogListProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-purple-400"
          >
            Latest Insights & News
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Stay ahead with our latest articles on technology trends, best practices, and industry insights.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              itemScope
              itemType="https://schema.org/BlogPosting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-colors duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  itemProp="image"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4" itemProp="description">
                  {post.excerpt}
                </p>

                {/* Metadata */}
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center" itemProp="datePublished">
                    <IconCalendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <span className="flex items-center">
                    <IconClock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>

                {/* Author */}
                <div className="mt-6 flex items-center">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">{post.author.name}</span>
                    <span className="text-xs text-gray-400">{post.author.role}</span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent" />
              </div>

              {/* Link */}
              <Link 
                href={`/blog/${post.id}`}
                className="absolute inset-0"
              >
                <span className="sr-only">Read more about {post.title}</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}