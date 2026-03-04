'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  light = false,
}: Props) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className={`mb-12 ${centered ? 'text-center' : ''}`}
  >
    <h2
      className={`text-3xl md:text-4xl font-heading font-bold mb-3 ${light ? 'text-primary-foreground' : 'text-foreground'}`}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={`max-w-2xl text-sm md:text-base ${centered ? 'mx-auto' : ''} ${light ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}
      >
        {subtitle}
      </p>
    )}
    <div
      className={`mt-4 h-1 w-16 rounded-full bg-accent ${centered ? 'mx-auto' : ''}`}
    />
  </motion.div>
);