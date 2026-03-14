export const metadata = {
  title: 'Cloud9 - Premium Streetwear',
  description: 'Shop premium t-shirts, shorts, and shoes from Cloud9',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
