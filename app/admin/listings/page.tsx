'use client';
export const dynamic = 'force-dynamic';

import React, { useEffect, useState } from 'react';

type Listing = { id: string; title: string; description?: string|null; start_price: number; currency?: string; seller_name?: string; };

export default function ListingsAdmin() {
  const [rows, setRows] = useState<Listing[]>([]);
  const [msg, setMsg] = useState<string|null>(null);

  const load = async () => {
    const r = await fetch('/api/admin/listings', { cache: 'no-store' });
    const j = await r.json();
    setRows(j.rows ?? []);
  };

  useEffect(() => { load(); }, []);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault(); setMsg(null);
    const fd = new FormData(e.currentTarget);
    const body = {
      title: fd.get('title'),
      description: fd.get('description'),
      start_price: Number(fd.get('start_price')),
      currency: (fd.get('currency') as string) || 'EUR',
      seller_name: (fd.get('seller_name') as string) || null
    };
    const r = await fetch('/api/admin/listings', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body)
    });
    const j = await r.json();
    if (!r.ok) { setMsg(j.error || 'Failed'); return; }
    setMsg('Saved'); (e.target as HTMLFormElement).reset(); load();
  };

  return (
    <div className="p-6 max-w-2xl">
      <h2 className="text-xl font-semibold mb-3">Listings</h2>
      <form onSubmit={onSubmit} className="grid gap-2 mb-6">
        <input name="title" placeholder="Title" className="border p-2" required />
        <textarea name="description" placeholder="Description" className="border p-2" />
        <input name="start_price" type="number" step="0.01" placeholder="Start price" className="border p-2" required />
        <input name="currency" placeholder="Currency (EUR)" className="border p-2" />
        <input name="seller_name" placeholder="Seller name (visible to buyers)" className="border p-2" />
        <button className="border p-2">Save</button>
        {msg && <p className="text-sm">{msg}</p>}
      </form>

      <ul className="space-y-2">
        {rows.map(r => (
          <li key={r.id} className="border p-2 rounded">
            <div className="font-medium">{r.title}</div>
            {r.description && <div className="text-sm opacity-80">{r.description}</div>}
            <div className="text-sm">Start: {r.start_price} {r.currency ?? 'EUR'}</div>
            {r.seller_name && <div className="text-sm">Verkoper: {r.seller_name}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}
