"use client";

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

const sections = [
  {
    title: 'Acceptance of Terms',
    content:
      'By accessing and using Vyaparion Traders website and services, you accept and agree to be bound by these Terms and Conditions.',
  },
  {
    title: 'Products and Pricing',
    content:
      'All product descriptions and prices are subject to change without notice. We reserve the right to modify or discontinue any product. Prices are in USD unless otherwise stated.',
  },
  {
    title: 'Orders and Payment',
    content:
      'All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order. Payment must be received before order processing.',
  },
  {
    title: 'Shipping',
    content:
      'Shipping times are estimates and not guaranteed. We are not responsible for delays caused by shipping carriers or customs processing.',
  },
  {
    title: 'Limitation of Liability',
    content:
      'Vyaparion Traders shall not be liable for any indirect, incidental, or consequential damages arising from use of our products or services.',
  },
  {
    title: 'Intellectual Property',
    content:
      'All content on this website, including text, images, logos, and software, is the property of Vyaparion Traders and protected by intellectual property laws.',
  },
  {
    title: 'Governing Law',
    content:
      'These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai.',
  },
];

const TermsConditions = () => (
  <>
    <section className="hero-gradient py-20 text-center">
      <div className="container mx-auto px-4">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground"
        >
          Terms & Conditions
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-primary-foreground/60 mt-2"
        >
          Please read these terms carefully
        </motion.p>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl space-y-8">
        {sections.map((s, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6 card-elevated"
          >
            <h2 className="font-heading font-bold text-foreground text-lg mb-2">
              {s.title}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {s.content}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default TermsConditions;