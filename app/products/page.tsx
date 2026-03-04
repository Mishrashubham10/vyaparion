"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { fadeUp, staggerContainer, scaleIn } from '@/lib/motion';
import { categories, products } from '@/data/products';

export default function ProductsPage() {
  const [active, setActive] = useState('All');
  const filtered =
    active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <>
      <section className="hero-gradient py-24 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4"
          >
            Our Products
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-primary-foreground/60 max-w-xl mx-auto"
          >
            Browse our premium range of trading products across multiple
            industries.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-accent/10'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={active}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                variants={scaleIn}
                whileHover={{ y: -8 }}
                className="glass-card rounded-2xl overflow-hidden card-elevated group"
              >
                <div className="p-8 text-center bg-muted/30">
                  <span className="text-6xl group-hover:scale-110 inline-block transition-transform duration-300">
                    {p.img}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[10px] uppercase tracking-wider text-accent font-semibold">
                    {p.category}
                  </span>
                  <h4 className="font-heading font-semibold text-foreground mt-1 mb-1">
                    {p.title}
                  </h4>
                  <p className="text-muted-foreground text-xs mb-3">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent font-bold text-lg">
                      {p.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-9 h-9 rounded-lg bg-accent text-accent-foreground flex items-center justify-center"
                    >
                      <ShoppingCart size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};