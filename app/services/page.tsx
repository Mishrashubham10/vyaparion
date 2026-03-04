'use client';

import { motion } from 'framer-motion';
import {
  Ship,
  BarChart3,
  Handshake,
  Package,
  Globe,
  HeadphonesIcon,
} from 'lucide-react';
import { fadeUp, staggerContainer, scaleIn } from '@/lib/motion';
import { SectionHeading } from '@/components/layouts/SectionHeading';

const services = [
  {
    icon: Ship,
    title: 'Global Logistics',
    desc: 'End-to-end shipping and freight management across 50+ countries with real-time tracking.',
  },
  {
    icon: BarChart3,
    title: 'Market Analysis',
    desc: 'Data-driven market insights and trend reports to help you make informed trading decisions.',
  },
  {
    icon: Handshake,
    title: 'Trade Consulting',
    desc: 'Expert guidance on international trade regulations, compliance, and best practices.',
  },
  {
    icon: Package,
    title: 'Supply Chain Management',
    desc: 'Optimized sourcing, procurement, and inventory solutions for seamless operations.',
  },
  {
    icon: Globe,
    title: 'Export & Import Services',
    desc: 'Complete documentation, customs clearance, and regulatory support for smooth trade.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    desc: 'Dedicated support team available around the clock for all your trading needs.',
  },
];

const Services = () => (
  <>
    <section className="hero-gradient py-24 text-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4"
        >
          Our Services
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-primary-foreground/60 max-w-xl mx-auto"
        >
          Comprehensive trading solutions tailored to your business needs.
        </motion.p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="What We Offer"
          subtitle="From logistics to consulting, we cover every aspect of global trade"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-2xl p-8 card-elevated group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <s.icon
                  size={24}
                  className="text-accent group-hover:text-accent-foreground transition-colors"
                />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </>
);

export default Services;