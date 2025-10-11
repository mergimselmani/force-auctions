import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

export async function GET() {
  const sb = getSupabaseAdmin();
  const { data, error } = await sb.from('pages').select('*').order('updated_at',{ascending:false});
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ rows: data ?? [] });
}

export async function POST(req: Request) {
  const body = await req.json().catch(()=>({}));
  const { id, title, slug, content_html, meta_title, meta_description, published } = body;
  const sb = getSupabaseAdmin();
  const up = { title, slug, content_html, meta_title, meta_description, published };
  if (id) {
    const { error } = await sb.from('pages').update(up).eq('id', id);
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ ok: true, id });
  } else {
    const { data, error } = await sb.from('pages').insert(up).select('id').single();
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ ok: true, id: data?.id });
  }
}
