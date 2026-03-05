'use client';

import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

export default function ProductDetailsPage() {
  const { productId } = useParams();
  console.log(productId)
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* ============ PRODUCT IMAGE ============ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card rounded-2xl p-10 flex items-center justify-center"
        >
          <Image
            src={product.img}
            alt={product.title}
            width={500}
            height={400}
            className="rounded-xl object-cover"
          />
        </motion.div>

        {/* ============= PRODUCT INFO ============== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-sm text-accent font-semibold uppercase tracking-wide">
            {product.category}
          </span>

          <h1 className="text-4xl font-heading font-bold mt-2 mb-4">
            {product.title}
          </h1>

          <p className="text-muted-foreground mb-6">{product.desc}</p>

          <div className="text-3xl font-bold text-accent mb-6">
            ₹{product.price}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}