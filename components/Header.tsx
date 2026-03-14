'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl hover:opacity-80">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary font-bold">9</span>
            </div>
            <span>Cloud9</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/products?category=tshirts" className="hover:text-primary-light transition">
              T-Shirts
            </Link>
            <Link href="/products?category=shorts" className="hover:text-primary-light transition">
              Shorts
            </Link>
            <Link href="/products?category=shoes" className="hover:text-primary-light transition">
              Shoes
            </Link>
            <Link href="/about" className="hover:text-primary-light transition">
              About
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="relative p-2 hover:bg-primary-light rounded-lg transition"
              title="Shopping Cart"
            >
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-accent text-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-primary-light rounded-lg transition"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <Link
              href="/products?category=tshirts"
              className="px-4 py-2 hover:bg-primary-light rounded transition"
            >
              T-Shirts
            </Link>
            <Link
              href="/products?category=shorts"
              className="px-4 py-2 hover:bg-primary-light rounded transition"
            >
              Shorts
            </Link>
            <Link
              href="/products?category=shoes"
              className="px-4 py-2 hover:bg-primary-light rounded transition"
            >
              Shoes
            </Link>
            <Link href="/about" className="px-4 py-2 hover:bg-primary-light rounded transition">
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
