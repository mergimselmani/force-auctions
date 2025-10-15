export const dynamic = 'force-dynamic';
export const revalidate = 0;

import './globals.css';
import NavBar from '@/components/NavBar';
import { AuthProvider } from '@/components/AuthProvider';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Force Auctions',
  description: 'Dutch-style auctions for heavy machinery.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <AuthProvider>
          <NavBar />
          <main className="container mx-auto px-4 py-6">{children}</main>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
