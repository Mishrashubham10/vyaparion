"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { fadeUp, staggerContainer, scaleIn } from '@/lib/motion';
import { categories, products } from '@/data/products';
import ProductCard from '@/components/products/ProdcutsCard';

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
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};