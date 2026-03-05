'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <Card className="group overflow-hidden rounded-2xl border-muted transition-shadow hover:shadow-lg">
        {/* ============ IMAGE ============== */}
        <Link href={`/products/${product.id}`}>
          <div className="relative h-52 w-full overflow-hidden bg-muted">
            <motion.div whileHover={{ scale: 1.05 }} className="h-full w-full">
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* ============ NEW BADGE ============= */}
            {product.isNew && (
              <Badge className="absolute top-3 left-3 bg-green-600 text-white">
                New
              </Badge>
            )}

            {/* =========== STOCK BADGE ============ */}
            {!product.isAvailable && (
              <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                Out of Stock
              </Badge>
            )}
          </div>
        </Link>

        {/* ============ CONTENT =========== */}
        <CardContent className="space-y-2 pt-4">
          <p className="text-xs uppercase text-muted-foreground">
            {product.category}
          </p>

          <h3 className="font-semibold leading-tight line-clamp-1">
            {product.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.desc}
          </p>

          {/* ============ RATING ============== */}
          <div className="flex items-center gap-1 text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{product.rating}</span>
            <span className="text-muted-foreground">({product.reviews})</span>
          </div>

          {/* ============= STOCK ============== */}
          <p className="text-xs text-muted-foreground">
            {product.stock} items left
          </p>
        </CardContent>

        {/* ============= FOOTER ============= */}
        <CardFooter className="flex items-center justify-between">
          {/* <span className="text-lg font-bold text-primary">
            {product.priceDisplay}
          </span> */}

          <Button
            size="icon"
            disabled={!product.isAvailable}
            className="rounded-xl"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart size={18} />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}