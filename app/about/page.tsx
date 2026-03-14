import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Cloud9</h1>
            <p className="text-lg opacity-90">
              Discover the story behind your favorite streetwear brand
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-neutral-dark mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Cloud9 is dedicated to providing premium streetwear that combines quality, style, and affordability. We believe that everyone deserves access to high-quality fashion without breaking the bank.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our carefully curated collection of t-shirts, shorts, and shoes is designed for the modern lifestyle. Each piece is selected for its quality, durability, and style.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We're committed to excellent customer service and ensuring every Cloud9 customer has a fantastic shopping experience.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-lg p-12 text-white text-center">
                <div className="text-6xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold mb-2">Cloud9</h3>
                <p className="text-lg opacity-90">Elevate Your Style</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-neutral-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-neutral-dark mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-bold text-lg mb-2">Quality</h3>
                <p className="text-gray-600">
                  We source premium materials and ensure every product meets our high standards for durability and comfort.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="font-bold text-lg mb-2">Style</h3>
                <p className="text-gray-600">
                  Our designs are contemporary and trendy, perfect for expressing your unique urban fashion sense.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="font-bold text-lg mb-2">Affordability</h3>
                <p className="text-gray-600">
                  Premium quality doesn't have to be expensive. We offer competitive prices without compromising quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-neutral-dark mb-12">Why Choose Cloud9?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Curated Selection</h3>
                  <p className="text-gray-600">
                    Every product is carefully selected for quality and style
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Fast Shipping</h3>
                  <p className="text-gray-600">
                    Quick and reliable delivery to your doorstep
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Secure Payment</h3>
                  <p className="text-gray-600">
                    Safe and encrypted transactions for peace of mind
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Easy Returns</h3>
                  <p className="text-gray-600">
                    Hassle-free returns within 30 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Style?</h2>
            <p className="text-lg opacity-90 mb-8">
              Explore our full collection of premium streetwear
            </p>
            <Link
              href="/products"
              className="inline-block bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Shop Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
