'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {
  fadeUp,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from '@/lib/motion';
import { useState } from 'react';
import Link from 'next/link';
import { SectionHeading } from './layouts/SectionHeading';
import { products } from '@/data/products';
import Image from 'next/image';
import ProductCard from './products/ProdcutsCard';

const featuredProducts = products.slice(0, 4);

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Trusted & Reliable',
    desc: '15+ years of proven track record in global trade',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    desc: 'Efficient logistics ensuring on-time delivery worldwide',
  },
  {
    icon: Globe,
    title: 'Global Network',
    desc: 'Connected with 200+ partners across 50 countries',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Pricing',
    desc: 'Best market rates with transparent dealings',
  },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechCorp India',
    text: 'Vyaparion Traders has been our most dependable partner for three years. Their quality and service are unmatched.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Procurement Head, GlobalMfg',
    text: "Outstanding reliability and communication. They've streamlined our entire supply chain operations.",
  },
  {
    name: 'David Chen',
    role: 'Director, PacificTrade',
    text: 'Working with Vyaparion has transformed our sourcing strategy. Highly recommended for any business.',
  },
];

export const HomePageClient = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <>
      {/* ============ HERO ============= */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsla(187,92%,42%,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-xs font-medium mb-6 border border-primary-foreground/10"
            >
              Trusted Global Trading Partner
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6">
              Empowering Global
              <br />
              <span className="text-accent">Trade Solutions</span>
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/70 max-w-xl mb-8 leading-relaxed">
              Vyaparion Traders delivers premium products and innovative trading
              solutions to businesses worldwide with excellence and trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold text-sm glow-accent animate-pulse-glow"
                >
                  Explore Products <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-primary-foreground/20 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/5 transition-colors"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl hero-gradient opacity-30 blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative glass-card rounded-3xl p-8 md:p-12 text-center"
              >
                <div className="text-7xl md:text-8xl mb-4">🌐</div>
                <p className="font-heading font-bold text-primary-foreground text-xl">
                  Global Reach
                </p>
                <p className="text-primary-foreground/50 text-sm mt-1">
                  50+ Countries
                </p>
                <div className="mt-6 flex gap-6 justify-center">
                  <div>
                    <p className="text-2xl font-bold text-accent">15+</p>
                    <p className="text-xs text-primary-foreground/50">Years</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent">500+</p>
                    <p className="text-xs text-primary-foreground/50">
                      Clients
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent">1K+</p>
                    <p className="text-xs text-primary-foreground/50">
                      Products
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========== ABOUT PREVIEW ============ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="glass-card rounded-2xl p-8 card-elevated">
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="font-heading font-bold text-2xl mb-2 text-foreground">
                  About Vyaparion
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Built on trust, powered by innovation. We&apos;ve been
                  connecting businesses across continents since 2010.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-1"
            >
              <SectionHeading
                title="Who We Are"
                subtitle="A global trading company committed to quality, transparency, and growth."
                centered={false}
              />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Vyaparion Traders specializes in connecting manufacturers with
                global markets. Our expertise spans across metals, textiles,
                technology, and agriculture. We ensure every transaction is
                built on trust and delivered with excellence.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============= FEATURED PRODUCTS ============ */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Featured Products"
            subtitle="Explore our premium range of trading products"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredProducts.map((p) => (
            //   <motion.div
            //     key={p.title}
            //     variants={scaleIn}
            //     whileHover={{ y: -8, transition: { duration: 0.3 } }}
            //     className="glass-card rounded-2xl p-6 card-elevated group cursor-pointer"
            //   >
                <ProductCard key={p.id} product={p} />
            //   </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose Us"
            subtitle="Discover what makes Vyaparion Traders the preferred choice"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyChooseUs.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="text-center p-6 rounded-2xl glass-card card-elevated"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Hear from businesses we've partnered with"
            light
          />
          <motion.div
            key={testimonialIdx}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-accent fill-accent" />
              ))}
            </div>
            <p className="text-primary-foreground/80 text-base italic leading-relaxed mb-6">
              {testimonials[testimonialIdx].text}
            </p>
            <p className="font-heading font-semibold text-primary-foreground">
              {testimonials[testimonialIdx].name}
            </p>
            <p className="text-primary-foreground/50 text-xs">
              {testimonials[testimonialIdx].role}
            </p>
          </motion.div>
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() =>
                setTestimonialIdx((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1,
                )
              }
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() =>
                setTestimonialIdx((prev) =>
                  prev === testimonials.length - 1 ? 0 : prev + 1,
                )
              }
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hero-gradient rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsla(187,92%,42%,0.2),transparent_60%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                Ready to Transform Your Trade?
              </h2>
              <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
                Partner with Vyaparion Traders and unlock access to global
                markets, premium products, and trusted trading solutions.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold glow-accent"
                >
                  Get Started <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};