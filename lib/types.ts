export type ProductCategory = 'tshirts' | 'shorts' | 'shoes';
export type Size = string;
export type Color = string;

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  images?: string[];
  sizes: Size[];
  colors: Color[];
  stock: number;
  rating: number;
  reviews: number;
  featured: boolean;
  createdAt: Date;
}

export interface CartItem {
  productId: string;
  quantity: number;
  size: Size;
  color: Color;
  price: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  customerName: string;
  customerEmail: string;
  shippingAddress: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}
