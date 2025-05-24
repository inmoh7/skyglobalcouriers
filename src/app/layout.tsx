import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sky Global Couriers',
  description: 'This is the official website of Sky Global Courier services.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar />
      <body className={`${inter.className} antialiased`}>{children}</body>
      <Footer />
    </html>
  );
}
