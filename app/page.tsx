import Link from 'next/link';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

export default async function HomePage(){
  const sb = getSupabaseAdmin();
  const { data: live } = await sb
    .from('auctions')
    .select('id, listing_id, floor_price, market_value, duration_sec, start_at, started_at, status')
    .or(`status.eq.live,status.eq.scheduled`)
    .order('start_at', { ascending: true });

  return (
    <div className="container" style={{paddingTop:24}}>
      <h1>Live & Upcoming Auctions</h1>
      <div className="grid" style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px,1fr))', gap:12, marginTop:12}}>
        {(live||[]).map(a => (
          <Link key={a.id} href={`/auction/${a.id}`} className="card" style={{display:'block'}}>
            <div><b>Auction #{a.id}</b></div>
            <div style={{fontSize:12, color:'#6b7280'}}>Start: {a.start_at ? new Date(a.start_at).toLocaleString() : '—'}</div>
            <div style={{fontSize:12, color:'#6b7280'}}>Min: €{a.floor_price} · Market: {a.market_value ?? '—'}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
