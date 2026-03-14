import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { FEATURED_PRODUCTS } from '@/lib/products';
import Link from 'next/link';
import { ArrowRight, Zap, Truck, Shield } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Premium Streetwear for Modern Living
                </h1>
                <p className="text-lg text-gray-100 mb-6">
                  Discover Cloud9's exclusive collection of t-shirts, shorts, and shoes. Quality, style, and affordability in every piece.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/products"
                    className="bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition flex items-center gap-2"
                  >
                    Shop Now
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/about"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">☁️</div>
                <p className="text-primary font-bold text-xl">Cloud9</p>
                <p className="text-gray-600 text-sm">Elevate Your Style</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-neutral-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Fast Shipping</h3>
                <p className="text-gray-600">Quick and reliable delivery to your doorstep</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Secure Payment</h3>
                <p className="text-gray-600">Safe and encrypted transactions</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Easy Returns</h3>
                <p className="text-gray-600">Hassle-free returns within 30 days</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                Featured Products
              </h2>
              <p className="text-gray-600 text-lg">
                Check out our most popular items
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {FEATURED_PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/products"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-neutral-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-neutral-dark">
              Shop by Category
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* T-Shirts */}
              <Link href="/products?category=tshirts">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-8 text-white text-center hover:shadow-lg transition cursor-pointer h-48 flex flex-col items-center justify-center">
                  <div className="text-5xl mb-4">👕</div>
                  <h3 className="text-2xl font-bold">T-Shirts</h3>
                  <p className="text-sm mt-2 opacity-90">Premium cotton tees</p>
                </div>
              </Link>

              {/* Shorts */}
              <Link href="/products?category=shorts">
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg p-8 text-white text-center hover:shadow-lg transition cursor-pointer h-48 flex flex-col items-center justify-center">
                  <div className="text-5xl mb-4">🩳</div>
                  <h3 className="text-2xl font-bold">Shorts</h3>
                  <p className="text-sm mt-2 opacity-90">Comfortable & stylish</p>
                </div>
              </Link>

              {/* Shoes */}
              <Link href="/products?category=shoes">
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg p-8 text-white text-center hover:shadow-lg transition cursor-pointer h-48 flex flex-col items-center justify-center">
                  <div className="text-5xl mb-4">👟</div>
                  <h3 className="text-2xl font-bold">Shoes</h3>
                  <p className="text-sm mt-2 opacity-90">Premium sneakers</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-6 opacity-90">
              Subscribe to our newsletter for exclusive offers and new product launches
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-neutral-dark focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
