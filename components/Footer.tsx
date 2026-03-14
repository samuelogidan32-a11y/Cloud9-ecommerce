'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary text-sm font-bold">9</span>
              </div>
              Cloud9
            </h3>
            <p className="text-sm text-gray-400">
              Premium streetwear for the modern lifestyle. Quality, style, and accessibility.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=tshirts" className="hover:text-primary-light transition">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/products?category=shorts" className="hover:text-primary-light transition">
                  Shorts
                </Link>
              </li>
              <li>
                <Link href="/products?category=shoes" className="hover:text-primary-light transition">
                  Shoes
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-light transition">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary-light transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-light transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary-light transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-primary-light transition">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-light transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary-light transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary-light transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Cloud9. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-primary-light transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-light transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
