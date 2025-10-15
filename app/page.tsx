export const dynamic = 'force-dynamic';
export const revalidate = 0;

import Link from 'next/link';
import AuctionClock from '@/components/AuctionClock';

export default function Home() {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Force Auctions</h1>
      <p className="mb-4">Live Dutch-style auctions (demo clock):</p>
      <AuctionClock start={26000} floor={16000} market={20000} durationSec={180} />
      <div className="flex gap-3 mt-2">
        <Link href="/admin/listings" className="underline">Admin Listings</Link>
      </div>
    </section>
  );
}
