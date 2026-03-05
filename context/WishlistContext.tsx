'use client';

import { Product } from '@/types/product';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

interface WishlistContextType {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined,
);

export const useWishlist = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error('useWishlist must be used inside WishlistProvider');
  }

  return context;
};

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  /**
   * Safe initialization for SSR
   */
  const [items, setItems] = useState<Product[]>(() => {
    if (typeof window === 'undefined') return [];

    try {
      const stored = localStorage.getItem('vt_wishlist');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  /**
   * Persist wishlist to localStorage
   */
  useEffect(() => {
    try {
      localStorage.setItem('vt_wishlist', JSON.stringify(items));
    } catch {}
  }, [items]);

  const addToWishlist = (product: Product) => {
    setItems((prev) =>
      prev.find((i) => i.id === product.id) ? prev : [...prev, product],
    );
  };

  const removeFromWishlist = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const isInWishlist = (id: string) => {
    return items.some((i) => i.id === id);
  };

  const clearWishlist = () => {
    setItems([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        items,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};