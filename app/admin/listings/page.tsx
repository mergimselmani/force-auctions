'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Listing = { id: string; title: string; description?: string|null; start_price: number; currency?: string; seller_name?: string; };

export default function ListingsAdmin(){
  const [rows, setRows] = useState<Listing[]>([]);
  const [msg, setMsg] = useState<string|null>(null);

  const load = async () => {
    const r = await fetch('/api/admin/listings'); const j = await r.json();
    setRows(j.rows ?? []);
  };
  useEffect(()=>{ load(); }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setMsg(null);
    const fd = new FormData(e.currentTarget);
    const body = {
      title: fd.get('title'),
      description: fd.get('description'),
      start_price: Number(fd.get('start_price')),
      currency: fd.get('currency') || 'EUR',
      seller_name: fd.get('seller_name')
    };
    const res = await fetch('/api/admin/listings', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)});
    const j = await res.json();
    if (!res.ok) setMsg(j.error || 'Opslaan mislukt');
    else { setMsg('Listing aangemaakt'); (e.target as HTMLFormElement).reset(); load(); }
  };

  async function onPhotoSelect(listing_id: string, file: File){
    const r = await fetch('/api/upload/create-url', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ fileName: file.name, contentType: file.type })
    });
    const j = await r.json();
    if (!j.ok) { alert(j.error || 'Kon upload URL niet maken'); return; }
    const up = await supabase.storage.from('photos').uploadToSignedUrl(j.path, j.token, file);
    if (up.error) { alert(up.error.message); return; }
    await fetch('/api/admin/photos', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ listing_id, path: j.path }) });
    alert('Foto toegevoegd');
  }

  return (
    <div className="container" style={{paddingTop:24}}>
      <h1>Listings</h1>
      {msg && <div className="card" style={{borderColor:'#f59e0b', marginTop:8}}>{msg}</div>}
      <form onSubmit={onSubmit} className="card" style={{display:'grid', gap:12, marginTop:12}}>
        <input name="title" placeholder="Titel" required style={{height:44, padding:'0 12px', border:'1px solid #e5e7eb', borderRadius:10}} />
        <textarea name="description" placeholder="Beschrijving" rows={4} style={{padding:'8px 12px', border:'1px solid #e5e7eb', borderRadius:10}} />
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
          <input name="start_price" type="number" step="0.01" placeholder="Startprijs" required style={{height:44, padding:'0 12px', border:'1px solid #e5e7eb', borderRadius:10}} />
          <input name="currency" placeholder="Valuta" defaultValue="EUR" style={{height:44, padding:'0 12px', border:'1px solid #e5e7eb', borderRadius:10}} />
        </div>
        <input name="seller_name" placeholder="Verkopernaam (zichtbaar)" style={{height:44, padding:'0 12px', border:'1px solid #e5e7eb', borderRadius:10}} />
        <button className="btn">Opslaan</button>
      </form>

      <div className="card" style={{marginTop:16}}>
        <b>Bestaande listings</b>
        <div style={{display:'grid', gap:12, marginTop:8}}>
          {rows.map(l => (
            <div key={l.id} className="card" style={{display:'grid', gap:8}}>
              <div style={{fontWeight:700}}>{l.title}</div>
              <div style={{fontSize:12, color:'#6b7280'}}>Start: {l.start_price} {l.currency || 'EUR'} · Verkoper: {l.seller_name || '—'}</div>
              <div>
                <label className="btn">
                  Upload photo
                  <input type="file" accept="image/*" style={{display:'none'}} onChange={e=>{ const f=e.target.files?.[0]; if (f) onPhotoSelect(l.id, f); }} />
                </label>
              </div>
            </div>
          ))}
          {rows.length===0 && <div style={{color:'#6b7280'}}>Nog geen listings</div>}
        </div>
      </div>
    </div>
  );
}
