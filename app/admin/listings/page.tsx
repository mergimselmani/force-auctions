'use client';
import React, { useEffect, useState } from 'react';

type Listing = {
  id: string;
  title: string;
  description?: string;
  start_price: number;
  currency?: string;
  seller_name?: string;
};

export default function Listings() {
  const [items, setItems] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/listings');
    const j = await res.json();
    if (!res.ok) { setMsg(j.error || 'Kon listings niet laden'); setItems([]); }
    else setItems(j.rows || []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = {
      title: fd.get('title'),
      description: fd.get('description'),
      start_price: Number(fd.get('start_price')),
      currency: fd.get('currency') || 'EUR',
      seller_name: fd.get('seller_name') || 'Unknown Seller',
    };
    const res = await fetch('/api/admin/listings', {
      method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify(body)
    });
    const j = await res.json();
    if (!res.ok) { setMsg(j.error || 'Opslaan mislukt'); }
    else { setMsg('Listing opgeslagen'); (e.target as HTMLFormElement).reset(); load(); }
  };

  return (
    <div>
      <h1>Listings</h1>
      {msg && <div className="card" style={{borderColor:'#f59e0b', marginTop:8}}>{msg}</div>}
      <form onSubmit={onSubmit} className="card" style={{display:'grid', gap:12, marginTop:12}}>
        <div style={{display:'grid', gap:6}}>
          <label>Titel</label>
          <input name="title" required style={{height:44, padding:'0 12px', border:'1px solid #e5e7eb', borderRadius:10}}/>
        </div>
        <div style={{display:'grid', gap:6}}>
          <label>Beschrijving</label>
          <textarea name="description" rows={4} style={{padding:12, border:'1px solid #e5e7eb', borderRadius:10}}/>
        </div>
        <div style={{display:'grid', gap:6}}>
          <label>Startprijs (excl. btw)</label>
          <input name="start_price" type="number" step="0.01" required style={{height:44, padding:'0 12px', border:'1px solid #e5e7eb', borderRadius:10}}/>
        </div>
        <div style={{display:'grid', gap:6}}>
          <label>Valuta</label>
          <input name="currency" defaultValue="EUR" style={{height:44, padding:'0 12px', border:'1px solid #e5e7eb', borderRadius:10}}/>
        </div>
        <div style={{display:'grid', gap:6}}>
          <label>Verkoper (naam zichtbaar)</label>
          <input name="seller_name" placeholder="Wido Trading BV" style={{height:44, padding:'0 12px', border:'1px solid #e5e7eb', borderRadius:10}}/>
        </div>
        <button className="btn">Opslaan</button>
      </form>

      <div className="card" style={{marginTop:16}}>
        <b>Huidige listings</b>
        {loading ? <div style={{marginTop:8}}>Laden…</div> : (
          <div style={{display:'grid', gap:8, marginTop:8}}>
            {items.length === 0 && <div style={{color:'#6b7280'}}>Nog geen listings</div>}
            {items.map(x => (
              <div key={x.id} className="card" style={{display:'grid', gridTemplateColumns:'1fr auto', alignItems:'center'}}>
                <div>
                  <div style={{fontWeight:700}}>{x.title}</div>
                  <div style={{fontSize:12, color:'#6b7280'}}>Seller: {x.seller_name || '—'} · Start: {x.currency||'EUR'} {x.start_price}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
