import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from('listings')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ rows: data ?? [] });
  } catch (e: any) {
    return NextResponse.json({ rows: [], warn: e?.message ?? 'env' }, { status: 200 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { title, description, start_price, min_price, market_value, currency, seller_name, status } = body;

    if (!title || !start_price || !min_price) {
      return NextResponse.json({ error: 'title, start_price, and min_price required' }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from('listings')
      .insert({
        title,
        description: description ?? null,
        start_price,
        min_price,
        market_value: market_value ?? null,
        currency: currency ?? 'EUR',
        seller_id: null,
        seller_name: seller_name ?? null,
        status: status ?? 'draft',
      })
      .select('id')
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ ok: true, id: data!.id });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'env' }, { status: 400 });
  }
}
