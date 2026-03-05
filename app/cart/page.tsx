'use client';

import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { fadeUp, staggerContainer } from '@/lib/motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Cart() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <>
      {/* ================ HERO ================= */}
      <section className="hero-gradient py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-2"
          >
            Shopping Cart
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-primary-foreground/60"
          >
            {totalItems} item{totalItems !== 1 && 's'} in your cart
          </motion.p>
        </div>
      </section>

      {/* ============== CART =============== */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {items.length === 0 ? (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center py-20"
            >
              <ShoppingBag
                size={64}
                className="mx-auto text-muted-foreground/30 mb-4"
              />

              <h2 className="text-xl font-heading font-semibold text-foreground mb-2">
                Your cart is empty
              </h2>

              <p className="text-muted-foreground text-sm mb-6">
                Browse our products and add items to your cart.
              </p>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold text-sm"
              >
                Browse Products <ArrowRight size={16} />
              </Link>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* ================= ITEMS ================= */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="lg:col-span-2 space-y-4"
              >
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={fadeUp}
                    className="glass-card rounded-xl p-4 flex items-center gap-4"
                  >
                    {/* ================= PRODUCT IMAGE ================= */}
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                        priority={false}
                      />
                    </div>

                    {/* ================= PRODUCT INFO ================= */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading font-semibold text-foreground text-sm truncate">
                        {item.title}
                      </h4>

                      <p className="text-muted-foreground text-xs">
                        {item.category}
                      </p>
                    </div>

                    {/* ================= QUALITY CONTROLS ================= */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Minus size={14} />
                      </button>

                      <span className="w-8 text-center text-sm font-medium text-foreground">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* ================= PRICE ================= */}
                    <p className="font-bold text-foreground text-sm w-20 text-right">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </p>

                    {/* ================= REMOVE ================= */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </motion.div>
                ))}

                <button
                  onClick={clearCart}
                  className="text-sm text-muted-foreground hover:text-destructive transition-colors"
                >
                  Clear Cart
                </button>
              </motion.div>

              {/* ================= SUMMARY ================= */}
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
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">
                      ₹{totalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground">Free</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="text-foreground">
                      ₹{Math.round(totalPrice * 0.08).toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="border-t border-border pt-3 flex justify-between font-bold">
                    <span className="text-foreground">Total</span>

                    <span className="text-accent">
                      ₹{Math.round(totalPrice * 1.08).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <Link href="/checkout">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-xl bg-accent text-accent-foreground font-semibold text-sm glow-accent"
                  >
                    Proceed to Checkout
                  </motion.button>
                </Link>

                <Link
                  href="/products"
                  className="block text-center text-sm text-muted-foreground mt-3 hover:text-accent transition-colors"
                >
                  Continue Shopping
                </Link>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}