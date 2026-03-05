"use client";

import { motion } from 'framer-motion';
import {
  ArrowUp,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-primary text-primary-foreground relative">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="hero-gradient w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-sm text-primary-foreground">
                  VT
                </span>
              </div>
              <span className="font-heading font-bold text-lg">
                Vyaparion Traders
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Your trusted partner in premium trading solutions. We deliver
              excellence and innovation for businesses worldwide.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Home', 'About', 'Products', 'Services', 'Blog', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                      className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <h4 className="font-heading font-semibold mb-4">Policies</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Privacy Policy', to: '/policy' },
                { label: 'Return & Refund', to: '/return' },
                { label: 'Terms & Conditions', to: '/terms' },
                { label: 'Shipping Policy', to: '/shipping' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    href={item.to}
                    className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <h4 className="font-heading font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-primary-foreground/60 mb-4">
              Subscribe for updates and exclusive offers.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/10 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-semibold"
              >
                Join
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2026 Vyaparion Traders. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};