import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase.from('menus').select('*').order('position', { ascending: true });
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ rows: data ?? [] });
  } catch (e: any) {
    // tijdens build of ontbrekende env: voorkom crash
    return NextResponse.json({ rows: [], warn: e?.message ?? 'env' }, { status: 200 });
  }
}
