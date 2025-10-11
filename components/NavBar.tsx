import Link from 'next/link';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

export default async function NavBar() {
  const sb = getSupabaseAdmin();
  const { data } = await sb.from('menus').select('*').order('position');
  return (
    <nav style={{display:'flex', gap:16, padding:'12px 16px', borderBottom:'1px solid #e5e7eb'}}>
      <Link href="/">Force Auctions</Link>
      {(data||[]).map((m:any)=>(<Link key={m.id} href={m.href}>{m.label}</Link>))}
      <div style={{marginLeft:'auto', display:'flex', gap:12}}>
        <Link href="/sign-in">Sign in</Link>
        <Link href="/sign-up">Sign up</Link>
        <Link href="/admin/tools">Tools</Link>
        <Link href="/admin/listings">Listings</Link>
        <Link href="/admin/cms">CMS</Link>
      </div>
    </nav>
  );
}
