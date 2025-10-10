import { NextResponse } from 'next/server';
const has = (k: string) => Boolean(process.env[k] && process.env[k]!.length > 0);
export async function GET() {
  return NextResponse.json({
    NEXT_PUBLIC_SUPABASE_URL: has('NEXT_PUBLIC_SUPABASE_URL'),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: has('NEXT_PUBLIC_SUPABASE_ANON_KEY'),
    SUPABASE_SERVICE_ROLE_KEY: has('SUPABASE_SERVICE_ROLE_KEY'),
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: has('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY'),
    STRIPE_SECRET_KEY: has('STRIPE_SECRET_KEY'),
    STRIPE_WEBHOOK_SECRET: has('STRIPE_WEBHOOK_SECRET'),
    RESEND_API_KEY: has('RESEND_API_KEY'),
    ADMIN_SECRET: has('ADMIN_SECRET'),
    ts: new Date().toISOString(),
  });
}
