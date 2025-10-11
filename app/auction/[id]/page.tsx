'use client';
import React, { useEffect, useState } from 'react';
import AuctionClock from '@/components/AuctionClock';

type AuctionDto = {
  id: string; listing_id: string; start_at: string | null; started_at?: string | null;
  floor_price: number; market_value?: number | null; duration_sec: number;
  stop_at_market: boolean; market_stop_threshold: number;
};

export default function AuctionPage({ params }: { params: { id: string } }) {
  const [auction, setAuction] = useState<AuctionDto | null>(null);
  const [startPrice, setStartPrice] = useState<number>(0);
  const [startedAtMs, setStartedAtMs] = useState<number>(Date.now());
  const [msg, setMsg] = useState<string | null>(null);

  const load = async () => {
    const r = await fetch(`/api/auction/${params.id}`, { cache:'no-store' });
    const j = await r.json();
    if (!j.ok) { setMsg(j.error || 'not found'); return; }
    setAuction(j.auction);
    const lr = await fetch(`/api/admin/listings?id=${j.auction.listing_id}`, { cache:'no-store' }).catch(()=>null);
    const lj = lr ? await lr.json() : null;
    const sp = lj?.rows?.[0]?.start_price ?? 0;
    setStartPrice(sp);
    const s = j.auction.started_at ?? j.auction.start_at;
    setStartedAtMs(s ? new Date(s).getTime() : Date.now());
  };
  useEffect(()=>{ load(); }, []);

  const buy = async () => {
    setMsg('Bezig met kopen…');
    const res = await fetch(`/api/auction/${params.id}`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ action:'buy' }) });
    const j = await res.json();
    if (!res.ok) setMsg(j.error || 'Mislukt'); else setMsg(`Gekocht voor €${j.price}`);
  };

  if (!auction) return <div className="container" style={{paddingTop:40}}>Laden…</div>;

  return (
    <div className="container" style={{paddingTop:24}}>
      <h1>Auction #{auction.id}</h1>
      <div className="card" style={{display:'grid', gap:16}}>
        <AuctionClock
          startPrice={startPrice}
          floorPrice={auction.floor_price}
          durationSec={auction.duration_sec}
          startedAtMs={startedAtMs}
          marketValue={auction.market_value ?? undefined}
          stopAtMarket={auction.stop_at_market}
          marketStopThreshold={auction.market_stop_threshold}
          onStopNearMarket={(p)=>setMsg(`Klok gestopt nabij marktwaarde op €${p}`)}
        />
        <div style={{display:'flex', gap:12}}>
          <button className="btn" onClick={buy}>Take it</button>
          {msg && <div style={{alignSelf:'center'}}>{msg}</div>}
        </div>
      </div>
    </div>
  );
}
