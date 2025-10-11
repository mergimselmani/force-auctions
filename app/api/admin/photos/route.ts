import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

export async function POST(req: Request) {
  const { listing_id, path } = await req.json().catch(()=>({}));
  if (!listing_id || !path) return NextResponse.json({ error:'listing_id & path required' }, { status: 400 });
  const sb = getSupabaseAdmin();
  const { error } = await sb.from('photos').insert({ listing_id, path });
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ok: true });
}
