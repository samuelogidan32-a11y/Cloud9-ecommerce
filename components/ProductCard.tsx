'use client';

import Link from 'next/link';
import { Product } from '@/lib/types';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden group">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-neutral-light h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />
        {product.stock < 10 && product.stock > 0 && (
          <div className="absolute top-3 right-3 bg-warning text-white px-3 py-1 rounded-full text-xs font-semibold">
            Only {product.stock} left
          </div>
        )}
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-primary-light font-semibold uppercase mb-2">
          {product.category}
        </p>

        {/* Name */}
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg text-neutral-dark hover:text-primary transition mb-2 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">({product.reviews})</span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <span className="font-bold text-xl text-primary">${product.price.toFixed(2)}</span>
          <button
            disabled={product.stock === 0}
            className="p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            title="Add to Cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
