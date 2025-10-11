'use client';
import React, { useEffect, useState } from 'react';

type Page = { id?: string; title: string; slug: string; content_html: string; meta_title?: string; meta_description?: string; published: boolean };
type Menu = { id?: string; label: string; href: string; position: number };

export default function CMSAdmin(){
  const [pages, setPages] = useState<Page[]>([]);
  const [menus, setMenus] = useState<Menu[]>([]);
  const [msg, setMsg] = useState<string|null>(null);

  const load = async () => {
    const [p, m] = await Promise.all([fetch('/api/admin/pages'), fetch('/api/admin/menus')]);
    setPages((await p.json()).rows || []);
    setMenus((await m.json()).rows || []);
  };
  useEffect(()=>{ load(); }, []);

  async function savePage(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault(); setMsg(null);
    const fd = new FormData(e.currentTarget);
    const body = {
      id: fd.get('id') || undefined,
      title: fd.get('title'),
      slug: fd.get('slug'),
      content_html: fd.get('content_html'),
      meta_title: fd.get('meta_title'),
      meta_description: fd.get('meta_description'),
      published: fd.get('published') === 'on',
    };
    const r = await fetch('/api/admin/pages', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)});
    const j = await r.json();
    if (!r.ok) setMsg(j.error || 'Opslaan pagina mislukt'); else { setMsg('Pagina opgeslagen'); (e.target as HTMLFormElement).reset(); load(); }
  }

  async function saveMenu(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault(); setMsg(null);
    const fd = new FormData(e.currentTarget);
    const body = {
      id: fd.get('id') || undefined,
      label: fd.get('label'),
      href: fd.get('href'),
      position: Number(fd.get('position') || 0)
    };
    const r = await fetch('/api/admin/menus', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)});
    const j = await r.json();
    if (!r.ok) setMsg(j.error || 'Opslaan menu mislukt'); else { setMsg('Menu opgeslagen'); (e.target as HTMLFormElement).reset(); load(); }
  }

  return (
    <div className="container" style={{paddingTop:24}}>
      <h1>CMS</h1>
      {msg && <div className="card" style={{borderColor:'#f59e0b', marginTop:8}}>{msg}</div>}
      <div className="card" style={{display:'grid', gap:12}}>
        <b>Nieuwe/aanpassen pagina</b>
        <form onSubmit={savePage} style={{display:'grid', gap:10}}>
          <input name="id" placeholder="(leeg voor nieuw)" style={{height:36, padding:'0 10px', border:'1px solid #e5e7eb', borderRadius:8}} />
          <input name="title" placeholder="Titel" required style={{height:36, padding:'0 10px', border:'1px solid #e5e7eb', borderRadius:8}} />
          <input name="slug" placeholder="slug, bv: about" required style={{height:36, padding:'0 10px', border:'1px solid #e5e7eb', borderRadius:8}} />
          <input name="meta_title" placeholder="SEO: meta title" style={{height:36, padding:'0 10px', border:'1px solid #e5e7eb', borderRadius:8}} />
          <input name="meta_description" placeholder="SEO: meta description" style={{height:36, padding:'0 10px', border:'1px solid #e5e7eb', borderRadius:8}} />
          <label style={{display:'flex', gap:8, alignItems:'center'}}>
            <input type="checkbox" name="published" /> Published
          </label>
          <textarea name="content_html" placeholder="HTML content" rows={10} style={{padding:'8px 10px', border:'1px solid #e5e7eb', borderRadius:8}} />
          <button className="btn">Opslaan pagina</button>
        </form>
      </div>

      <div className="card" style={{display:'grid', gap:12, marginTop:16}}>
        <b>Menu</b>
        <form onSubmit={saveMenu} style={{display:'grid', gap:10}}>
          <input name="id" placeholder="(leeg voor nieuw)" style={{height:36, padding:'0 10px', border:'1px solid #e5e7eb', borderRadius:8}} />
          <input name="label" placeholder="Tekst" required style={{height:36, padding:'0 10px', border:'1px solid #e5e7eb', borderRadius:8}} />
          <input name="href" placeholder="/about of /page/<slug>" required style={{height:36, padding:'0 10px', border:'1px solid #e5e7eb', borderRadius:8}} />
          <input name="position" type="number" placeholder="positie" defaultValue={0} style={{height:36, padding:'0 10px', border:'1px solid #e5e7eb', borderRadius:8}} />
          <button className="btn">Opslaan menu</button>
        </form>
        <div style={{display:'grid', gap:8}}>
          {menus.map(m => <div key={m.id} className="card">{m.position}. {m.label} → {m.href}</div>)}
        </div>
      </div>

      <div className="card" style={{marginTop:16}}>
        <b>Bestaande pagina's</b>
        <div style={{display:'grid', gap:8, marginTop:8}}>
          {pages.map(p => <div key={p.id} className="card">{p.slug} — {p.title} {p.published ? '' : '(draft)'}</div>)}
        </div>
      </div>
    </div>
  );
}
