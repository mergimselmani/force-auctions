import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

function priceAt(tSec:number, start:number, floor:number, duration:number){
  if (duration <= 0) return start;
  const p = Math.max(0, Math.min(1, tSec / duration));
  return Math.max(floor, start - (start - floor) * p);
}

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const sb = getSupabaseAdmin();
  const { data, error } = await sb
    .from('auctions')
    .select('id, listing_id, start_at, started_at, floor_price, market_value, duration_sec, stop_at_market, market_stop_threshold')
    .eq('id', params.id)
    .single();
  if (error || !data) return NextResponse.json({ error: error?.message || 'not found' }, { status: 404 });

  const now = Date.now();
  const started = data.started_at ? new Date(data.started_at).getTime() :
                  (data.start_at ? new Date(data.start_at).getTime() : null);
  let currentPrice: number | null = null;
  if (started && now >= started) {
    const tSec = (now - started) / 1000;
    const { data: lst } = await sb.from('listings').select('start_price').eq('id', data.listing_id).single();
    const startPrice = lst?.start_price ?? 0;
    currentPrice = priceAt(tSec, startPrice, data.floor_price, data.duration_sec ?? 600);
  }
  return NextResponse.json({ ok:true, auction: data, currentPrice });
}

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const sb = getSupabaseAdmin();
  const { action } = await req.json().catch(()=>({}));
  if (action !== 'buy') return NextResponse.json({ error: 'unsupported' }, { status: 400 });

  const { data: a } = await sb.from('auctions').select('*').eq('id', params.id).single();
  if (!a) return NextResponse.json({ error: 'auction not found' }, { status: 404 });
  const { data: l } = await sb.from('listings').select('start_price').eq('id', a.listing_id).single();
  if (!l) return NextResponse.json({ error: 'listing not found' }, { status: 404 });

  const started = a.started_at ? new Date(a.started_at).getTime() :
                  (a.start_at ? new Date(a.start_at).getTime() : null);
  if (!started || Date.now() < started) return NextResponse.json({ error: 'not started' }, { status: 400 });

  const tSec = (Date.now() - started) / 1000;
  const current = Math.round(priceAt(tSec, l.start_price, a.floor_price, a.duration_sec ?? 600));
  if (current < a.floor_price) return NextResponse.json({ error: 'below floor' }, { status: 400 });

  await sb.from('auctions').update({ status: 'sold' }).eq('id', a.id);
  return NextResponse.json({ ok:true, price: current });
}
