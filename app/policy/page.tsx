"use client";

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

const sections = [
  {
    title: 'Information We Collect',
    content:
      'We collect information you provide directly, such as your name, email address, shipping address, phone number, and payment information when you make a purchase. We also automatically collect certain information about your device and browsing behavior.',
  },
  {
    title: 'How We Use Your Information',
    content:
      'We use your information to process orders, communicate with you, improve our services, send promotional materials (with your consent), and comply with legal obligations.',
  },
  {
    title: 'Information Sharing',
    content:
      'We do not sell your personal information. We may share your data with trusted service providers who assist in operating our business, such as shipping carriers and payment processors.',
  },
  {
    title: 'Data Security',
    content:
      'We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.',
  },
  {
    title: 'Cookies',
    content:
      'We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.',
  },
  {
    title: 'Your Rights',
    content:
      'You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time by contacting us.',
  },
  {
    title: 'Contact Us',
    content:
      'If you have any questions about this Privacy Policy, please contact us at vypariontrapvtltd@gmail.com or call +91 8169757162.',
  },
];

const PrivacyPolicy = () => (
  <>
    <section className="hero-gradient py-20 text-center">
      <div className="container mx-auto px-4">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground"
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-primary-foreground/60 mt-2"
        >
          Last updated: March 2026
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

export default PrivacyPolicy;