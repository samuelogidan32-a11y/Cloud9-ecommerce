'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ShoppingCart, ArrowLeft } from 'lucide-react';

export default function CartPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary-dark mb-8">
            <ArrowLeft size={20} />
            Continue Shopping
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-8 text-center">
                <ShoppingCart size={48} className="mx-auto text-gray-400 mb-4" />
                <h2 className="text-2xl font-bold text-neutral-dark mb-2">Your cart is empty</h2>
                <p className="text-gray-600 mb-6">
                  Add some products to get started with your Cloud9 shopping experience
                </p>
                <Link
                  href="/products"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
                >
                  Browse Products
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 sticky top-20">
                <h3 className="font-bold text-lg mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>$0.00</span>
                  </div>
                </div>

                <div className="flex justify-between font-bold text-lg mb-6">
                  <span>Total</span>
                  <span className="text-primary">$0.00</span>
                </div>

                <button
                  disabled
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Proceed to Checkout
                </button>

                <p className="text-xs text-gray-600 text-center mt-4">
                  Add items to your cart to proceed with checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
