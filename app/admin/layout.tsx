import React from 'react';
import Link from 'next/link';

export const metadata = { title: 'Admin · Force Auctions' };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="header">
        <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div className="brand"><span className="force">FORCE</span> <span className="auctions">AUCTIONS</span></div>
          <nav style={{display:'flex', gap:16}}>
            <Link href="/admin">Dashboard</Link>
            <Link href="/admin/listings">Listings</Link>
            <Link href="/admin/auctions">Auctions</Link>
            <Link href="/admin/tools">Tools</Link>
          </nav>
        </div>
      </div>
      <main className="container" style={{paddingTop:24}}>{children}</main>
    </div>
  );
}
