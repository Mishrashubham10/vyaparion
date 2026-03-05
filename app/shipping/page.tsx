"use client";

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

const sections = [
  {
    title: 'Shipping Methods',
    content:
      'We offer standard shipping (7-10 business days), express shipping (3-5 business days), and overnight shipping (1-2 business days) for select regions.',
  },
  {
    title: 'Free Shipping',
    content:
      'Orders above $500 qualify for free standard shipping within India. International orders above $2,000 qualify for free express shipping.',
  },
  {
    title: 'International Shipping',
    content:
      'We ship to over 50 countries worldwide. International shipping costs and delivery times vary by destination. Customs duties and taxes are the responsibility of the buyer.',
  },
  {
    title: 'Order Tracking',
    content:
      "Once your order is shipped, you'll receive a tracking number via email. You can track your order status on our website or the carrier's website.",
  },
  {
    title: 'Shipping Restrictions',
    content:
      'Some products may have shipping restrictions based on destination country regulations. We will notify you if your order is affected.',
  },
  {
    title: 'Lost or Damaged Shipments',
    content:
      'If your shipment is lost or arrives damaged, contact us immediately. We will file a claim with the carrier and arrange a replacement or refund.',
  },
];

const ShippingPolicy = () => (
  <>
    <section className="hero-gradient py-20 text-center">
      <div className="container mx-auto px-4">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground"
        >
          Shipping Policy
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-primary-foreground/60 mt-2"
        >
          Fast and reliable delivery worldwide
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

export default ShippingPolicy;