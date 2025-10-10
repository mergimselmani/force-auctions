'use client';
import React, { useState } from 'react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(null);
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });
    if (res.ok) {
      const params = new URLSearchParams(window.location.search);
      const to = params.get('redirect') || '/admin';
      window.location.href = to;
    } else {
      const j = await res.json().catch(()=>({error:'Login failed'}));
      setError(j.error || 'Login failed');
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{paddingTop:40, maxWidth:420}}>
      <h1>Admin Login</h1>
      <p style={{color:'#6b7280'}}>Voer het admin-wachtwoord in om het dashboard te openen.</p>
      <form onSubmit={submit} className="card" style={{display:'grid', gap:12}}>
        <label style={{display:'grid', gap:6}}>
          <span>Admin password</span>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
            style={{height:44, padding:'0 12px', border:'1px solid #e5e7eb', borderRadius:10}}/>
        </label>
        <button className="btn" disabled={loading || !password}>{loading ? 'Inloggen…' : 'Login'}</button>
        {error && <div style={{color:'#dc2626'}}>{error}</div>}
      </form>
      <div style={{fontSize:12, color:'#6b7280', marginTop:12}}>Zet <b>ADMIN_SECRET</b> in Vercel → Environment Variables.</div>
    </div>
  );
}
