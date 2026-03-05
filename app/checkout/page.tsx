'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { fadeUp } from '@/lib/motion';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);

  const update = (key: string, val: string) =>
    setForm((p) => ({ ...p, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(form).some((v) => !v)) {
      toast.error('Please fill all fields');
      return;
    }
    if (items.length === 0) {
      toast.error('Cart is empty');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      clearCart();
      router.push('/order-confirmation');
    }, 1500);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors';

  return (
    <>
      <section className="hero-gradient py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground"
          >
            Checkout
          </motion.h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2"
            >
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-6 card-elevated space-y-4"
              >
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                  Shipping Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Full Name
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className={inputClass}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className={inputClass}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Address
                  </label>
                  <input
                    value={form.address}
                    onChange={(e) => update('address', e.target.value)}
                    className={inputClass}
                    placeholder="123 Street"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      City
                    </label>
                    <input
                      value={form.city}
                      onChange={(e) => update('city', e.target.value)}
                      className={inputClass}
                      placeholder="Mumbai"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      ZIP Code
                    </label>
                    <input
                      value={form.zip}
                      onChange={(e) => update('zip', e.target.value)}
                      className={inputClass}
                      placeholder="400001"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Phone
                    </label>
                    <input
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className={inputClass}
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-accent text-accent-foreground font-semibold text-sm glow-accent disabled:opacity-50 mt-4"
                >
                  {loading
                    ? 'Processing...'
                    : `Place Order — ₹${Math.round(totalPrice * 1.08).toLocaleString()}`}
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="glass-card rounded-2xl p-6 card-elevated h-fit sticky top-24"
            >
              <h3 className="font-heading font-bold text-foreground text-lg mb-4">
                Order Summary
              </h3>
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    {/* <span className="text-xl">{item.img}</span> */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground truncate">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        x{item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="text-foreground">
                    ₹{Math.round(totalPrice * 0.08).toLocaleString()}
                  </span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between font-bold">
                  <span className="text-foreground">Total</span>
                  <span className="text-accent">
                    ₹{Math.round(totalPrice * 1.08).toLocaleString()}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};