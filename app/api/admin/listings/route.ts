import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';


export async function GET() {
  const { data, error } = await supabaseAdmin
    .from('listings')
    .select('id, title, description, start_price, currency, seller_id, seller_name')
    .order('created_at', { ascending: false })
    .limit(100);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ rows: data ?? [] });
}

export async function POST(req: Request) {
  const body = await req.json().catch(()=> ({}));
  const { title, description, start_price, currency, seller_name } = body;
  if (!title || !start_price) return NextResponse.json({ error: 'title and start_price required' }, { status: 400 });

  const { data, error } = await supabaseAdmin
    .from('listings')
    .insert({
      title, description: description ?? null,
      start_price, currency: currency ?? 'EUR',
      seller_id: null, seller_name: seller_name ?? null
    })
    .select('id')
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ok: true, id: data.id });
}
