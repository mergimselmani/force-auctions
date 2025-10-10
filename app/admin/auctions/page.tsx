'use client';
import React, { useEffect, useState } from 'react';

type Listing = { id: string; title: string; start_price: number; currency?: string; seller_name?: string; };
type Auction = { id: string; listing_id: string; start_at: string; floor_price: number; status: string; };

export default function Auctions() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [auctions, setAuctions] = useState<Auction[]>([]);
  const [msg, setMsg] = useState<string | null>(null);

  const load = async () => {
    const [lres, ares] = await Promise.all([
      fetch('/api/admin/listings'), fetch('/api/admin/auctions')
    ]);
    const l = await lres.json(); const a = await ares.json();
    setListings(l.rows || []); setAuctions(a.rows || []);
  };

  useEffect(() => { load(); }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = {
      listing_id: fd.get('listing_id'),
      start_at: fd.get('start_at'),
      floor_price: Number(fd.get('floor_price')),
      type: 'dutch',
    };
    const res = await fetch('/api/admin/auctions', {
      method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(body)
    });
    const j = await res.json();
    if (!res.ok) setMsg(j.error || 'Opslaan mislukt');
    else { setMsg('Auction opgeslagen'); (e.target as HTMLFormElement).reset(); load(); }
  };

  return (
    <div>
      <h1>Auctions</h1>
      {msg && <div className="card" style={{borderColor:'#f59e0b', marginTop:8}}>{msg}</div>}
      <form onSubmit={onSubmit} className="card" style={{display:'grid', gap:12, marginTop:12}}>
        <div style={{display:'grid', gap:6}}>
          <label>Listing</label>
          <select name="listing_id" required style={{height:44, padding:'0 12px', border:'1px solid #e5e7eb', borderRadius:10}}>
            <option value="">Kies een listing…</option>
            {listings.map(l => <option key={l.id} value={l.id}>{l.title}</option>)}
          </select>
        </div>
        <div style={{display:'grid', gap:6}}>
          <label>Starttijd</label>
          <input type="datetime-local" name="start_at" required style={{height:44, padding:'0 12px', border:'1px solid #e5e7eb', borderRadius:10}}/>
        </div>
        <div style={{display:'grid', gap:6}}>
          <label>Floor price (excl. btw)</label>
          <input type="number" name="floor_price" step="0.01" required style={{height:44, padding:'0 12px', border:'1px solid #e5e7eb', borderRadius:10}}/>
        </div>
        <button className="btn">Opslaan</button>
      </form>

      <div className="card" style={{marginTop:16}}>
        <b>Ingeplande auctions</b>
        <div style={{display:'grid', gap:8, marginTop:8}}>
          {auctions.length === 0 && <div style={{color:'#6b7280'}}>Nog geen auctions</div>}
          {auctions.map(a => (
            <div key={a.id} className="card" style={{display:'grid', gridTemplateColumns:'1fr auto'}}>
              <div>
                <div style={{fontWeight:700}}>Listing #{a.listing_id}</div>
                <div style={{fontSize:12, color:'#6b7280'}}>Start: {new Date(a.start_at).toLocaleString()} · Floor: {a.floor_price}</div>
              </div>
              <div style={{fontSize:12, color:'#6b7280'}}>{a.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
