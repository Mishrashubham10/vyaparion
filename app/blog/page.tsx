'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { fadeUp, staggerContainer, scaleIn } from '@/lib/motion';
import { SectionHeading } from '@/components/layouts/SectionHeading';

const posts = [
  {
    title: 'The Future of Global Trade in 2026',
    excerpt:
      'Exploring emerging trends in international commerce and how businesses can stay ahead.',
    date: 'Feb 15, 2026',
    category: 'Industry',
    emoji: '🌐',
  },
  {
    title: 'Supply Chain Resilience Strategies',
    excerpt:
      'How to build robust supply chains that withstand global disruptions and uncertainties.',
    date: 'Feb 8, 2026',
    category: 'Strategy',
    emoji: '🔗',
  },
  {
    title: 'IoT in Trade: A Game Changer',
    excerpt:
      'How smart sensors and AI are revolutionizing logistics and warehouse management.',
    date: 'Jan 28, 2026',
    category: 'Technology',
    emoji: '📡',
  },
  {
    title: 'Sustainable Trading Practices',
    excerpt:
      'Why sustainability is the key differentiator for modern trading companies.',
    date: 'Jan 20, 2026',
    category: 'Sustainability',
    emoji: '🌱',
  },
  {
    title: 'Navigating Trade Regulations',
    excerpt:
      'A comprehensive guide to international trade compliance and documentation.',
    date: 'Jan 12, 2026',
    category: 'Compliance',
    emoji: '📋',
  },
  {
    title: 'Building Trust in B2B Trading',
    excerpt:
      'How transparency and reliability create lasting business partnerships.',
    date: 'Jan 5, 2026',
    category: 'Business',
    emoji: '🤝',
  },
];

const Blog = () => (
  <>
    <section className="hero-gradient py-24 text-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4"
        >
          Blog & Insights
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-primary-foreground/60 max-w-xl mx-auto"
        >
          Stay updated with the latest trends, insights, and news from global
          trade.
        </motion.p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Latest Articles"
          subtitle="Expert perspectives on global trade and business growth"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <motion.article
              key={post.title}
              variants={scaleIn}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl overflow-hidden card-elevated group cursor-pointer"
            >
              <div className="p-10 text-center bg-muted/30">
                <span className="text-6xl group-hover:scale-110 inline-block transition-transform duration-300">
                  {post.emoji}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-wider text-accent font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground text-[10px]">
                    <Calendar size={10} /> {post.date}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-accent text-xs font-semibold group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={12} />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  </>
);

export default Blog;