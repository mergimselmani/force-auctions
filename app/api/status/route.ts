import { NextResponse } from 'next/server';
const has = (k: string) => Boolean(process.env[k] && process.env[k]!.length > 0);
export async function GET() {
  const envOk = ['NEXT_PUBLIC_SUPABASE_URL','NEXT_PUBLIC_SUPABASE_ANON_KEY','SUPABASE_SERVICE_ROLE_KEY','NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY','STRIPE_SECRET_KEY','RESEND_API_KEY','ADMIN_SECRET'].every(has);
  return NextResponse.json({
    ok: true,
    envReady: envOk,
    links: { health: '/api/health', status: '/api/status', version: '/api/version', envSanity: '/api/env-sanity' },
    ts: new Date().toISOString(),
  });
}
