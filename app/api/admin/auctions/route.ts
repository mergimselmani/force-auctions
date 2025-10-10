import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from('auctions')
    .select('id, listing_id, start_at, floor_price, status')
    .order('start_at', { ascending: false })
    .limit(100);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ rows: data ?? [] });
}

export async function POST(req: Request) {
  const body = await req.json().catch(()=> ({}));
  const { listing_id, start_at, floor_price, type } = body;
  if (!listing_id || !start_at || !floor_price) {
    return NextResponse.json({ error: 'listing_id, start_at, floor_price required' }, { status: 400 });
  }
  const { data, error } = await supabaseAdmin
    .from('auctions')
    .insert({ listing_id, start_at, floor_price, type: type ?? 'dutch', status: 'scheduled' })
    .select('id')
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ok: true, id: data.id });
}
