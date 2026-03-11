'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();
  const router = useRouter();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'new':
        return 'bg-toy-mint text-white';
      case 'bestseller':
        return 'bg-toy-amber text-white';
      case 'sale':
        return 'bg-toy-coral text-white';
      default:
        return '';
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    router.push(`/products/${product.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="card-toy group"
    >
      {/* =========== IMAGE CONTAINER =========== */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.img}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            fill
          />
        </Link>

        {/* ============= WISHLIST BUTTON ============= */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-soft"
        >
          <Heart className="h-4 w-4 text-toy-coral" />
        </motion.button>

        {/* Quick Add Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all"
        >
          <Button
            onClick={handleAddToCart}
            className="w-full btn-primary font-semibold"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </motion.div>
      </div>

      {/* ============ CONTENT ============ */}
      <div className="p-4">
        {/* =========== CATEGORY ============= */}
        <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">
          {product.category.replace('-', ' ')}
        </p>

        {/* ============= NAME ============ */}
        <Link href={`/product/${product.id}`}>
          <h3 className="font-display font-bold text-foreground hover:text-primary transition-colors line-clamp-2 mb-2">
            {product.title}
          </h3>
        </Link>

        {/* ============ RATING ============ */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'h-3.5 w-3.5',
                  i < Math.floor(product.rating)
                    ? 'text-toy-amber fill-toy-amber'
                    : 'text-muted stroke-muted-foreground',
                )}
              />
            ))}
          </div>
          {/* <span className="text-xs text-muted-foreground ml-1">
            ({product.reviewCount})
          </span> */}
        </div>

        {/* =========== PRICE =========== */}
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-lg text-foreground">
            {formatPrice(product.price)}
          </span>
          {/* {product.price && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.price)}
            </span>
          )} */}
        </div>

        {/* ============ AGE GROUP =========== */}
        <p className="text-xs text-muted-foreground mt-2">
          Age: {product.ageGroup} years
        </p>
      </div>
    </motion.div>
  );
}
