import { GradientBackground } from '@/components/GradientBackground';
import { IconCalendar, IconClock, IconTag } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ClientBlogList } from '@/components/blog/ClientBlogList';

export const metadata: Metadata = {
  title: 'Tech Blog | Leading Technologies - Media | AI & Software Development Insights',
  description: 'Expert insights on AI, software development, security, and digital transformation from Leading Technologies - Media. Stay ahead with our latest tech articles.',
  keywords: 'tech blog, AI insights, software development, enterprise solutions, digital transformation, Switzerland'
};

const blogPosts = [
  {
    id: 1,
    slug: "future-of-ai-enterprise-software",
    title: "The Future of AI in Enterprise Software Development",
    metaTitle: "The Future of AI in Enterprise Software Development | 2024 Insights",
    metaDescription: "Explore how AI is transforming enterprise software development in 2024. Learn about emerging trends, implementation strategies, and business impact.",
    excerpt: "Discover how artificial intelligence is revolutionizing enterprise software development and what it means for businesses in 2024 and beyond.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "2024-01-15",
    readTime: "5 min",
    tags: ["Artificial Intelligence", "Enterprise Software", "Software Development", "Digital Transformation"],
    author: {
      name: "Tiago Cevallos",
      role: "Geschäftsführer"
    }
  },
  {
    id: 2,
    slug: "zero-trust-security",
    title: "Implementing Zero-Trust Security in Modern Applications",
    excerpt: "Learn about the principles of zero-trust architecture and how to implement it effectively in your modern cloud-native applications.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "2024-01-10",
    readTime: "7 min",
    tags: ["Security", "Cloud", "Architecture"],
    author: {
      name: "Tiago Cevallos",
      role: "Geschäftsführer"
    }
  },
  {
    id: 3,
    slug: "deepseek-vs-chatgpt",
    title: "DeepSeek vs ChatGPT: A Comprehensive Comparison",
    metaTitle: "DeepSeek vs ChatGPT: AI Model Comparison 2024 | Performance Analysis",
    metaDescription: "In-depth comparison of DeepSeek and ChatGPT. Analyze features, performance, and use cases to choose the right AI model for your needs.",
    excerpt: "An in-depth analysis of DeepSeek and ChatGPT, comparing their capabilities, performance, and practical applications in enterprise settings.",
    image: "https://images.unsplash.com/photo-1676299081847-824916de7e0a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "2024-01-08",
    readTime: "8 min",
    tags: ["AI Models", "Language Models", "ChatGPT", "DeepSeek", "Enterprise AI"],
    author: {
      name: "Tiago Cevallos",
      role: "Geschäftsführer"
    }
  },
  {
    id: 4,
    slug: "modern-software-architecture",
    title: "Modern Software Architecture: Patterns and Best Practices",
    excerpt: "Explore contemporary software architecture patterns, from microservices to event-driven designs, and learn how to implement them effectively.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "2024-01-05",
    readTime: "10 min",
    tags: ["Software Architecture", "Best Practices", "Design Patterns"],
    author: {
      name: "Tiago Cevallos",
      role: "Geschäftsführer"
    }
  },
  {
    id: 5,
    slug: "mobile-development-trends",
    title: "Mobile Development Trends and Technologies for 2024",
    excerpt: "Stay ahead of the curve with insights into the latest mobile development trends, from cross-platform frameworks to emerging technologies.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "2024-01-03",
    readTime: "6 min",
    tags: ["Mobile Development", "Trends", "Technology"],
    author: {
      name: "Tiago Cevallos",
      role: "Geschäftsführer"
    }
  }
];

export default function BlogPage() {
  return (
    <div className="relative min-h-screen">
      <GradientBackground />
      <ClientBlogList posts={blogPosts} />
    </div>
  );
}