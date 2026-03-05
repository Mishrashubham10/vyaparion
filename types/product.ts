import { StaticImageData } from "next/image";

export interface Product {
  id: string;
  slug: string;

  title: string;
  category: string;

  price: number;

  desc: string;
  details: string;

  img: string | StaticImageData;

  brand: string;
  ageGroup: string;

  stock: number;
  rating: number;
  reviews: number;

  isAvailable: boolean;
  isNew: boolean;
  featured: boolean;
}