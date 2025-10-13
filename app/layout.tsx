import './globals.css';
import NavBar from '@/components/NavBar';

export const metadata = {
  title: 'Force Auctions',
  description: 'Dutch-style auctions for heavy machinery.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Inter, system-ui, Arial, sans-serif' }}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
// app/layout.tsx
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
      <body style={{ fontFamily: 'Inter, system-ui, Arial, sans-serif' }}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
