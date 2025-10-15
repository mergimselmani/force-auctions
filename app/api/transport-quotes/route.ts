import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      from_country,
      to_country,
      dims_l,
      dims_w,
      dims_h,
      weight,
      buyer_email,
      buyer_company,
      buyer_address,
    } = body;

    if (!from_country || !to_country || !buyer_email || !buyer_address) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from('transport_quotes')
      .insert({
        from_country,
        to_country,
        dims_l,
        dims_w,
        dims_h,
        weight,
        buyer_email,
        buyer_company,
        buyer_address,
        status: 'pending',
      })
      .select('id')
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal error' }, { status: 500 });
  }
}
