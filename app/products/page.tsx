'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { SAMPLE_PRODUCTS } from '@/lib/products';
import { ProductCategory } from '@/lib/types';
import { Filter, X } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') as ProductCategory | null;

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(categoryParam);
  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high' | 'rating'>('newest');
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let products = SAMPLE_PRODUCTS;

    // Filter by category
    if (selectedCategory) {
      products = products.filter((p) => p.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        products = [...products].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products = [...products].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        products = [...products].sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      default:
        products = [...products].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }

    return products;
  }, [selectedCategory, sortBy]);

  const categories: { value: ProductCategory; label: string }[] = [
    { value: 'tshirts', label: 'T-Shirts' },
    { value: 'shorts', label: 'Shorts' },
    { value: 'shoes', label: 'Shoes' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-neutral-dark mb-2">Shop Products</h1>
            <p className="text-gray-600">
              Showing {filteredAndSortedProducts.length} product
              {filteredAndSortedProducts.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 sticky top-20">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-bold text-lg flex items-center gap-2">
                    <Filter size={20} />
                    Filters
                  </h2>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden text-gray-600"
                  >
                    {showFilters ? <X size={20} /> : <Filter size={20} />}
                  </button>
                </div>

                {(showFilters || window.innerWidth >= 1024) && (
                  <>
                    {/* Category Filter */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-neutral-dark mb-3">Category</h3>
                      <div className="space-y-2">
                        <button
                          onClick={() => setSelectedCategory(null)}
                          className={`block w-full text-left px-3 py-2 rounded transition ${
                            selectedCategory === null
                              ? 'bg-primary text-white'
                              : 'hover:bg-neutral-light'
                          }`}
                        >
                          All Products
                        </button>
                        {categories.map((cat) => (
                          <button
                            key={cat.value}
                            onClick={() => setSelectedCategory(cat.value)}
                            className={`block w-full text-left px-3 py-2 rounded transition ${
                              selectedCategory === cat.value
                                ? 'bg-primary text-white'
                                : 'hover:bg-neutral-light'
                            }`}
                          >
                            {cat.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Sort */}
                    <div>
                      <h3 className="font-semibold text-neutral-dark mb-3">Sort By</h3>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      >
                        <option value="newest">Newest</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                      </select>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {filteredAndSortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAndSortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg p-12 text-center">
                  <p className="text-gray-600 text-lg">No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
