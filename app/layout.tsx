export const dynamic = 'force-dynamic';
export const revalidate = 0;

import './globals.css';
import NavBar from '@/components/NavBar';

export const metadata = {
  title: 'Force Auctions',
  description: 'Dutch-style auctions for heavy machinery.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
