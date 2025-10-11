import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

export async function GET() {
  const sb = getSupabaseAdmin();
  const { data, error } = await sb.from('menus').select('*').order('position');
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ rows: data ?? [] });
}

export async function POST(req: Request) {
  const body = await req.json().catch(()=>({}));
  const { id, label, href, position } = body;
  const sb = getSupabaseAdmin();
  const up = { label, href, position };
  if (id) {
    const { error } = await sb.from('menus').update(up).eq('id', id);
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ ok: true, id });
  } else {
    const { data, error } = await sb.from('menus').insert(up).select('id').single();
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ ok: true, id: data?.id });
  }
}
