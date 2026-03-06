'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { KeyRound } from 'lucide-react';
import { fadeUp } from '@/lib/motion';
import { toast } from 'sonner';
import Link from 'next/link';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    setSent(true);
    toast.success('Reset link sent to your email!');
  };

  return (
    <>
      <section className="py-24 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 max-w-md">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="glass-card rounded-2xl p-8 card-elevated"
          >
            <div className="text-center mb-8">
              <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <KeyRound className="text-accent" size={24} />
              </div>
              <h1 className="text-2xl font-heading font-bold text-foreground">
                Reset Password
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                We&apos;ll send you a reset link
              </p>
            </div>
            {sent ? (
              <div className="text-center">
                <p className="text-muted-foreground text-sm mb-4">
                  Check your email for the reset link. If you don&apos;t see it,
                  check your spam folder.
                </p>
                <Link
                  href="/login"
                  className="text-accent font-medium hover:underline text-sm"
                >
                  Back to Login
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl bg-accent text-accent-foreground font-semibold text-sm glow-accent"
                >
                  Send Reset Link
                </motion.button>
                <p className="text-center text-sm text-muted-foreground">
                  <Link
                    href="/login"
                    className="text-accent font-medium hover:underline"
                  >
                    Back to Login
                  </Link>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;