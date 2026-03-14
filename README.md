# Cloud9 E-Commerce Platform

A modern, responsive e-commerce platform for Cloud9 streetwear brand. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Product Catalog**: Browse t-shirts, shorts, and shoes with detailed information
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Product Filtering**: Filter products by category and sort by price, rating, or newest
- **Shopping Cart**: Add items to cart with size and color selection
- **Order Management**: Track orders and manage customer information
- **Admin Dashboard**: Manage products, inventory, and orders
- **Mobile Optimized**: Perfect for shopping on the go

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: Ready for integration (MongoDB, PostgreSQL, etc.)
- **Payment**: Ready for Stripe/PayPal integration

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
cloud9-store/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── products/          # Products page
│   ├── cart/              # Shopping cart page
│   ├── about/             # About page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx         # Header component
│   ├── Footer.tsx         # Footer component
│   └── ProductCard.tsx    # Product card component
├── lib/                   # Utilities and helpers
│   ├── types.ts          # TypeScript types
│   └── products.ts       # Sample products data
├── public/               # Static assets
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── tailwind.config.js    # Tailwind config
└── next.config.js        # Next.js config
```

## Product Management

### Adding New Products

Edit `lib/products.ts` to add new products to the catalog:

```typescript
{
  id: '7',
  name: 'Product Name',
  description: 'Product description',
  price: 49.99,
  category: 'tshirts', // or 'shorts', 'shoes'
  image: 'https://image-url.com/product.jpg',
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['Black', 'White'],
  stock: 50,
  rating: 4.5,
  reviews: 100,
  featured: true,
  createdAt: new Date(),
}
```

### Updating Inventory

Update the `stock` field in the product object to reflect current inventory levels.

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: '#1a3a52',
  'primary-light': '#4a90e2',
  accent: '#f39c12',
  // ... more colors
}
```

### Branding

- Update logo in `components/Header.tsx`
- Modify brand name and description in `app/layout.tsx`
- Customize footer content in `components/Footer.tsx`

## Future Enhancements

- [ ] User authentication and accounts
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Order tracking system
- [ ] Customer reviews and ratings
- [ ] Wishlist functionality
- [ ] Product search functionality
- [ ] Admin dashboard for inventory management
- [ ] Email notifications
- [ ] Analytics and reporting

## License

This project is proprietary to Cloud9 Brand.

## Support

For questions or support, contact: support@cloud9.com
