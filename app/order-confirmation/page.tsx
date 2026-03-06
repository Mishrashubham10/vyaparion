'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { fadeUp } from '@/lib/motion';
import Link from 'next/link';

const substring = Math.random().toString(36).substr(2, 8).toUpperCase();

const OrderConfirmation = () => (
  <>
    <section className="py-24 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 max-w-lg text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="glass-card rounded-2xl p-10 card-elevated"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
          >
            <CheckCircle size={72} className="mx-auto text-accent mb-6" />
          </motion.div>
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
            Order Placed!
          </h1>
          <p className="text-muted-foreground text-sm mb-2">
            Thank you for your order. Your order number is{' '}
            <span className="font-bold text-accent">#{substring}</span>
          </p>
          <p className="text-muted-foreground text-xs mb-8">
            You&apos;ll receive a confirmation email with tracking details
            shortly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold text-sm"
            >
              Continue Shopping <ArrowRight size={16} />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold text-sm hover:bg-muted transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default OrderConfirmation;