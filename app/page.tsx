export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#1a3a52', color: 'white', padding: '1rem', textAlign: 'center' }}>
        <h1>Cloud9 - Premium Streetwear</h1>
        <p>Shop T-Shirts, Shorts & Shoes</p>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <h2>Welcome to Cloud9</h2>
        <p>Your premium destination for quality streetwear and urban fashion.</p>

        {/* Products Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          {/* Product 1 */}
          <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#f0f0f0', height: '200px', marginBottom: '1rem', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span>👕</span>
            </div>
            <h3>Classic Cloud9 T-Shirt</h3>
            <p>Premium cotton tee</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a3a52' }}>$29.99</p>
            <button style={{ backgroundColor: '#1a3a52', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
              Add to Cart
            </button>
          </div>

          {/* Product 2 */}
          <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#f0f0f0', height: '200px', marginBottom: '1rem', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span>🩳</span>
            </div>
            <h3>Urban Streetwear Shorts</h3>
            <p>Comfortable & stylish</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a3a52' }}>$39.99</p>
            <button style={{ backgroundColor: '#1a3a52', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
              Add to Cart
            </button>
          </div>

          {/* Product 3 */}
          <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#f0f0f0', height: '200px', marginBottom: '1rem', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span>👟</span>
            </div>
            <h3>Premium Canvas Sneakers</h3>
            <p>High-quality sneakers</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a3a52' }}>$79.99</p>
            <button style={{ backgroundColor: '#1a3a52', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
              Add to Cart
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#2c3e50', color: 'white', padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
        <p>&copy; 2024 Cloud9. All rights reserved.</p>
      </footer>
    </div>
  );
}
