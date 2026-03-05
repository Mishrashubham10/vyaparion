"use client";

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

const sections = [
  {
    title: 'Return Window',
    content:
      'You may return most items within 30 days of delivery for a full refund. Items must be in their original condition, unused, and in the original packaging.',
  },
  {
    title: 'Non-Returnable Items',
    content:
      "Custom-made products, perishable goods (agriculture products), and items marked as 'Final Sale' cannot be returned.",
  },
  {
    title: 'How to Initiate a Return',
    content:
      'Contact our support team at returns@vyaparion.com with your order number. We will provide a return shipping label and instructions.',
  },
  {
    title: 'Refund Processing',
    content:
      'Once we receive your returned item, we will inspect it and process your refund within 5-7 business days. Refunds will be credited to the original payment method.',
  },
  {
    title: 'Exchanges',
    content:
      "If you'd like to exchange an item, please initiate a return and place a new order for the desired item.",
  },
  {
    title: 'Damaged or Defective Items',
    content:
      'If you receive a damaged or defective item, contact us within 48 hours of delivery. We will arrange a free return and send a replacement at no extra cost.',
  },
];

const ReturnPolicy = () => (
  <>
    <section className="hero-gradient py-20 text-center">
      <div className="container mx-auto px-4">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground"
        >
          Return & Refund Policy
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-primary-foreground/60 mt-2"
        >
          Your satisfaction is our priority
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

export default ReturnPolicy;