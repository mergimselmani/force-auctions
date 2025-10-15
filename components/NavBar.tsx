import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="w-full border-b mb-4">
      <div className="max-w-5xl mx-auto p-3 flex gap-4">
        <Link href="/">Force Auctions</Link>
        <Link href="/admin/listings">Admin Listings</Link>
      </div>
    </nav>
  );
}
