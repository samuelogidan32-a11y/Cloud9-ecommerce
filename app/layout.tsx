import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cloud9 - Premium Streetwear',
  description: 'Shop premium t-shirts, shorts, and shoes from Cloud9. Urban fashion for the modern lifestyle.',
  keywords: 'streetwear, fashion, t-shirts, shorts, shoes, urban style',
  openGraph: {
    title: 'Cloud9 - Premium Streetwear',
    description: 'Shop premium t-shirts, shorts, and shoes from Cloud9',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white dark:bg-neutral-dark">
        {children}
      </body>
    </html>
  );
}
